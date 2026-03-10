import Link from 'next/link';
import {
  BUSINESS_ADDRESS,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_EMAIL,
  BUSINESS_HOURS
} from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:px-6">
        <div className="flex-1 space-y-3">
          <h3 className="text-base font-semibold text-secondary">
            {BUSINESS_NAME}
          </h3>
          <p className="text-sm text-slate-600">{BUSINESS_ADDRESS}</p>
          <p className="text-sm text-slate-600">
            Tel:{' '}
            <a href={`tel:${BUSINESS_PHONE}`} className="hover:text-primary">
              {BUSINESS_PHONE}
            </a>
          </p>
          <p className="text-sm text-slate-600">
            Email:{' '}
            <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-primary">
              {BUSINESS_EMAIL}
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-secondary">
            Opening Hours
          </h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {BUSINESS_HOURS.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-secondary">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>Website prepared for static deployment on Vercel.</p>
        </div>
      </div>
    </footer>
  );
}

