"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/kdrgloballogo.jpeg" 
              alt="KDR Global Logo" 
              width={120} 
              height={42} 
              className={styles.logoImage}
              style={{ borderRadius: '4px' }}
            />
          </Link>

          <div className={`${styles.links} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Ana Sayfa</Link>
            <div className={styles.dropdown}>
              <span>Hizmetlerimiz</span>
              <div className={styles.dropdownMenu}>
                <Link href="/hizmetler/personel-tasima" onClick={() => setMobileMenuOpen(false)}>Personel Taşıma</Link>
                <Link href="/hizmetler/vip-transfer" onClick={() => setMobileMenuOpen(false)}>VIP Transfer Hizmeti</Link>
                <Link href="/hizmetler/araba-kiralama" onClick={() => setMobileMenuOpen(false)}>Araba Kiralama</Link>
                <Link href="/hizmetler/transfer-tasimaciligi" onClick={() => setMobileMenuOpen(false)}>Transfer Taşımacılığı</Link>
              </div>
            </div>
            <Link href="/kurumsal" onClick={() => setMobileMenuOpen(false)}>Kurumsal</Link>
            <Link href="/iletisim" onClick={() => setMobileMenuOpen(false)}>İletişim</Link>
            
            <div className={styles.mobileActions}>
              <Button href="/iletisim" variant="accent">Hemen Teklif Al</Button>
            </div>
          </div>

          <div className={styles.desktopActions}>
             <Button href="/iletisim" variant="accent">Teklif Al</Button>
          </div>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menüyü Aç">
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.bar1 : ''}`}></span>
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.bar2 : ''}`}></span>
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.bar3 : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
