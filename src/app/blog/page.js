import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.css';

const blogPosts = [
  {
    slug: 'izmir-havalimani-transferi-rehberi',
    title: 'İzmir Adnan Menderes Havalimanı Transfer Rehberi 2025',
    excerpt: 'İzmir Adnan Menderes Havalimanı\'ndan Çeşme, Alaçatı, Kuşadası veya şehir merkezine nasıl ulaşılır? Tüm transfer seçeneklerini karşılaştırıyoruz.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600',
    date: '2025-05-10',
    category: 'Ulaşım Rehberi'
  },
  {
    slug: 'cesme-alacati-ulasim-secenekleri',
    title: 'Çeşme ve Alaçatı\'ya Ulaşım: En İyi Yollar ve Fiyatlar',
    excerpt: 'İzmir\'den Çeşme ve Alaçatı\'ya ulaşmanın en konforlu ve ekonomik yollarını, VIP transfer avantajlarını detaylıca inceliyoruz.',
    image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=600',
    date: '2025-04-28',
    category: 'VIP Transfer'
  },
  {
    slug: 'kurumsal-personel-tasima-avantajlari',
    title: 'Kurumsal Personel Taşımacılığının İşletmelere 5 Büyük Faydası',
    excerpt: 'İzmir\'deki organize sanayi bölgelerinde profesyonel personel servis hizmeti kullanmanın işletmenize sağladığı maddi ve manevi avantajlar.',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=600',
    date: '2025-04-15',
    category: 'Kurumsal'
  }
];

export const metadata = {
  title: "Blog | İzmir Transfer ve Ulaşım Rehberi",
  description: "İzmir ulaşım, VIP transfer ipuçları, havalimanı transfer rehberleri ve araç kiralama hakkında güncel bilgiler. KDR Global Blog.",
  keywords: ['İzmir transfer blog', 'Adnan Menderes transfer rehberi', 'Çeşme ulaşım', 'İzmir ulaşım rehberi'],
};

export default function Blog() {
  return (
    <>
      <PageHero 
        title="Blog & Rehberler"
        description="İzmir ulaşım, transfer ipuçları ve sektörel haberler."
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <Link href={`/blog/${post.slug}`} className={styles.imageLink}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className={styles.image}
                    />
                    <span className={styles.category}>{post.category}</span>
                  </div>
                </Link>
                <div className={styles.content}>
                  <time className={styles.date}>{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Devamını Oku
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
