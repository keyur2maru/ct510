// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/ct510/images/logo-green.svg"
            alt="The Clean Team 510"
            width={150}
            height={150}
          />
        </Link>
      </div>
      
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/commercial">Commercial Services</Link>
        <Link href="/residential">Residential Services</Link>
        <Link href="/quote">Request Quote</Link>
        <Link href="/offers">Special Offers</Link>
        <Link href="/book">Book a Cleaning</Link>
      </nav>
      
      <button 
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}