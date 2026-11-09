import type { CSSProperties } from 'react';

// Staggers the scroll-reveal animation of an element by the given milliseconds.
export const delay = (ms: number): CSSProperties => ({ '--d': `${ms}ms` }) as CSSProperties;
