'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
