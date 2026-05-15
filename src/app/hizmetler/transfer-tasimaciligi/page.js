import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import Image from 'next/image';
import styles from '../hizmet.module.css';

export const metadata = {
  title: "İzmir Havalimanı ve Şehirler Arası Transfer",
  description: "Adnan Menderes Havalimanı transferi, İzmir şehir içi ve şehirler arası güvenilir ulaşım. Çeşme, Kuşadası, Bodrum, Denizli transfer hizmetleri. KDR Global.",
  keywords: ['İzmir havalimanı transfer', 'Adnan Menderes transfer', 'İzmir Çeşme transfer', 'İzmir Bodrum transfer', 'İzmir Kuşadası transfer'],
};

export default function TransferTasimaciligi() {
  return (
    <>
      <PageHero 
        title="Transfer Taşımacılığı"
        description="Planlarınız aksamasın, noktadan noktaya zamanında ulaşım sağlayın."
        imageSrc="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-asymmetric">
            <div className={styles.contentWrapper}>
              <span className={styles.tag}>Güvenli & Hızlı</span>
              <h2 className={styles.title}>İstediğiniz Yerden, İstediğiniz Yere</h2>
              <p className={styles.desc}>
                İzmir Adnan Menderes Havalimanı transferlerinden Çeşme, Alaçatı ve Urla otel ulaşımlarına, şehirler arası yolculuklardan özel etkinlik taşımacılığına kadar tüm transfer ihtiyaçlarınızda KDR Global kalitesini tercih edin. Ege bölgesinin her noktasına güvenle ulaşın.
              </p>
              <p className={styles.desc}>
                Uçuş saatiniz ne olursa olsun, uçuş takip sistemlerimiz sayesinde olası rötarlarda bile sizi bekleyen bir aracınız olur. Geniş bagaj hacmine sahip araçlarımız ve deneyimli şoförlerimiz ile aileniz veya grubunuzla birlikte konforla seyahat edersiniz.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>Uçuş Takip Sistemi ve Karşılama</h4>
                    <p>Uçuşunuzdaki değişiklikleri anlık takip ederek terminalde sizi karşılıyoruz.</p>
                  </div>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>Geniş Bagaj ve Gruplara Özel Araçlar</h4>
                    <p>Minibüs ve VIP vanlarımız ile büyük aileler ve gruplar için rahat ulaşım.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000"
                alt="Havalimanı Transfer Taşımacılığı"
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Sorunsuz Bir Ulaşım İçin Yerinizi Ayırtın</h2>
            <p>Tatiliniz veya iş seyahatiniz için havalimanı ve otel transfer rezervasyonunuzu önceden oluşturun, rahat edin.</p>
            <Button href="/iletisim" variant="accent">Transfer Rezervasyonu</Button>
          </div>
        </div>
      </section>
    </>
  );
}
