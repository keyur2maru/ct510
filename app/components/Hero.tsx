// app/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function Hero() {
  const slides = [
    { url: '/images/hero-bg-1.jpg', position: 'top 20% left 50%' },
    { url: '/images/hero-bg-2.jpg', position: 'top' },
    { url: '/images/hero-bg-3.jpg', position: 'center' },
    { url: '/images/hero-bg-4.jpg', position: 'center 20%' },
    { url: '/images/hero-bg-5.jpg', position: 'center' },
    { url: '/images/hero-bg-6.jpg', position: 'center' },
    { url: '/images/hero-bg-7.jpg', position: 'top center' },
    { url: '/images/hero-bg-8.jpg', position: 'center' },
    { url: '/images/hero-bg-9.jpg', position: 'center' },
    { url: '/images/hero-bg-10.jpg', position: 'top center' },
    { url: '/images/hero-bg-11.jpg', position: 'center' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.slideshow}>
        {slides.map((slide, index) => (
          <div
            key={slide.url}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
          >
            <div 
              className={styles.slideImage}
              style={{ 
                backgroundImage: `url(${slide.url})`,
                backgroundPosition: slide.position 
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>The Clean Team 510</h1>
          <p className={styles.slogan}>Clean Spaces Clear Minds</p>
          <div className={styles.cta}>
            <button className={styles.primaryBtn}>
              Request Free Quote
            </button>
            <button className={styles.secondaryBtn}>
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}