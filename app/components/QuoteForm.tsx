// src/components/QuoteForm.tsx
'use client';

import { useState } from 'react';
import styles from '../styles/QuoteForm.module.css';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className={styles.quoteSection}>
      <h2>Request Your Free Quote</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required
        />
        <select
          value={formData.serviceType}
          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
          required
        >
          <option value="">Select Service Type</option>
          <option value="office">Office Cleaning</option>
          <option value="floor">Floor Buffing</option>
          <option value="carpet">Carpet Cleaning</option>
          {/* Add other options */}
        </select>
        <textarea
          placeholder="Additional Details"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <button type="submit">Get Quote</button>
      </form>
    </section>
  );
}