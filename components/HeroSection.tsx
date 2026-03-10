'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUSINESS_NAME, BUSINESS_TAGLINE, BUSINESS_PHONE } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-slate-50">
      <div className="absolute inset-0">
        <Image
          src="/hero-thai-massage.jpg"
          alt="Relaxing Thai massage treatment room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/65" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pb-20 pt-24 md:flex-row md:gap-16 md:px-10 md:pb-28 md:pt-28">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Authentic Thai Massage · Malahide
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
            Malahide, Dublin
          </p>
          <h1 className="mt-3 text-3xl font-light tracking-[0.18em] text-slate-50 sm:text-4xl md:text-5xl">
            Restore balance with
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}
              expert Thai therapy
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-100/90 sm:text-base">
            {BUSINESS_TAGLINE}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md shadow-black/10 transition hover:bg-white"
            >
              Book your treatment
            </Link>
            <a
              href={`tel:${BUSINESS_PHONE}`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-black/20 px-5 py-3 text-sm font-semibold text-slate-50 transition hover:border-amber-200/80 hover:text-amber-100"
            >
              Call us: {BUSINESS_PHONE}
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-2 text-xs text-slate-100/90 sm:grid-cols-3 sm:text-sm">
            <li>• Qualified & experienced Thai therapists</li>
            <li>• Manual lymph drainage (MLD) available</li>
            <li>• Open 7 days a week</li>
          </ul>
        </motion.div>

        <motion.div
          className="relative flex-1 self-stretch"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="flex h-full flex-col items-start justify-end rounded-3xl bg-black/20 p-5 backdrop-blur-sm md:p-7">
            <p className="text-xs font-semibold tracking-[0.25em] text-amber-200/80">
              CLIENT REVIEWS
            </p>
            <p className="mt-3 text-sm italic text-slate-100">
              “The treatments were excellent. My shoulders were almost frozen,
              and now I&apos;ve regained full range of movement.”
            </p>
            <p className="mt-3 text-xs font-semibold text-slate-100/80">
              4.5 ★ Google Reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

