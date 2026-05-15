import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=2000"
            alt="Mercedes Vito VIP Transfer Aracı"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <span className={`${styles.heroTag} animate-fade-up`}>Premium Taşımacılık</span>
          <h1 className={`${styles.heroTitle} animate-fade-up stagger-1`}>
            Yolunuzda <span>Güvenilir</span> Bir Çözüm
          </h1>
          <p className={`${styles.heroDesc} animate-fade-up stagger-2`}>
            KDR Global ile seyahatlerinizde konfor, güvenlik ve profesyonellik standart. İhtiyacınıza özel transfer ve kiralama çözümleriyle her zaman yanınızdayız.
          </p>
          <div className={`${styles.heroActions} animate-fade-up stagger-3`}>
            <Button href="/iletisim" variant="accent">Hemen Teklif Al</Button>
            <Button href="/hizmetler/vip-transfer" variant="ghost" style={{ borderColor: '#ffffff', color: '#ffffff' }}>Hizmetleri İncele</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Hizmetlerimiz</span>
            <h2>Size Özel Taşıma Çözümleri</h2>
            <p>Bireysel ve kurumsal tüm ulaşım ihtiyaçlarınız için güvenli, konforlu ve zamanında hizmet sağlıyoruz.</p>
          </div>

          <div className="grid grid-4">
            <ServiceCard 
              title="Personel Taşıma" 
              description="Kurumunuza özel, dakik ve konforlu personel servis taşımacılığı."
              href="/hizmetler/personel-tasima"
              delay={0}
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H22V10L18 6H6L2 10V20H7M17 20V22H19V20M17 20H7M7 20V22H5V20M2 10L6 4H18L22 10M6 10H18M14 15.5C14 16.6046 13.1046 17.5 12 17.5C10.8954 17.5 10 16.6046 10 15.5C10 14.3954 10.8954 13.5 12 13.5C13.1046 13.5 14 14.3954 14 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <ServiceCard 
              title="VIP Transfer" 
              description="Özel misafirleriniz için lüks donanımlı araçlarla ayrıcalıklı transfer deneyimi."
              href="/hizmetler/vip-transfer"
              delay={0.1}
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 5H15L19 13M5 13H19M5 13V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V13M12 13V19M8 13V19M16 13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2L13 4L15 4.5L13.5 6L14 8L12 7L10 8L10.5 6L9 4.5L11 4L12 2Z" fill="currentColor"/>
                </svg>
              }
            />
            <ServiceCard 
              title="Araba Kiralama" 
              description="Geniş araç filomuzdan ihtiyacınıza uygun aracı esnek şartlarla kiralayın."
              href="/hizmetler/araba-kiralama"
              delay={0.2}
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5858 10.5858L3 18.1716V21H5.82843L6.41421 20.4142H8.41421L9 19.8284V17.8284L9.58579 17.2426H11.5858L13.4142 15.4142" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <ServiceCard 
              title="Transfer Taşımacılığı" 
              description="Havalimanı, otel ve etkinlikleriniz için noktadan noktaya güvenilir ulaşım."
              href="/hizmetler/transfer-tasimaciligi"
              delay={0.3}
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21M7 14H9M13 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={`section ${styles.valueSection}`}>
        <div className="container">
          <div className="grid grid-asymmetric">
            <div className={styles.valueContent}>
              <span className={styles.sectionTag}>Neden Biz?</span>
              <h2>Her Yükte Aynı Özen, Her Yolda Aynı Güven</h2>
              <p>Yılların verdiği tecrübe ve modern araç filomuzla, müşteri memnuniyetini her zaman en üst düzeyde tutuyoruz. KDR Global'i tercih etmeniz için başlıca nedenler:</p>
              
              <div className={styles.valueList}>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Zamanında ve Dakik</h4>
                    <p>Planlarınıza değer veriyor, ulaşımınızı saniyesi saniyesine organize ediyoruz.</p>
                  </div>
                </div>
                
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Güvenli Taşımacılık</h4>
                    <p>Bakımlı araçlarımız ve profesyonel şoför kadromuzla yolculuğunuz tamamen güvence altında.</p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4696 7.60081C14.6045 8.01582 14.9852 8.2924 15.4216 8.2924H20.3364C21.3051 8.2924 21.7079 9.53198 20.9238 10.1017L16.9472 12.9915C16.5941 13.2482 16.4465 13.7025 16.5813 14.1175L18.1005 18.7915C18.4001 19.7131 17.3453 20.4795 16.5615 19.9095L12.5843 17.0175C12.2312 16.7607 11.7688 16.7607 11.4157 17.0175L7.4385 19.9095C6.65471 20.4795 5.59992 19.7131 5.89948 18.7915L7.41865 14.1175C7.55353 13.7025 7.40589 13.2482 7.05284 12.9915L3.07621 10.1017C2.2921 9.53198 2.69486 8.2924 3.66365 8.2924H8.57845C9.01484 8.2924 9.3955 8.01582 9.53039 7.60081L11.0489 2.92705Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Premium Konfor</h4>
                    <p>Yolculuğun yorgunluğunu unutturacak VIP standartlarında iç dizayn ve ikramlar.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.valueImageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000"
                alt="Güvenli ve Konforlu Yolculuk"
                fill
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className={`section ${styles.fleetSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag} style={{ color: 'var(--color-surface)' }}>Filomuz</span>
            <h2>Geniş ve Modern Araç Seçenekleri</h2>
            <p>İhtiyacınıza uygun sedan, minivan veya minibüs tipi VIP araçlarımızla hizmetinizdeyiz.</p>
          </div>

          <div className={styles.fleetGrid}>
            <div className={styles.fleetCard}>
              <div className={styles.fleetImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800"
                  alt="Mercedes Vito VIP"
                  fill
                  className={styles.heroImage}
                />
              </div>
              <div className={styles.fleetCardContent}>
                <h3>VIP Minivan (Vito vb.)</h3>
                <p>Maksimum 6-7 yolcu kapasiteli, deri koltuklu, tam donanımlı premium araçlar.</p>
                <div className={styles.fleetFeatures}>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 7 Kişi</span>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> VIP</span>
                </div>
              </div>
            </div>

            <div className={styles.fleetCard}>
              <div className={styles.fleetImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
                  alt="Personel Taşıma Minibüs"
                  fill
                  className={styles.heroImage}
                />
              </div>
              <div className={styles.fleetCardContent}>
                <h3>Minibüs (Sprinter vb.)</h3>
                <p>16-19 yolcu kapasiteli, personel veya grup taşımacılığına uygun geniş hacimli araçlar.</p>
                <div className={styles.fleetFeatures}>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 16-19 Kişi</span>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Konforlu</span>
                </div>
              </div>
            </div>

            <div className={styles.fleetCard}>
              <div className={styles.fleetImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
                  alt="Premium Sedan"
                  fill
                  className={styles.heroImage}
                />
              </div>
              <div className={styles.fleetCardContent}>
                <h3>Premium Sedan</h3>
                <p>Bireysel veya yönetici transferleri için tasarlanmış, üst sınıf makam araçları.</p>
                <div className={styles.fleetFeatures}>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 3 Kişi</span>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Makam Aracı</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
             <Button href="/iletisim" variant="ghost" style={{ borderColor: 'var(--color-surface)', color: 'var(--color-surface)' }}>
               Tüm Araçlarımızı Keşfedin
             </Button>
          </div>
        </div>
      </section>
    </>
  );
}
