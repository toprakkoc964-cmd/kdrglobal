import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import styles from './iletisim.module.css';

export const metadata = {
  title: "İletişim | KDR Global",
  description: "KDR Global ile iletişime geçin. VIP transfer, araç kiralama ve personel taşımacılığı teklifleri için bize ulaşın.",
};

export default function Iletisim() {
  return (
    <>
      <PageHero 
        title="İletişim"
        description="Sorularınız, rezervasyonlarınız veya özel transfer talepleriniz için 7/24 hizmetinizdeyiz."
        imageSrc="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-4xl)' }}>
            
            {/* Contact Info */}
            <div>
              <span className={styles.tag}>Bize Ulaşın</span>
              <h2 className={styles.title}>Her Zaman Yanınızdayız</h2>
              <p className={styles.desc}>İhtiyaç duyduğunuz her an KDR Global ekibine ulaşabilir, hizmetlerimiz hakkında detaylı bilgi alabilir veya hemen rezervasyon yapabilirsiniz.</p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0032 20.1986 21.9441 20.474 21.8261 20.7294C21.7082 20.9848 21.5338 21.2147 21.3134 21.4053C21.093 21.5959 20.8311 21.7434 20.5428 21.8394C20.2545 21.9354 19.9455 21.9781 19.633 21.965C16.4866 21.6214 13.4814 20.5517 10.83 18.83C8.36195 17.2604 6.27311 15.1716 4.7035 12.7035C2.97349 10.0357 1.89733 7.01429 1.55401 3.84997C1.54101 3.54131 1.5833 3.23594 1.67848 2.95101C1.77366 2.66608 1.91976 2.4072 2.10793 2.18956C2.2961 1.97191 2.52243 1.79998 2.77287 1.68388C3.0233 1.56778 3.29241 1.50993 3.56401 1.51497H6.56401C7.05436 1.51137 7.52554 1.68962 7.89311 2.0182C8.26068 2.34679 8.49963 2.80496 8.56401 3.29497C8.69234 4.25703 8.92873 5.20173 9.26401 6.11497C9.39864 6.47648 9.42939 6.87271 9.35101 7.24497C9.27263 7.61723 9.08945 7.94511 8.82401 8.17497L7.55401 9.44497C8.97723 11.9514 11.0266 14.0008 13.533 15.424L14.803 14.154C15.0329 13.8885 15.3608 13.7054 15.733 13.627C16.1053 13.5486 16.5015 13.5793 16.863 13.714C17.7762 14.0493 18.7209 14.2857 19.683 14.414C20.1772 14.4789 20.6387 14.7212 20.9686 15.0934C21.2985 15.4655 21.4746 15.9427 21.463 16.435L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h5>Telefon</h5>
                    <a href="tel:05372113803">0537 211 38 03</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <a href="mailto:info@kdrglobal.net">info@kdrglobal.net</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h5>Merkez Ofis</h5>
                    <p>İzmir, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Adınız Soyadınız</label>
                  <input type="text" id="name" className={styles.input} placeholder="Örn: Ahmet Yılmaz" required />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Telefon Numaranız</label>
                  <input type="tel" id="phone" className={styles.input} placeholder="05XX XXX XX XX" required />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="service">Hizmet Türü</label>
                  <select id="service" className={styles.input}>
                    <option value="">Lütfen seçiniz</option>
                    <option value="vip">VIP Transfer</option>
                    <option value="personel">Personel Taşıma</option>
                    <option value="kiralama">Araç Kiralama</option>
                    <option value="transfer">Genel Transfer</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Mesajınız / Talebiniz</label>
                  <textarea id="message" rows="4" className={styles.input} placeholder="Size nasıl yardımcı olabiliriz?" required></textarea>
                </div>

                <Button variant="primary" style={{ width: '100%' }}>Gönder</Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className={styles.mapSection}>
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000.00000000000!2d27.142826!3d38.423734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="KDR Global İzmir Konum"
         ></iframe>
      </section>
    </>
  );
}
