import PageHero from '@/components/PageHero';

export const metadata = {
  title: "KVKK Aydınlatma Metni | KDR Global",
  description: "KDR Global Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni ve gizlilik politikası.",
};

export default function Kvkk() {
  return (
    <>
      <PageHero 
        title="KVKK Aydınlatma Metni"
        description="Kişisel verilerinizin güvenliği ve işlenmesi hakkında bilgilendirme."
        imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ background: 'var(--color-surface)', padding: 'var(--space-3xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)' }}>
            
            <h2 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>1. Veri Sorumlusunun Kimliği</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)', lineHeight: '1.7' }}>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("Kanun") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla KDR Global ("Şirket") tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>

            <h2 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>2. Kişisel Verilerin İşlenme Amacı</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)', lineHeight: '1.7' }}>
              Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, araç kiralama, VIP transfer ve personel taşımacılığı operasyonlarının güvenli bir şekilde yürütülmesi, müşteri ilişkileri yönetiminin sağlanması ve yasal yükümlülüklerimizin yerine getirilmesi amaçlarıyla işlenmektedir.
            </p>

            <h2 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>3. Kişisel Verilerin Aktarımı</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)', lineHeight: '1.7' }}>
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda; iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumları ve özel kişilere Kanun'un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
            </p>

            <h2 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)', lineHeight: '1.7' }}>
              Kişisel verileriniz, Şirketimiz ile iletişime geçtiğiniz formlar, web sitemiz, e-posta, çağrı merkezi gibi kanallar aracılığıyla elektronik ve fiziksel ortamlarda, sözleşmenin kurulması ve ifası, veri sorumlusunun meşru menfaati ve kanunlarda açıkça öngörülmesi hukuki sebeplerine dayanılarak toplanmaktadır.
            </p>

            <h2 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>5. İlgili Kişinin Hakları</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)', lineHeight: '1.7' }}>
              Kanun'un 11. maddesi uyarınca veri sahipleri olarak; kişisel veri işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz. Haklarınızı kullanmak için <strong>info@kdrglobal.net</strong> adresine e-posta gönderebilirsiniz.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
