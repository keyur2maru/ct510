// components/BeforeAfter.tsx
'use client';

import Image from "next/image";
import { useState } from "react";
import styles from '../styles/BeforeAfter.module.css';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  title
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div 
        className="w-full relative" 
        onMouseUp={handleInteractionEnd} 
        onTouchEnd={handleInteractionEnd}
      >
        <div
          className="relative w-full max-w-[1000px] aspect-[16/9] m-auto overflow-hidden select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={handleInteractionStart}
          onTouchStart={handleInteractionStart}
        >
          <Image
            alt="Before"
            fill
            priority
            src={beforeImage}
            className="object-cover"
          />
          <div
            className="absolute top-0 left-0 right-0 w-full max-w-[1000px] aspect-[16/9] m-auto overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              fill
              priority
              alt="After"
              src={afterImage}
              className="object-cover"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{
              left: `calc(${sliderPosition}% - 1px)`,
            }}
          >
            <div className="bg-white absolute rounded-full h-4 w-4 -left-[7px] top-[calc(50%-8px)]" />
          </div>
        </div>
      </div>
    </div>
  );
}