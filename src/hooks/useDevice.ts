import { useEffect, useState } from 'react';
import { UAParser } from 'ua-parser-js';

const BREAKPOINTS = { mobile: 612, tablet: 1024 };

const getDeviceType = (width: number) => ({
  isMobile: width <= BREAKPOINTS.mobile,
  isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
  isDesktop: width > BREAKPOINTS.tablet,
});

export const useDevice = () => {
  const { getBrowser } = new UAParser();
  const [device, setDevice] = useState(() => getDeviceType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setDevice(getDeviceType(window.innerWidth));

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...device,
    browser: getBrowser().name,
  };
};
