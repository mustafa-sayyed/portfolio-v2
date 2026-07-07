"use client";
import { useEffect, useState } from "react";

type TextSliderProps = {
  items: string[];
  intervalMs?: number;
  className?: string;
};

function TextSlider({ items, intervalMs = 2800, className }: TextSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [items, intervalMs]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={className} aria-live="polite">
      <p
        key={items[activeIndex]}
        className="font-light italic animate-in fade-in slide-in-from-bottom-1 duration-500"
      >
        {items[activeIndex]}
      </p>
    </div>
  );
}

export default TextSlider;
