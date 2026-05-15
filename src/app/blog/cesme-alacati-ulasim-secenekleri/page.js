import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = {
  title: "Çeşme ve Alaçatı'ya Ulaşım: En İyi Yollar ve Fiyatlar",
  description: "İzmir'den Çeşme ve Alaçatı'ya nasıl gidilir? Otobüs, taksi ve VIP transfer seçenekleri, süreler ve 2025 güncel fiyat karşılaştırması.",
  keywords: ['Çeşme ulaşım', 'Alaçatı transfer', 'İzmir Çeşme nasıl gidilir', 'Çeşme VIP transfer fiyat'],
};

export default function BlogPost2() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Çeşme ve Alaçatı'ya Ulaşım: En İyi Yollar ve Fiyatlar",
    "author": { "@type": "Organization", "name": "KDR Global" },
    "datePublished": "2025-04-28",
    "description": "İzmir'den Çeşme ve Alaçatı'ya ulaşım seçenekleri ve fiyat karşılaştırması."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <PageHero
        title="Çeşme ve Alaçatı'ya Ulaşım Rehberi"
        description="Ege'nin incisi Çeşme ve Alaçatı'ya en konforlu ulaşım yolları."
        imageSrc="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <article style={{ lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            <p style={{ fontSize: '1.15rem', marginBottom: 'var(--space-xl)' }}>
              <strong>Çeşme</strong> ve <strong>Alaçatı</strong>, özellikle yaz aylarında Türkiye'nin en popüler tatil destinasyonları arasında yer alır. İzmir'den veya İzmir Havalimanı'ndan bu bölgelere ulaşım seçeneklerini bilmek, tatilinizin ilk anından itibaren stressiz ve keyifli geçmesini sağlar.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>İzmir Şehir Merkezinden Çeşme'ye Ulaşım</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              İzmir'den Çeşme'ye yaklaşık <strong>80 km</strong> mesafe vardır. Otoyol üzerinden araçla ortalama <strong>1 saat</strong> sürmektedir. İzmir Otogarı'ndan (Üçkuyular) kalkan şehirler arası otobüsler de mevcut olsa da, özellikle yaz dönemlerinde yoğunluk sebebiyle seferler oldukça kalabalık olmaktadır.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>VIP Transfer ile Fark Yaratın</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              4 kişilik bir aile olarak düşündüğünüzde, kişi başı VIP transfer maliyeti otobüs bileti fiyatına oldukça yakın seviyelere gelmektedir. Üstelik <strong>kapıdan kapıya hizmet</strong> almanın rahatlığı, bagaj taşıma kolaylığı ve çocuklarla seyahatte sunulan konfor karşılaştırılmayacak düzeydedir.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>Alaçatı İçin Ekstra Bilgiler</h2>
            <p style={{ marginBottom: 'var(--space-2xl)' }}>
              Alaçatı, Çeşme'nin yaklaşık 10 km doğusunda yer alır. Birçok transfer firması yalnızca Çeşme merkezine kadar hizmet verse de, <strong>KDR Global</strong> olarak biz sizi doğrudan otelinizin veya villanızın kapısına kadar bırakıyoruz. Dar Alaçatı sokaklarında bile deneyimli şoförlerimizle güvenle ulaşırsınız.
            </p>

            <div style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: 'var(--space-sm)' }}>Çeşme Tatilinizi Stressiz Başlatın</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--space-lg)' }}>İzmir'den Çeşme veya Alaçatı'ya VIP transfer rezervasyonunuzu hemen oluşturun.</p>
              <Button href="/iletisim" variant="accent">Hemen Teklif Al</Button>
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
