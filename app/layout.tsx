import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mustafa Sayyed — Full Stack Developer",
  description:
    "Hey, I'm Mustafa Sayyed. I build scalable web apps, backend systems, and AI-powered tools. 20 • Full Stack Developer • Open Source Contributor.",
  metadataBase: new URL("https://mustafasayyed.dev"),
  openGraph: {
    title: "Mustafa Sayyed — Full Stack Developer",
    description:
      "I build scalable web apps, backend systems, and AI-powered tools.",
    url: "https://mustafasayyed.dev",
    siteName: "Mustafa Sayyed",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Sayyed — Full Stack Developer",
    description:
      "I build scalable web apps, backend systems, and AI-powered tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
