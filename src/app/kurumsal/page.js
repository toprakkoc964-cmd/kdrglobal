import PageHero from '@/components/PageHero';
import Image from 'next/image';
import styles from './kurumsal.module.css';

export const metadata = {
  title: "Kurumsal | KDR Global",
  description: "KDR Global kurumsal kimliği, vizyonu, misyonu ve değerleri.",
};

export default function Kurumsal() {
  return (
    <>
      <PageHero 
        title="Kurumsal"
        description="Her yükte aynı özen, her yolda aynı güven anlayışıyla sektörde fark yaratıyoruz."
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-asymmetric">
            <div className={styles.aboutContent}>
              <span className={styles.tag}>Hakkımızda</span>
              <h2>Sektörde Yılların Verdiği Güven ve Tecrübe</h2>
              <p>
                KDR Global, taşımacılık ve transfer sektöründe müşteri memnuniyetini en üst düzeyde tutmayı ilke edinmiş, yenilikçi ve güvenilir bir markadır. Kurulduğumuz günden bu yana, modern araç filomuz ve alanında uzman kadromuzla, bireysel ve kurumsal müşterilerimize premium ulaşım çözümleri sunuyoruz.
              </p>
              <p>
                Gerek VIP transferlerde gerekse personel ve filo kiralama hizmetlerinde, zamanın ne kadar kıymetli olduğunun bilincindeyiz. Bu yüzden tüm operasyonlarımızı "dakiklik, konfor ve güvenlik" üçgeninde kusursuzca planlıyoruz. KDR Global olarak sadece bir noktadan diğerine gitmenizi değil, bu yolculuktan keyif almanızı sağlıyoruz.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1000"
                alt="KDR Global Kurumsal"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.vissionMissionSection}`} id="vizyon">
        <div className="container">
          <div className="grid grid-2">
            <div className={styles.vmCard}>
              <div className={styles.vmIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13V12M12 2V4M12 20V22M2 12H4M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Vizyonumuz</h3>
              <p>Ulaşım sektöründe, teknoloji ve konforu bir araya getirerek, Türkiye'nin en çok tercih edilen ve güvenilen premium transfer & taşımacılık markası olmak.</p>
            </div>
            
            <div className={styles.vmCard}>
              <div className={styles.vmIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Misyonumuz</h3>
              <p>Her bir misafirimizin beklentilerini aşan, güvenli, konforlu ve dakik seyahat çözümleri üreterek, mutlu ve sadık müşteri portföyümüzü her geçen gün büyütmek.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.valuesHeader}>
             <span className={styles.tag}>Değerlerimiz</span>
             <h2>Bizi Biz Yapan Kurumsal İlkeler</h2>
          </div>
          <div className="grid grid-3">
            <div className={styles.valueItem}>
              <h4>Şeffaflık</h4>
              <p>Tüm süreçlerimizde açık iletişim kurar, verilen sözleri eksiksiz yerine getiririz.</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Sürekli Gelişim</h4>
              <p>Araç filomuzu ve hizmet kalitemizi teknolojiyle entegre olarak sürekli yenileriz.</p>
            </div>
            <div className={styles.valueItem}>
              <h4>Müşteri Odaklılık</h4>
              <p>Alınan her kararın ve planlamanın merkezinde müşteri memnuniyeti yatar.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
