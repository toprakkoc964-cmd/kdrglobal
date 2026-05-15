import Image from 'next/image';
import styles from './PageHero.module.css';

export default function PageHero({ title, description, imageSrc, imageAlt }) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.heroBg}>
        <Image 
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          className={styles.heroImage}
        />
      </div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className="animate-fade-up">{title}</h1>
        {description && (
          <p className="animate-fade-up stagger-1">{description}</p>
        )}
      </div>
    </section>
  );
}
