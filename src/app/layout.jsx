import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fluxus 2025 | IIT Indore's Annual Cultural Fest",
  description:
    "Experience the vibrance of Fluxus 2025, the annual cultural, technical, and artistic fest of IIT Indore. Join us for three days of thrilling events, live performances, and innovation.",
  keywords:
    "Fluxus 2025, IIT Indore Fest, Cultural Festival, Tech Fest, IIT Indore Events, Fluxus IIT Indore, Live Performances, Workshops, Competitions",
  author: "IIT Indore",
  ogImage: "/assets/images/fluxus-banner.jpg",
  url: "https://fluxus.iiti.ac.in/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.ogImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100dvw] overflow-x-clip`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
