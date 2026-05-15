import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = {
  title: "Kurumsal Personel Taşımacılığının İşletmelere 5 Büyük Faydası",
  description: "İzmir organize sanayi ve fabrikalar için profesyonel personel servis taşımacılığının şirketlere sağladığı avantajlar ve maliyet analizi.",
  keywords: ['İzmir personel taşıma avantajları', 'kurumsal servis hizmeti', 'fabrika personel servisi', 'İzmir OSB personel taşıma'],
};

export default function BlogPost3() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kurumsal Personel Taşımacılığının İşletmelere 5 Büyük Faydası",
    "author": { "@type": "Organization", "name": "KDR Global" },
    "datePublished": "2025-04-15",
    "description": "İşletmeler için profesyonel personel taşımacılığının avantajları."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <PageHero
        title="Personel Taşımacılığının İşletmelere 5 Büyük Faydası"
        description="Kurumsal ulaşım çözümleri ile işletmenizi bir adım öne taşıyın."
        imageSrc="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <article style={{ lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            <p style={{ fontSize: '1.15rem', marginBottom: 'var(--space-xl)' }}>
              İzmir, Aliağa, Torbalı ve Çiğli organize sanayi bölgelerinde faaliyet gösteren birçok firma, çalışanlarının ulaşımını bireysel çabalara bırakarak iş gücü kaybı yaşamaktadır. İşte profesyonel <strong>personel servis hizmetinin</strong> firmanıza kazandıracağı 5 kritik avantaj:
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>1. Çalışan Devamsızlığında Azalma</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              Ulaşım problemi, çalışan devamsızlığının en büyük nedenlerinden biridir. Düzenli ve güvenilir bir servis hizmeti, personelinizin her sabah zamanında işe gelmesini sağlar. Araştırmalara göre profesyonel servis kullanan firmalarda devamsızlık oranı <strong>%40'a kadar düşmektedir</strong>.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>2. Maliyet Optimizasyonu</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              Her çalışana bireysel ulaşım yardımı ödemek yerine, toplu bir servis anlaşması yapmak genellikle <strong>%25-35 daha ekonomik</strong> olmaktadır. Özellikle İzmir gibi geniş bir şehirde optimize edilmiş güzergahlar sayesinde yakıt ve zaman tasarrufu sağlanır.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>3. Verimlilik Artışı</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              Trafik stresinden uzak, konforlu bir yolculukla işe başlayan çalışanlar gün boyunca daha verimli çalışmaktadır. KDR Global araçlarımızdaki klimalı, temiz ve sessiz ortam, çalışanlarınızın güne pozitif başlamasını sağlar.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>4. Çalışan Memnuniyeti ve Bağlılık</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              Servis hizmeti, bir sosyal hak olarak çalışan bağlılığını artıran en etkili araçlardan biridir. İşe alım süreçlerinde bile "servis var" bilgisi, nitelikli adayları çekmenizde büyük avantaj sağlar.
            </p>

            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>5. Yasal Uyumluluk ve Güvenlik</h2>
            <p style={{ marginBottom: 'var(--space-2xl)' }}>
              Profesyonel servis firmaları, araç bakımları, sigorta ve sürücü belgeleri gibi tüm yasal gereklilikleri eksiksiz yerine getirir. <strong>KDR Global</strong> olarak tüm araçlarımız tam kaskoludur ve şoförlerimiz düzenli sağlık kontrollerinden geçer.
            </p>

            <div style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <h3 style={{ color: 'white', marginBottom: 'var(--space-sm)' }}>Firmanıza Özel Personel Taşıma Teklifi</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--space-lg)' }}>İzmir'deki fabrikanız veya ofisiniz için personel sayısı ve lokasyona göre özel teklif alın.</p>
              <Button href="/iletisim" variant="accent">Teklif İste</Button>
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
