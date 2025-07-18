import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CountdownSection } from "@/components/CountdownTimer";
import { COMPANY_INFO, PRODUCT_DATA } from "@/lib/constants";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Sustainable dental care for a{" "}
                  <span className="text-emerald-600">healthier planet</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {COMPANY_INFO.mission} with our 6-month eco-friendly dental kit featuring bamboo toothbrushes and corn fiber floss.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 inline-flex w-fit">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-emerald-700 font-bold">FREE US SHIPPING</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Link href="/shop" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-white shadow-xl">
                <Image
                  src="/product_media/dk.gif"
                  alt="Brush Club Eco Dental Kit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Choose Brush Club?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe that taking care of your teeth shouldn't come at the expense of our planet. 
              That's why we created a simple, effective solution that reduces plastic waste while 
              maintaining the highest standards of oral hygiene.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Eco-Friendly Materials</h3>
              <p className="text-slate-600">
                Bamboo toothbrushes and corn fiber floss that biodegrade naturally, 
                reducing plastic waste by 90%.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Premium Quality</h3>
              <p className="text-slate-600">
                Soft, carbon-infused bristles that are PFAS-free and gentle on your gums 
                while effectively cleaning your teeth.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">6-Month Supply</h3>
              <p className="text-slate-600">
                Each kit contains 2 bamboo toothbrushes and 2 corn fiber floss rolls, 
                designed to last exactly 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountdownSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Ready to make the switch?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of environmentally conscious individuals who have already 
            made the switch to sustainable dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full">
                Get Your Kit Today
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
