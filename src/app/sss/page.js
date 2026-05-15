import PageHero from '@/components/PageHero';
import styles from './sss.module.css';

const faqData = [
  {
    q: "İzmir Adnan Menderes Havalimanı'ndan Çeşme'ye transfer ücreti ne kadar?",
    a: "İzmir Adnan Menderes Havalimanı'ndan Çeşme'ye VIP transfer ücretleri, araç tipine ve yolcu sayısına göre değişiklik gösterir. Güncel fiyat teklifimizi öğrenmek için 0537 211 38 03 numarasından veya iletişim sayfamızdan bize ulaşabilirsiniz."
  },
  {
    q: "VIP transfer araçlarınızda hangi markalar var?",
    a: "Filomuzda Mercedes Vito, Mercedes Sprinter ve premium sedan sınıfı makam araçları bulunmaktadır. Tüm araçlarımız deri koltuk, klima, Wi-Fi ve multimedya sistemi ile donatılmıştır."
  },
  {
    q: "Havalimanı transferinde uçuş rötar yaparsa ne olur?",
    a: "KDR Global olarak tüm uçuşlarınızı anlık olarak takip ediyoruz. Uçuşunuzda herhangi bir rötar olması durumunda şoförümüz otomatik olarak bilgilendirilir ve sizi yeni varış saatinizde karşılar. Ek ücret talep edilmez."
  },
  {
    q: "Personel taşıma hizmeti için minimum sözleşme süresi var mı?",
    a: "Personel taşımacılığı hizmetimizde esnek sözleşme seçenekleri sunuyoruz. Aylık, 3 aylık, 6 aylık veya yıllık kontrat imkanlarımız mevcuttur. Kurumunuzun ihtiyacına en uygun planı birlikte belirleriz."
  },
  {
    q: "İzmir dışında da transfer hizmeti veriyor musunuz?",
    a: "Evet! İzmir merkez dışında Çeşme, Alaçatı, Urla, Kuşadası, Bodrum, Denizli ve Ege bölgesinin tüm noktalarına şehirler arası transfer hizmeti sunuyoruz."
  },
  {
    q: "Araç kiralama hizmetinizde şoför dahil mi?",
    a: "Hem şoförlü hem şoförsüz araç kiralama seçeneklerimiz mevcuttur. VIP transferlerde profesyonel şoförümüz her zaman hizmetinizdedir."
  },
  {
    q: "Rezervasyon nasıl yapılır?",
    a: "Telefon (0537 211 38 03), WhatsApp veya web sitemizdeki iletişim formu üzerinden 7/24 rezervasyon oluşturabilirsiniz. Ekibimiz en kısa sürede dönüş sağlar."
  }
];

export async function generateMetadata() {
  return {
    title: "Sıkça Sorulan Sorular | İzmir Transfer",
    description: "İzmir VIP transfer, havalimanı transferi, araç kiralama ve personel taşıma hakkında en çok sorulan sorular ve cevapları.",
    keywords: ['İzmir transfer fiyatları', 'İzmir havalimanı transfer nasıl', 'VIP transfer ne kadar', 'KDR Global SSS'],
  };
}

export default function SSS() {
  // FAQ Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <PageHero 
        title="Sıkça Sorulan Sorular"
        description="İzmir transfer ve taşımacılık hizmetlerimiz hakkında merak edilenler."
        imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className={styles.faqList}>
            {faqData.map((item, index) => (
              <details key={index} className={styles.faqItem}>
                <summary className={styles.question}>
                  <span className={styles.qNumber}>0{index + 1}</span>
                  <span>{item.q}</span>
                  <svg className={styles.chevron} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <p className={styles.answer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
