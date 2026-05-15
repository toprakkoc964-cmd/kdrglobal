import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`grid ${styles.footerGrid}`}>
          <div className={styles.brand}>
            <Image 
              src="/kdrgloballogo.jpeg" 
              alt="KDR Global Logo" 
              width={120} 
              height={42} 
              className={styles.logoImage}
            />
            <p className={styles.motto}>
              Her Yükte Aynı Özen, Her Yolda Aynı Güven
            </p>
            <div className={styles.socials}>
              <a href="https://instagram.com/kdrglobal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.linksBlock}>
            <h4>Hizmetlerimiz</h4>
            <Link href="/hizmetler/personel-tasima">Personel Taşıma</Link>
            <Link href="/hizmetler/vip-transfer">VIP Transfer Hizmeti</Link>
            <Link href="/hizmetler/araba-kiralama">Araba Kiralama</Link>
            <Link href="/hizmetler/transfer-tasimaciligi">Transfer Taşımacılığı</Link>
          </div>

          <div className={styles.linksBlock}>
            <h4>Kurumsal</h4>
            <Link href="/kurumsal">Hakkımızda</Link>
            <Link href="/kurumsal#vizyon">Vizyon & Misyon</Link>
            <Link href="/iletisim">İletişim</Link>
            <Link href="/sss">Sıkça Sorulan Sorular</Link>
            <Link href="/blog">Blog & Rehberler</Link>
            <Link href="/kvkk">KVKK Aydınlatma Metni</Link>
          </div>

          <div className={styles.contactBlock}>
            <h4>İletişim</h4>
            <a href="tel:05372113803" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0032 20.1986 21.9441 20.474 21.8261 20.7294C21.7082 20.9848 21.5338 21.2147 21.3134 21.4053C21.093 21.5959 20.8311 21.7434 20.5428 21.8394C20.2545 21.9354 19.9455 21.9781 19.633 21.965C16.4866 21.6214 13.4814 20.5517 10.83 18.83C8.36195 17.2604 6.27311 15.1716 4.7035 12.7035C2.97349 10.0357 1.89733 7.01429 1.55401 3.84997C1.54101 3.54131 1.5833 3.23594 1.67848 2.95101C1.77366 2.66608 1.91976 2.4072 2.10793 2.18956C2.2961 1.97191 2.52243 1.79998 2.77287 1.68388C3.0233 1.56778 3.29241 1.50993 3.56401 1.51497H6.56401C7.05436 1.51137 7.52554 1.68962 7.89311 2.0182C8.26068 2.34679 8.49963 2.80496 8.56401 3.29497C8.69234 4.25703 8.92873 5.20173 9.26401 6.11497C9.39864 6.47648 9.42939 6.87271 9.35101 7.24497C9.27263 7.61723 9.08945 7.94511 8.82401 8.17497L7.55401 9.44497C8.97723 11.9514 11.0266 14.0008 13.533 15.424L14.803 14.154C15.0329 13.8885 15.3608 13.7054 15.733 13.627C16.1053 13.5486 16.5015 13.5793 16.863 13.714C17.7762 14.0493 18.7209 14.2857 19.683 14.414C20.1772 14.4789 20.6387 14.7212 20.9686 15.0934C21.2985 15.4655 21.4746 15.9427 21.463 16.435L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              0537 211 38 03
            </a>
            <a href="mailto:info@kdrglobal.net" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              info@kdrglobal.net
            </a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} KDR Global. Tüm Hakları Saklıdır.</p>
          <div className={styles.bottomLinks}>
            <Link href="/gizlilik">Gizlilik Politikası</Link>
            <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
