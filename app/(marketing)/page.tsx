import CTA from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Features2 } from "@/components/features2";
import Features3 from "@/components/features3";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logos-cloud";
import Pricing from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <LogoCloud /> */}
      <Features />
      <Features2 />
      <Features3 />
      {/* <Pricing /> */}
      <Testimonials />
      <FAQ />
      <section className="py-20 bg-blue-50 mt-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Careers at UNIA</h2>
          <p className="mb-6 text-neutral-700">
            Want to help shape the future of student entrepreneurship? We’re hiring!
          </p>
          <a
            href="/careers"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            View Open Positions
          </a>
        </div>
      </section>
      <CTA />
    </div>
  );
}
