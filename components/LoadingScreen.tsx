"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let width = 0;
    const interval = window.setInterval(() => {
      width += 1;
      setProgress(width);

      if (width >= 100) {
        window.clearInterval(interval);
        setFading(true);
        window.setTimeout(() => setHidden(true), 500);
      }
    }, 10);

    return () => window.clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#151515] transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy={!fading}
    >
      <div
        className="absolute inset-y-0 left-0 bg-[var(--color-accent)] transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
      <span className="relative z-10 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-[var(--color-ink)] mix-blend-difference sm:text-6xl">
        {progress}%
      </span>
    </div>
  );
}
