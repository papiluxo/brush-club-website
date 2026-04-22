import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PRODUCT_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wholesale — Brush Club for Eco-Hospitality",
  description:
    "Bamboo dental kits for boutique eco-lodges, glamping sites, yoga retreats, and eco-Airbnb hosts. $10/kit wholesale, 20-kit minimum, free US shipping.",
};

const TARGETS = [
  { name: "Eco-lodges", desc: "Jungle, rainforest, beachfront. Anywhere a plastic toothbrush in the bathroom undermines the story you're already telling." },
  { name: "Glamping sites", desc: "A turnover amenity that fits the brand without blowing the margin on hotel-grade toiletries." },
  { name: "Yoga & wellness retreats", desc: "A welcome-kit or farewell-gift detail guests actually mention in reviews." },
  { name: "Eco-Airbnb hosts", desc: "One kit per stay, $10 per guest, no thought required." },
];

const KIT_CONTENTS = [
  "2 bamboo toothbrushes with soft, carbon-infused bristles",
  "2 corn-fiber floss rolls",
  "PFAS-free, biodegradable materials",
  "Minimal, recyclable packaging",
  "Ships in 48 hours from Miami, FL",
];

const SAMPLE_MAILTO =
  "mailto:santi@brushclub.us?subject=Brush Club wholesale sample request&body=Hi Santi%2C%0A%0AProperty%3A %0ANumber of rooms%2Funits%3A %0AShipping address for sample%3A %0AApprox. kit quantity I'd order%3A %0A%0AThanks%21";

export default function WholesalePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            For boutique eco-hospitality
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Bamboo dental kits for properties that already made every other choice right.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Bamboo toothbrushes and corn-fiber floss, PFAS-free and minimally packaged.
            Wholesale at <span className="font-semibold text-slate-900">$10/kit</span>,
            20-kit minimum, free US shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <a href={SAMPLE_MAILTO}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[220px]">
                Request a free sample
              </Button>
            </a>
            <a href="#pricing">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[220px]">
                See pricing
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Who we work with</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Small properties where a single in-room detail changes the guest review.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TARGETS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 p-6 bg-white hover:border-emerald-300 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.name}</h3>
                <p className="text-slate-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the kit */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-white shadow-sm">
              <Image
                src={PRODUCT_DATA.images[0]}
                alt="Brush Club Eco Dental Kit"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What's in every kit</h2>
              <ul className="space-y-3">
                {KIT_CONTENTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Wholesale pricing</h2>
            <p className="text-lg text-slate-600">One simple rate. Free US shipping on every order.</p>
          </div>
          <div className="rounded-2xl p-10 bg-white border-2 border-emerald-500 shadow-md text-center">
            <p className="text-5xl font-bold text-emerald-600">$10</p>
            <p className="text-lg text-slate-700 mt-2">per kit</p>
            <p className="text-sm text-slate-500 mt-1">20-kit minimum order</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free US shipping
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                48-hour dispatch
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Invoice payment (Net 15 on request)
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Larger orders or international shipping? Email for a quote.
          </p>
        </div>
      </section>

      {/* Sample CTA */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Start with a free sample
          </h2>
          <p className="text-lg text-slate-600">
            Send us your property address and we'll ship one kit in the mail tomorrow.
            Touch it, try it, decide from there.
          </p>
          <div className="pt-4">
            <a href={SAMPLE_MAILTO}>
              <Button variant="primary" size="lg" className="min-w-[260px]">
                Email us for a sample
              </Button>
            </a>
          </div>
          <p className="text-sm text-slate-500">
            Or reach out directly:{" "}
            <a className="text-emerald-700 hover:text-emerald-900 underline" href="mailto:santi@brushclub.us">
              santi@brushclub.us
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
