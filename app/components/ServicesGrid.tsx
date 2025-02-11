// src/components/ServicesGrid.tsx
'use client';

import styles from '../styles/ServicesGrid.module.css';

const services = [
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    icon: '🏢',
    description: 'If your business requires a dependable cleaning service that leaves a great impression on clients and ensures everything runs efficiently, contact The Clean Team 510!'
  },
  {
    id: 'floor-buffing',
    title: 'Floor Buffing',
    icon: '✨',
    description: 'A well-organized office enhances productivity and creates a welcoming atmosphere. Keeping your workspace spotless also encourages customers to return!'
  },
  {
    id: 'carpet-steam-cleaning',
    title: 'Carpet Steam Cleaning',
    icon: '🧼',
    description: 'If your company needs a trustworthy cleaning service to ensure a home is in perfect condition before handing it over to the owner, contact The Clean Team 510.'
  },
  {
    id: 'window-washing',
    title: 'Window Washing',
    icon: '🪟',
    description: 'Window cleaning is a challenging, physically demanding task. Let The Clean Team 510 handle the hard work! We offer both residential and commercial services.'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    icon: '🧹',
    description: 'If you want your Los Angeles, California area home to be cleaned to perfection, try The Clean Team 510’s Deep Cleaning Service. We’ll make your home sparkle!'
  },
  {
    id: 'move-out-cleaning',
    title: 'Move Out Cleaning',
    icon: '📦',
    description: 'Whether you\'re preparing a home for sale or rental, or you\'re a tenant looking to secure your full deposit, The Clean Team 510 will have your space looking its absolute best!'
  }
];

export default function ServicesGrid() {
  return (
    <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.cardInner}>
              <div className={styles.initialContent}>
                <span className={styles.icon}>{service.icon}</span>
                <h3 className={styles.title}>{service.title}</h3>
              </div>
              <div className={styles.revealedContent}>
                <h3 className={styles.title}>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}