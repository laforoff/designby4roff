import AnimatedOutlet from '@/components/AnimatedOutlet';
import Cursor from '@/components/Cursor';
import Menu from '@/components/Menu';
import { useHtmlLoader } from '@/hooks/useBodyLoader';
import { useCaseRoutes } from '@/hooks/useCaseRoutes';
import About from '@/modules/About';
import Cases from '@/modules/Cases';
import Experience from '@/modules/Experience';
import Footer from '@/modules/Footer';
import { Main } from '@/modules/Main';
import OneMoreThing from '@/modules/OneMoreThing';
import { useSystemStore } from '@/stores/system';
import { cn } from '@/utils/cn';
import { createRootRoute, useLocation, useMatch, useMatches } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { setDefaultOptions } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';
import { AnimatePresence } from 'framer-motion';
import ReactLenis from 'lenis/react';
import { useRef } from 'react';

export const Route = createRootRoute({
  component: () => {
    const language = useSystemStore((state) => state.language);
    const { pathname } = useLocation();

    setDefaultOptions({ locale: language === 'ru' ? ru : enUS });
    useCaseRoutes();
    useHtmlLoader();

    const matches = useMatches();
    const match = useMatch({ strict: false });
    const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
    const nextMatch = matches[nextMatchIndex];

    const isChildActive = !!nextMatch && pathname !== '/';

    const frozenKey = useRef<string | undefined>(undefined);
    if (isChildActive) {
      frozenKey.current = nextMatch.id;
    }

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
          <AnimatePresence>{isChildActive && <AnimatedOutlet key={frozenKey.current} />}</AnimatePresence>
          <Cursor />
        </ReactLenis>
        <TanStackRouterDevtools position='bottom-right' />
      </>
    );
  },
});
