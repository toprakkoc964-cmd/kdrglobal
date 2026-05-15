import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({ children, variant = 'primary', href, onClick, className = '', style }) {
  const btnClass = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass} onClick={onClick} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
