import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import Image from 'next/image';
import styles from '../hizmet.module.css';

export const metadata = {
  title: "İzmir VIP Transfer Hizmeti | Lüks Araç",
  description: "İzmir'de Mercedes Vito ile VIP transfer. Adnan Menderes Havalimanı karşılama, Çeşme, Alaçatı ve Urla özel transfer. 7/24 lüks makam aracı hizmeti.",
  keywords: ['İzmir VIP transfer', 'İzmir lüks transfer', 'Adnan Menderes VIP karşılama', 'Çeşme transfer', 'Alaçatı VIP transfer', 'İzmir makam aracı'],
};

export default function VipTransfer() {
  return (
    <>
      <PageHero 
        title="VIP Transfer Hizmeti"
        description="Ayrıcalıklı ve prestijli bir yolculuk deneyimi."
        imageSrc="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-asymmetric">
            <div className={styles.contentWrapper}>
              <span className={styles.tag}>Lüks ve Konfor</span>
              <h2 className={styles.title}>Kendinizi Ayrıcalıklı Hissedin</h2>
              <p className={styles.desc}>
                İzmir'deki önemli iş toplantılarınız, Adnan Menderes Havalimanı karşılamalarınız veya Çeşme/Alaçatı gibi bölgelere yapacağınız özel seyahatleriniz için tasarlanmış VIP Transfer hizmetimizle, yolculuğun yorgunluğunu hissetmeden gideceğiniz yere ulaşırsınız.
              </p>
              <p className={styles.desc}>
                Özel tasarımlı Mercedes Vito ve lüks segment makam araçlarımız; deri koltuklar, multimedya sistemleri, ücretsiz Wi-Fi ve ikramlıklarla donatılmıştır. Yabancı dil bilen, özel eğitimli şoförlerimizle profesyonel bir karşılama sunuyoruz.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>Ultra Lüks Araç İçi Donanım</h4>
                    <p>Çalışma masası, TV, minibar ve kişiselleştirilebilir iklimlendirme sistemleri.</p>
                  </div>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>7/24 Özel Karşılama (Meet & Greet)</h4>
                    <p>Havalimanlarında isimle karşılama ve bagaj asistanlığı hizmetleri.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000"
                alt="Lüks Makam Aracı"
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Hemen VIP Transfer Rezervasyonu Yapın</h2>
            <p>Siz sadece gideceğiniz noktayı belirleyin, yolculuğun ayrıcalığını KDR Global ile yaşayın.</p>
            <Button href="/iletisim" variant="accent">Rezervasyon Oluştur</Button>
          </div>
        </div>
      </section>
    </>
  );
}
