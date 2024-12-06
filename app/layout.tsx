import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeRegistry from "@/components/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tae Tanuson",
  description: "Welcome to Tae Tanuson's portfolio. Explore my projects, skills, and experiences in software development and design.",
  keywords: '',
  authors: [{ name: 'Tae Tanuson' }],
  openGraph: {
    title: 'Tae Tanuson',
    description: 'Welcome to Tae Tanuson\'s portfolio. Explore my projects, skills, and experiences in software development and design.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Tae Tanuson',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tae Tanuson',
    description: 'Welcome to Tae Tanuson\'s portfolio. Explore my projects, skills, and experiences in software development and design.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
