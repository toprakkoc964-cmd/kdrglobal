import styles from './ServiceCard.module.css';
import Link from 'next/link';

export default function ServiceCard({ title, description, icon, href, delay = 0 }) {
  return (
    <Link href={href} className={`${styles.card} animate-fade-up`} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.link}>
        Detaylı Bilgi
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
}
