'use client';

import { motion } from 'framer-motion';

type Props = {
  name: string;
  text: string;
  rating: number;
};

export function TestimonialCard({ name, text, rating }: Props) {
  return (
    <motion.article
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-2 flex items-center gap-1 text-amber-400">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="flex-1 text-sm text-slate-600">“{text}”</p>
      <p className="mt-4 text-xs font-semibold text-secondary">{name}</p>
    </motion.article>
  );
}

