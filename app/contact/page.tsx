import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  BUSINESS_PHONE
} from '@/lib/constants';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Malahide Thai Therapy to book a Thai massage appointment in Malahide or ask any questions.'
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white via-sky-50/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-semibold text-secondary md:text-4xl">
            Get in touch
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Book your Thai massage, ask a question, or request a recommendation
            for the right treatment for you.
          </p>
        </div>
      </section>

      <AnimatedSection className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 md:px-6 md:pb-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr,1.2fr] md:items-start">
            <div className="space-y-4 text-sm text-slate-600 md:text-base">
              <h2 className="text-xl font-semibold text-secondary md:text-2xl">
                Clinic details
              </h2>
              <div>
                <p className="font-semibold text-secondary">Address</p>
                <p>{BUSINESS_ADDRESS}</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Phone</p>
                <p>
                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                    className="text-primary hover:underline"
                  >
                    {BUSINESS_PHONE}
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Email</p>
                <p>
                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Opening hours</p>
                <ul className="mt-1 space-y-0.5">
                  {BUSINESS_HOURS.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 md:px-6 md:pb-16">
          <h2 className="text-xl font-semibold text-secondary md:text-2xl">
            Find us on the map
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
            We&apos;re conveniently located on James&apos;s Terrace in Malahide,
            with public parking options nearby.
          </p>
          <div className="mt-5 h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:h-80">
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
      </AnimatedSection>
    </>
  );
}

