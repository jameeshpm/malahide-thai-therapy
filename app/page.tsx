import { HeroSection } from '@/components/HeroSection';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CTASection } from '@/components/CTASection';
import { SERVICES, TESTIMONIALS, BUSINESS_ADDRESS } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-secondary md:text-3xl">
              Tailored Thai massage to support your whole wellbeing
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Whether you are looking to ease chronic tension, recover from
              training, or simply unwind, our therapists will adapt each
              treatment to your needs and comfort level.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Individualised treatments focused on your key problem areas</li>
              <li>• Clean, peaceful rooms with heated massage beds</li>
              <li>• Professional Thai therapists with extensive experience</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-[#fdf7f1] px-5 py-5 text-sm text-slate-800 shadow-[0_20px_45px_rgba(148,124,96,0.16)]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              Popular Treatments
            </p>
            <ul className="mt-2 space-y-2">
              <li>• Traditional Thai Massage</li>
              <li>• Manual Lymph Drainage (MLD)</li>
              <li>• Full Body Hot Oil Massage</li>
              <li>• Deep Tissue Massage</li>
            </ul>
            <p className="mt-4 text-xs text-slate-700">
              Tell us how you&apos;re feeling and we&apos;ll recommend the right
              combination of techniques and pressure.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#faf3ea]" delay={0.1}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-secondary md:text-3xl">
                Our treatments
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Choose from a range of Thai and therapeutic massages designed
                to ease pain, improve circulation, and promote deep relaxation.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#f5eee7]" delay={0.1}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-secondary md:text-3xl">
              Why choose Malahide Thai Therapy?
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              We combine traditional Thai techniques with a calming environment
              and genuine care for your long-term wellbeing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-secondary">
                Authentic Thai expertise
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Our qualified Thai therapists are skilled in traditional and
                modern therapeutic techniques, adapting each session to you.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-secondary">
                Calm, welcoming space
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Step away from the busy streets of Malahide into a peaceful
                environment designed for deep rest and relaxation.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-secondary">
                Results-focused treatments
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                From frozen shoulders to heavy legs, we focus on relieving your
                specific symptoms while supporting whole-body balance.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Client review band */}
      <AnimatedSection className="bg-[#f3e9dd]" delay={0.08}>
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-18">
          <p className="text-xs font-semibold tracking-[0.3em] text-slate-500">
            CLIENT REVIEWS
          </p>
          <p className="mt-6 text-lg font-light leading-relaxed text-slate-800 md:text-xl">
            “Get rid of my migraine I had had for 24 hours, I am so thankful.”
          </p>
          <p className="mt-4 text-xs text-slate-600">
            Many of our clients visit with long-standing tension, headaches, or
            discomfort. Through personalised Thai massage and gentle therapeutic
            work, we help ease symptoms and support longer-lasting relief.
          </p>
        </div>
      </AnimatedSection>

      {/* Self-care club style content block */}
      <AnimatedSection className="bg-[#f9f3ec]" delay={0.1}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-secondary md:text-3xl">
                The self-care club
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Little rituals matter. Regular massage can be part of a simple
                routine that helps you feel more grounded, mobile, and at ease.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.1fr,1.2fr] md:items-center">
            <div className="overflow-hidden rounded-3xl bg-[#f5ede4] shadow-[0_18px_40px_rgba(148,124,96,0.18)]">
              <div className="h-40 w-full bg-[url('/hero-massage.jpg')] bg-cover bg-center" />
              <div className="px-6 py-5 text-sm text-slate-700">
                <p>
                  Step into a calm, uncluttered space where you can fully
                  switch off. Soft lighting, warm linens, and gentle music all
                  support the work we do on the table.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 md:text-base">
              <p>
                Whether you visit weekly, monthly, or whenever your body feels
                tight and tired, we invite you to think of your sessions as a
                commitment to long-term wellbeing rather than a once-off treat.
              </p>
              <p>
                Combine your massage with simple habits — like gentle stretching
                and better sleep — and you&apos;ll notice deeper results over
                time.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50" delay={0.1}>
        <div
          id="contact"
          className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16"
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr,1.2fr] md:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-secondary md:text-3xl">
                Visit us in Malahide
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                We&apos;re located on James&apos;s Terrace, just a short walk
                from Malahide village and public transport.
              </p>
              <p className="mt-4 text-sm font-medium text-secondary">
                Address
              </p>
              <p className="text-sm text-slate-600">{BUSINESS_ADDRESS}</p>

              <p className="mt-4 text-sm font-medium text-secondary">Parking</p>
              <p className="text-sm text-slate-600">
                Convenient public parking is available nearby in Malahide
                village.
              </p>
            </div>

            <div className="h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:h-80">
              <iframe
                title="Malahide Thai Therapy location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2388.886192820369!2d-6.156!3d53.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670f078dfd6cbf%3A0x0000000000000000!2sMalahide%20Thai%20Therapy!5e0!3m2!1sen!2sie!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}

