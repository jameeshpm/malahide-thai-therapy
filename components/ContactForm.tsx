'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm md:p-6"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-600">
          Name
        </label>
        <input
          required
          type="text"
          className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-secondary outline-none ring-primary/30 focus:bg-white focus:ring"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-600">
          Email
        </label>
        <input
          required
          type="email"
          className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-secondary outline-none ring-primary/30 focus:bg-white focus:ring"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-600">
          Phone
        </label>
        <input
          type="tel"
          className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-secondary outline-none ring-primary/30 focus:bg-white focus:ring"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-600">
          Preferred Date & Time
        </label>
        <input
          type="text"
          placeholder="e.g. Saturday afternoon, after 2pm"
          className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-secondary outline-none ring-primary/30 focus:bg-white focus:ring"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-slate-600">
          Message
        </label>
        <textarea
          required
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-secondary outline-none ring-primary/30 focus:bg-white focus:ring"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/90"
      >
        Send enquiry
      </button>

      {submitted && (
        <p className="text-xs text-emerald-600">
          Thank you — your message has been recorded. This demo form does not
          send emails, but you can connect it to your preferred provider.
        </p>
      )}
    </motion.form>
  );
}

