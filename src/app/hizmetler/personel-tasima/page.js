import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import Image from 'next/image';
import styles from '../hizmet.module.css';

export const metadata = {
  title: "İzmir Personel Taşıma Hizmeti",
  description: "İzmir organize sanayi, Aliağa, Torbalı ve Çiğli bölgelerinde fabrika ve ofisler için güvenilir, konforlu ve dakik personel servis taşımacılığı. KDR Global farkıyla.",
  keywords: ['İzmir personel taşıma', 'İzmir servis kiralama', 'fabrika personel servisi İzmir', 'Aliağa personel taşıma', 'Torbalı servis'],
};

export default function PersonelTasima() {
  return (
    <>
      <PageHero 
        title="Personel Taşıma"
        description="Kurumunuzun gücüne güç katan, dakik ve güvenli servis taşımacılığı."
        imageSrc="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-asymmetric">
            <div className={styles.contentWrapper}>
              <span className={styles.tag}>Kurumsal Çözümler</span>
              <h2 className={styles.title}>Ekibiniz Güvende, İşiniz Yolunda</h2>
              <p className={styles.desc}>
                Çalışanlarınızın güne zinde ve stressiz başlaması, iş verimliliğini doğrudan etkileyen en önemli faktörlerden biridir. KDR Global olarak, kurumunuza özel hazırlanan güzergah planlamalarıyla personelinizin zamanında ve konforlu bir şekilde işe ulaşmasını sağlıyoruz.
              </p>
              <p className={styles.desc}>
                Geniş araç filomuz, tecrübeli şoför kadromuz ve GPS tabanlı takip sistemlerimiz ile personel taşıma operasyonunuzu sıfır hata prensibiyle yönetiyoruz.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>Optimum Güzergah ve Dakiklik</h4>
                    <p>En kısa ve güvenli rotalar belirlenerek zaman kayıpları önlenir.</p>
                  </div>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>Yüksek Güvenlik Standartları</h4>
                    <p>Tüm servis araçlarımız periyodik olarak bakımdan geçer ve tam kaskoludur.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1000"
                alt="Personel Taşıma Araçları"
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Kurumunuza Özel Fiyat Teklifi Alın</h2>
            <p>Firmanızın personel sayısına ve lokasyonuna özel en uygun taşıma çözümleri için uzman ekibimizle hemen iletişime geçin.</p>
            <Button href="/iletisim" variant="accent">İletişime Geç</Button>
          </div>
        </div>
      </section>
    </>
  );
}
