import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import Image from 'next/image';
import styles from '../hizmet.module.css';

export const metadata = {
  title: "İzmir Araç Kiralama | Rent A Car",
  description: "İzmir'de şoförlü ve şoförsüz araç kiralama. Adnan Menderes Havalimanı teslim, günlük-aylık esnek rent a car seçenekleri. Mercedes Vito, Sprinter ve sedan araç filosu.",
  keywords: ['İzmir araç kiralama', 'İzmir rent a car', 'Adnan Menderes Havalimanı araç kiralama', 'İzmir şoförlü araç', 'İzmir minibüs kiralama'],
};

export default function ArabaKiralama() {
  return (
    <>
      <PageHero 
        title="Araba Kiralama"
        description="Esnek kiralama seçenekleri ile her yola çıkmaya hazırız."
        imageSrc="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-asymmetric">
            <div className={styles.contentWrapper}>
              <span className={styles.tag}>Esnek Çözümler</span>
              <h2 className={styles.title}>İhtiyacınıza Uygun Filo Kiralama Seçenekleri</h2>
              <p className={styles.desc}>
                Kısa dönem bireysel seyahatlerinizden, uzun dönem kurumsal filo kiralama ihtiyaçlarınıza kadar her alanda profesyonel Rent A Car hizmeti sunuyoruz. Geniş ve güncel araç filomuz, düzenli bakımları yapılmış olarak her an yola çıkmaya hazır durumdadır.
              </p>
              <p className={styles.desc}>
                KDR Global farkıyla; gizli maliyetler olmadan, şeffaf sözleşme süreçleri ve 7/24 yol yardım desteğiyle güven içinde araç kiralayabilirsiniz. İster ekonomik segment, ister lüks SUV veya minibüs arayışınız olsun, doğru araç sizi bekliyor.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>Şeffaf ve Esnek Sözleşmeler</h4>
                    <p>Günlük, haftalık, aylık veya yıllık kiralama periyotlarında en uygun fiyat garantisi.</p>
                  </div>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>Tam Kapsamlı Sigorta & Yol Yardım</h4>
                    <p>Kiralama süresi boyunca 7/24 teknik destek ve ikame araç güvencesi.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000"
                alt="Rent A Car Araba Kiralama"
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2>Uygun Aracı Bulmak İçin Hemen İletişime Geçin</h2>
            <p>Size ve bütçenize en uygun araç kiralama teklifleri için müşteri temsilcilerimizle görüşün.</p>
            <Button href="/iletisim" variant="accent">Araç Sorgula</Button>
          </div>
        </div>
      </section>
    </>
  );
}
