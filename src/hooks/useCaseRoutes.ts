import { RouteData } from '@/types/RouteData';
import { createCaseRoutes } from '@/utils/createCaseRoutes';
import { useLocation } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

// Синхронная инициализация при загрузке модуля — данные доступны на первом рендере
// без async-ожидания, что устраняет «мигание» дефолтных опций при прямом открытии URL.
const eagerModules = import.meta.glob('/src/routes/cases/**/*.tsx', { eager: true }) as Record<
  string,
  { routeData?: RouteData }
>;
let casesCache: Record<string, RouteData> = Object.fromEntries(
  Object.entries(eagerModules)
    .filter(([, mod]) => mod.routeData)
    .map(([path, mod]) => [path.replace('/src/routes', '').replace('.tsx', ''), mod.routeData!]),
);

export const useCaseRoutes = () => {
  const { pathname } = useLocation();
  const [cases, setCases] = useState<Record<string, RouteData>>(casesCache);
  const currentCaseKey = pathname.replace('/src/routes', '').replace('.tsx', '');
  const rawCurrentCase = cases[currentCaseKey];
  const lastCurrentCaseRef = useRef<RouteData | undefined>(undefined);
  if (rawCurrentCase) lastCurrentCaseRef.current = rawCurrentCase;
  const currentCase = rawCurrentCase ?? lastCurrentCaseRef.current;

  const reloadRoutes = async () => {
    const newRoutes = await createCaseRoutes();
    casesCache = newRoutes;
    setCases(newRoutes);
  };

  useEffect(() => {
    reloadRoutes();
  }, []);

  useEffect(() => {
    if (!pathname.includes('cases')) return;
    reloadRoutes();
  }, [pathname]);

  return { cases, currentCase, currentCaseKey };
};
