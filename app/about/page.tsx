import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  BUSINESS_HOURS
} from '@/lib/constants';

export const metadata = {
  title: 'About',
  description: `Learn about ${BUSINESS_NAME}, our story, and our experienced Thai massage therapists in Malahide.`
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-sky-50/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-semibold text-secondary md:text-4xl">
            About {BUSINESS_NAME}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            A calm, welcoming space in Malahide where traditional Thai massage
            meets modern therapeutic care.
          </p>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-start">
          <div className="space-y-4 text-sm text-slate-600 md:text-base">
            <h2 className="text-xl font-semibold text-secondary md:text-2xl">
              Our story
            </h2>
            <p>
              {BUSINESS_NAME} was created as a haven of tranquillity in the
              heart of Malahide. Our aim is simple: to provide high-quality Thai
              massage and therapeutic treatments that truly support your health
              and wellbeing.
            </p>
            <p>
              Our therapists bring years of hands-on experience, blending
              traditional Thai techniques with modern understanding of the body.
              Every treatment is adjusted to your level of comfort, pressure
              preference, and areas of concern.
            </p>
            <p>
              From busy professionals and parents to athletes and older adults,
              we welcome everyone seeking a safe, respectful environment to
              relax, rebalance, and recover.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm md:h-72">
              <Image
                src="/team-therapist.jpg"
                alt="Experienced Thai massage therapist"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Clinic details
              </h3>
              <p className="mt-2">
                <span className="font-semibold">Address:</span> {BUSINESS_ADDRESS}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Opening hours:</span>
              </p>
              <ul className="mt-1 space-y-0.5">
                {BUSINESS_HOURS.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-secondary md:text-2xl">
                Our mission
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                Our mission is to help you move more freely, sleep more deeply,
                and feel more at home in your body — through safe, effective,
                and respectful touch.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-secondary md:text-2xl">
                Our values
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 md:text-base">
                <li>
                  <span className="font-semibold">Care:</span> We treat every
                  client with kindness, compassion, and full attention.
                </li>
                <li>
                  <span className="font-semibold">Professionalism:</span> We
                  maintain high standards of hygiene, training, and client
                  communication.
                </li>
                <li>
                  <span className="font-semibold">Respect:</span> Your comfort,
                  boundaries, and preferences are always prioritised.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

