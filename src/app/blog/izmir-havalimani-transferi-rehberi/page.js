import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = {
  title: "İzmir Adnan Menderes Havalimanı Transfer Rehberi 2025",
  description: "İzmir Adnan Menderes Havalimanı'ndan Çeşme, Alaçatı, Kuşadası, şehir merkezine nasıl gidilir? VIP transfer, otobüs, taksi fiyatları ve karşılaştırması.",
  keywords: ['İzmir havalimanı transfer', 'Adnan Menderes ulaşım', 'ADB havalimanı Çeşme', 'İzmir havalimanı taksi ücreti'],
};

export default function BlogPost1() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "İzmir Adnan Menderes Havalimanı Transfer Rehberi 2025",
    "author": { "@type": "Organization", "name": "KDR Global" },
    "datePublished": "2025-05-10",
    "description": "İzmir Adnan Menderes Havalimanı'ndan tüm popüler destinasyonlara ulaşım rehberi."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <PageHero
        title="İzmir Adnan Menderes Havalimanı Transfer Rehberi 2025"
        description="Havalimanından şehre, şehirden tatile... En konforlu ulaşım seçenekleri."
        imageSrc="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <article style={{ lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            <p style={{ fontSize: '1.15rem', marginBottom: 'var(--space-xl)' }}>
              İzmir Adnan Menderes Havalimanı (ADB), her yıl milyonlarca yerli ve yabancı yolcuya hizmet veren Ege bölgesinin en işlek havalimanıdır. Havalimanından <strong>İzmir şehir merkezine</strong>, <strong>Çeşme ve Alaçatı</strong>'ya, <strong>Kuşadası</strong>'na veya <strong>Urla</strong>'ya ulaşım seçenekleri oldukça fazladır. Ancak hangisinin size en uygun olduğunu bilmek hem zamandan hem de paradan tasarruf etmenizi sağlar.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>1. VIP Transfer ile Ulaşım (En Konforlu)</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              Havalimanından çıktığınız anda sizi isminizle karşılayan profesyonel bir şoför, bagajınızı teslim alan ve klimalı, deri koltuklu Mercedes Vito ile doğrudan kapınıza bırakan bir hizmet düşünün. <strong>KDR Global VIP Transfer</strong> hizmeti ile Adnan Menderes Havalimanı'ndan Çeşme'ye yaklaşık 1 saat, Kuşadası'na 1 saat 15 dakika, şehir merkezine ise yalnızca 20-25 dakikada ulaşırsınız.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>2. Toplu Taşıma / HAVAŞ</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              HAVAŞ ve İZBAN gibi toplu taşıma seçenekleri ekonomik olsa da, özellikle Çeşme ve Kuşadası gibi mesafelerde bekleme süreleri, aktarma noktaları ve sefer saatleri açısından yorucu olabilmektedir. Ailenizle veya grup halinde seyahat ediyorsanız, VIP transfer genellikle kişi başı maliyette bile toplu taşımaya yakın fiyatlar sunabilir.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>3. Taksi</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              Havalimanı taksisi hızlı bir seçenek olsa da, özellikle Çeşme ve Kuşadası gibi uzun mesafelerde fiyatlar oldukça yükselebilmektedir. Ayrıca bagaj kapasitesi ve araç konforu standart taksilerde sınırlı kalabilir.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>Sonuç: Hangi Seçenek Size Uygun?</h2>
            <p style={{ marginBottom: 'var(--space-2xl)' }}>
              Eğer <strong>konfor, dakiklik ve güvenlik</strong> sizin için öncelikliyse, özellikle yaz tatili döneminde Ege bölgesine yapacağınız seyahatler için önceden rezervasyon yaptırmak en mantıklı seçenektir. KDR Global olarak, gece yarısı bile havalimanında sizi karşılayacak bir ekiple hizmetinizdeyiz.
            </p>

            <div style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: 'var(--space-sm)' }}>Havalimanı Transferinizi Şimdiden Planlayın</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--space-lg)' }}>Adnan Menderes Havalimanı'ndan İzmir, Çeşme, Alaçatı veya Kuşadası'na VIP transfer rezervasyonunuzu hemen oluşturun.</p>
              <Button href="/iletisim" variant="accent">Ücretsiz Teklif Al</Button>
            </div>

            <div style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--color-border)' }}>
              <Link href="/blog" style={{ color: 'var(--color-accent)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                ← Tüm Yazılara Dön
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
