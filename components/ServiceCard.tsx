'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  image?: string;
  description: string;
  duration: string;
  price: string;
};

export function ServiceCard({ title, image, description, duration, price }: Props) {
  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-amber-100 bg-[#fdf7f1] p-0 shadow-[0_18px_40px_rgba(148,124,96,0.18)] transition-transform hover:-translate-y-1"
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15, 23, 42, 0.10)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    >
      <div className="h-32 w-full overflow-hidden bg-gradient-to-tr from-amber-200/80 via-rose-100 to-amber-50">
        {image ? (
          <div className="relative h-full w-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-base font-semibold tracking-wide text-slate-800">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{description}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-700">
          <span>{duration}</span>
          <span className="font-semibold text-amber-700">{price}</span>
        </div>
      </div>
    </motion.article>
  );
}

