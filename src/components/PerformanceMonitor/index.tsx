import { useEffect, useRef, useState } from 'react';

interface Stats {
  fps: number;
  longTasks: number;
  lastLongTask: number | null;
}

export default function PerformanceMonitor() {
  const [stats, setStats] = useState<Stats>({ fps: 0, longTasks: 0, lastLongTask: null });
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const longTaskCount = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // FPS counter via rAF
    const tick = () => {
      frameCount.current++;
      const now = performance.now();
      const elapsed = now - lastTime.current;
      if (elapsed >= 500) {
        const fps = Math.round((frameCount.current * 1000) / elapsed);
        frameCount.current = 0;
        lastTime.current = now;
        setStats((s) => ({ ...s, fps }));
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    // Long Tasks observer
    let observer: PerformanceObserver | null = null;
    if ('PerformanceObserver' in window) {
      try {
        observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            longTaskCount.current++;
            setStats((s) => ({
              ...s,
              longTasks: longTaskCount.current,
              lastLongTask: Math.round(entry.duration),
            }));
          }
        });
        observer.observe({ type: 'longtask', buffered: false });
      } catch {
        // longtask not supported in this browser
      }
    }

    return () => {
      cancelAnimationFrame(rafId.current);
      observer?.disconnect();
    };
  }, []);

  const fpsColor = stats.fps >= 55 ? '#4ade80' : stats.fps >= 30 ? '#facc15' : '#f87171';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.75)',
        color: '#fff',
        fontFamily: 'monospace',
        fontSize: 12,
        padding: '6px 10px',
        borderRadius: 8,
        lineHeight: 1.6,
        pointerEvents: 'none',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div>
        FPS: <span style={{ color: fpsColor, fontWeight: 'bold' }}>{stats.fps}</span>
      </div>
      <div>Long tasks: {stats.longTasks}</div>
      {stats.lastLongTask !== null && <div>Last: {stats.lastLongTask}ms</div>}
    </div>
  );
}
