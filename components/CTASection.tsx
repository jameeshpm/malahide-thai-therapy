import Link from 'next/link';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to feel lighter, calmer, and restored?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-sky-100 md:text-base">
            Book your Thai massage today and let our experienced therapists
            create a treatment tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-slate-100"
          >
            Book an appointment
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ask a question
          </a>
        </div>
      </div>
    </section>
  );
}

