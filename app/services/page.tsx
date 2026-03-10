import { AnimatedSection } from '@/components/AnimatedSection';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/lib/constants';

export const metadata = {
  title: 'Services',
  description:
    'Explore Thai massage, hot oil massage, manual lymph drainage, deep tissue, and more at Malahide Thai Therapy.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-sky-50/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-semibold text-secondary md:text-4xl">
            Massage services
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            A curated menu of Thai and therapeutic treatments designed to ease
            tension, support circulation, and restore balance.
          </p>
        </div>
      </section>

      <AnimatedSection className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Treatment durations and prices are indicative. Please contact us for
            the latest offers and package options.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}

