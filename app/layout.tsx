import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://casa-de-oracion-ssd.vercel.app/"),
  title: "Casa de Oración - South San Diego",
  description:
    "Somos una comunidad de fe comprometida con predicar el Evangelio de manera fiel a la Palabra de Dios. Aquí encontrarás mensajes inspiradores, enseñanza bíblica, adoración, y recursos espirituales para fortalecer tu vida y tu relación con Dios. Únete a nosotros mientras proclamamos que Jesús es el único camino hacia una vida plena y eterna. ¡Suscríbete y sé parte de nuestra misión de compartir el amor y la verdad de Cristo con el mundo!",
  keywords: [
    "iglesia",
    "cristiana",
    "San Diego",
    "South San Diego",
    "Casa de Oración",
    "Evangelio",
    "Biblia",
    "adoración",
    "Jesús",
    "fe",
    "comunidad",
    "predicación",
    "enseñanza bíblica",
    "church",
    "christian",
  ],
  authors: [{ name: "Casa de Oración - South San Diego" }],
  creator: "Casa de Oración - South San Diego",
  publisher: "Casa de Oración - South San Diego",

  robots: {
    index: true,
    follow: true,
    nocache: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://casa-de-oracion-ssd.vercel.app/",
    siteName: "Casa de Oración - South San Diego",
    title: "Casa de Oración - South San Diego",

    images: [
      {
        url: "/opengraph.png",
        width: 800,
        height: 600,
        alt: "Casa de Oración - South San Diego",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Casa de Oración - South San Diego",
    description:
      "Somos una comunidad de fe comprometida con predicar el Evangelio de manera fiel a la Palabra de Dios. Aquí encontrarás mensajes inspiradores, enseñanza bíblica, adoración, y recursos espirituales para fortalecer tu vida y tu relación con Dios. Únete a nosotros mientras proclamamos que Jesús es el único camino hacia una vida plena y eterna. ¡Suscríbete y sé parte de nuestra misión de compartir el amor y la verdad de Cristo con el mundo!",
    images: ["/twitter.png"],
    creator: "@casadeoracionssd",
    site: "@casadeoracionssd",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
