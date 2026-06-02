import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/constants/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "UX UI Designer Benin",
    "UX UI Designer Cotonou",
    "Designer graphique Benin",
    "Freelance UI UX Afrique",
    "Portfolio UX UI",
    "Bilal MAOUDE",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/new_profile.png",
        width: 1024,
        height: 1024,
        alt: "Portrait de Bilal MAOUDE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/new_profile.png"],
  },
  icons: {
    icon: "/new_profile.png",
    shortcut: "/new_profile.png",
    apple: "/new_profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              jobTitle: "UX/UI Designer & Designer Graphique",
              url: siteConfig.url,
              image: `${siteConfig.url}/new_profile.png`,
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cotonou",
                addressCountry: "BJ",
              },
              sameAs: [
                "https://www.linkedin.com",
                "https://www.behance.net",
                "https://www.instagram.com",
                "https://www.youtube.com",
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
