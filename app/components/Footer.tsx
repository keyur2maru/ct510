// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Location and Map Section */}
          <div className={styles.mapSection}>
            <h3>Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_CODE"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Service Areas Section */}
          <div className={styles.serviceAreas}>
            <h3>Service Areas</h3>
            <ul>
              <li>San Francisco</li>
              <li>Oakland</li>
              <li>Berkeley</li>
              <li>Alameda</li>
              <li>San Leandro</li>
              {/* Add more service areas */}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className={styles.quickLinks}>
            <h3>Services</h3>
            <ul>
              <li><Link href="/services/office-cleaning">Office Cleaning</Link></li>
              <li><Link href="/services/floor-buffing">Floor Buffing</Link></li>
              <li><Link href="/services/carpet-cleaning">Carpet Cleaning</Link></li>
              <li><Link href="/services/window-cleaning">Window Cleaning</Link></li>
              <li><Link href="/services/deep-cleaning">Deep Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className={styles.contactForm}>
            <h3>Get a Free Estimate</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <button type="submit">Request Quote</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} The Clean Team 510. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}