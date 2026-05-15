import { Outfit, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://kdrglobal.net'),
  title: {
    default: 'KDR Global | Güvenilir ve Premium Transfer Çözümleri',
    template: '%s | KDR Global'
  },
  description: 'İzmir ve Ege bölgesinde güvenilir çözümünüz. KDR Global; İzmir VIP Transfer, Adnan Menderes Havalimanı Transfer, Personel Taşıma ve Araç Kiralama hizmetlerinde öncü kuruluştur.',
  keywords: ['İzmir VIP transfer', 'İzmir araç kiralama', 'Adnan Menderes Havalimanı transfer', 'İzmir personel taşıma', 'Çeşme VIP transfer', 'Alaçatı transfer', 'İzmir şoförlü araç kiralama', 'KDR Global İzmir', 'İzmir lüks transfer', 'Urla transfer'],
  authors: [{ name: 'KDR Global İzmir' }],
  creator: 'KDR Global',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://kdrglobal.net',
    title: 'KDR Global | İzmir VIP Transfer ve Taşımacılık',
    description: 'İzmir ve çevre illerdeki tüm ulaşım ihtiyaçlarınız için güvenli, konforlu ve zamanında hizmet sağlıyoruz.',
    siteName: 'KDR Global',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'KDR Global VIP Transfer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KDR Global | Güvenilir Transfer Çözümleri',
    description: 'Yolunuzda Güvenilir Bir Çözüm. VIP Transfer ve Araç Kiralama hizmetleri.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${outfit.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "KDR Global",
              "image": "https://kdrglobal.net/kdrgloballogo.jpeg",
              "url": "https://kdrglobal.net",
              "telephone": "+905372113803",
              "email": "info@kdrglobal.net",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İzmir",
                "addressRegion": "İzmir",
                "addressCountry": "TR"
              },
              "description": "İzmir ve çevre illerde VIP transfer, havalimanı transferi, araç kiralama ve personel taşımacılığı hizmetleri.",
              "areaServed": ["İzmir", "Çeşme", "Alaçatı", "Urla", "Adnan Menderes Havalimanı"]
            })
          }}
        />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
