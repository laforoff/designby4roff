import { RouteData } from '@/types/RouteData';
import { createCaseRoutes } from '@/utils/createCaseRoutes';
import { useLocation } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

export const useCaseRoutes = () => {
  const { pathname } = useLocation();
  const [cases, setCases] = useState<Record<string, RouteData>>({});
  const currentCaseKey = pathname.replace('/src/routes', '').replace('.tsx', '');
  const rawCurrentCase = cases[currentCaseKey];
  const lastCurrentCaseRef = useRef<RouteData | undefined>(undefined);
  if (rawCurrentCase) lastCurrentCaseRef.current = rawCurrentCase;
  const currentCase = rawCurrentCase ?? lastCurrentCaseRef.current;

  const reloadRoutes = async () => {
    const newRoutes = await createCaseRoutes();
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
