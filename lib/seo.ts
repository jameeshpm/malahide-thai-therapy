import type { Metadata } from 'next';
import {
  BUSINESS_ADDRESS,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_WEBSITE,
  BUSINESS_TAGLINE
} from './constants';

const baseUrl = BUSINESS_WEBSITE;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${BUSINESS_NAME} | Authentic Thai Massage in Malahide`,
    template: `%s | ${BUSINESS_NAME}`
  },
  description: BUSINESS_TAGLINE,
  keywords: [
    'Thai massage Malahide',
    'Malahide Thai Therapy',
    'lymphatic drainage massage Dublin',
    'deep tissue massage Malahide',
    'massage therapy Malahide',
    'relaxation massage Dublin',
    'manual lymph drainage',
    'Thai spa Malahide'
  ],
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: `${BUSINESS_NAME} | Authentic Thai Massage in Malahide`,
    description: BUSINESS_TAGLINE,
    siteName: BUSINESS_NAME,
    locale: 'en_IE',
    images: [
      {
        url: '/hero-massage.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} treatment room`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | Authentic Thai Massage in Malahide`,
    description: BUSINESS_TAGLINE,
    images: ['/hero-massage.jpg']
  },
  alternates: {
    canonical: baseUrl
  }
};

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_NAME,
    description: BUSINESS_TAGLINE,
    url: BUSINESS_WEBSITE,
    telephone: BUSINESS_PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: "8 James's Terrace",
      addressLocality: 'Malahide',
      addressRegion: 'Dublin',
      postalCode: 'K36 AX26',
      addressCountry: 'IE'
    },
    image: `${BUSINESS_WEBSITE}/hero-massage.jpg`,
    priceRange: '€€',
    sameAs: [
      'https://maps.app.goo.gl/'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '10:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:30',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:30',
        closes: '19:00'
      }
    ]
  };
}

