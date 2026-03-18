import Cursor from '@/components/Cursor';
import Menu from '@/components/MenuLegacy';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import { useHtmlLoader } from '@/hooks/useBodyLoader';
import About from '@/modules/About';
import Cases from '@/modules/Cases';
import Experience from '@/modules/Experience';
import Footer from '@/modules/Footer';
import { Main } from '@/modules/Main';
import OneMoreThing from '@/modules/OneMoreThing';
import { useSystemStore } from '@/stores/system';
import { cn } from '@/utils/cn';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { setDefaultOptions } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';
import ReactLenis from 'lenis/react';

export const Route = createRootRoute({
  component: () => {
    const language = useSystemStore((state) => state.language);

    setDefaultOptions({ locale: language === 'ru' ? ru : enUS });
    useHtmlLoader();

    return (
      <>
        <ReactLenis root options={{ duration: 0.8 }}>
          <div className={cn('flex w-full flex-col gap-20 p-[30px] max-md:gap-5 max-md:p-4')}>
            <Main />
            <Cases />
            <About />
            <Experience />
            <OneMoreThing />
            <Footer />
            <Menu />
          </div>
          <Outlet />
          <Cursor />
          {import.meta.env.DEV && <PerformanceMonitor />}
        </ReactLenis>
        <TanStackRouterDevtools position='bottom-right' />
      </>
    );
  },
});
