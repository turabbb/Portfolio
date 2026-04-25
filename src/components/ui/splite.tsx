'use client';

import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<Application | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    const forwardWheelToPage = (event: WheelEvent) => {
      event.preventDefault();
      window.scrollBy({ top: event.deltaY, left: 0, behavior: 'auto' });
    };

    container.addEventListener('wheel', forwardWheelToPage, {
      passive: false,
      capture: true,
    });

    let disposed = false;
    const app = new Application(canvas);
    appRef.current = app;

    app
      .load(scene)
      .then(() => {
        if (!disposed) setIsLoaded(true);
      })
      .catch(() => {
        if (!disposed) setIsLoaded(true);
      });

    return () => {
      disposed = true;
      setIsLoaded(false);
      container.removeEventListener('wheel', forwardWheelToPage, true);
      appRef.current?.dispose?.();
      appRef.current = null;
    };
  }, [scene]);

  return (
    <div ref={containerRef} className={`spline-scene ${className ?? ''}`}>
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 pointer-events-none">
          <span className="loader" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
