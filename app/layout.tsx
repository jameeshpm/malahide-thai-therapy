import type { Metadata } from 'next';
import './globals.css';
import { defaultMetadata, getLocalBusinessJsonLd } from '@/lib/seo';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col text-slate-800">
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}

