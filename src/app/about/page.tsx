import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              About <span className="text-emerald-600">Brush Club</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're on a mission to make sustainable dental care accessible, affordable, and effective for everyone who cares about our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Imagine a world where lush forests thrive, clean oceans teem with life, and ecosystems flourish in perfect harmony. At Brush Club, we believe that caring for your teeth should contribute to this vision, not detract from it.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every year, billions of plastic toothbrushes pollute our green planet, choking our waterways and disrupting the delicate balance of nature. These petroleum-based products take centuries to decompose, leaving a trail of environmental destruction in their wake.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're on a mission to restore that balance. Our sustainable dental care products reduce plastic waste by 90%, protecting the forests, oceans, and wildlife that make our planet beautiful—all while delivering exceptional oral health care that you can feel good about.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-white shadow-xl">
                <video
                  src="/nature_reel.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-slate-600">
              Everything we do is guided by our commitment to sustainability, quality, and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 18c0-11 6-15 6-15s6 4 6 15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Sustainability First</h3>
              <p className="text-slate-600">
                Every product we create is designed with the environment in mind, using biodegradable materials and minimal packaging.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Premium Quality</h3>
              <p className="text-slate-600">
                We never compromise on quality. Our products meet the highest standards for oral health while being gentle on the planet.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Transparency</h3>
              <p className="text-slate-600">
                We believe in complete transparency about our materials, processes, and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p>
                Brush Club was born from a simple realization: the dental care industry had a massive plastic problem, and nobody seemed to be addressing it effectively.
              </p>
              <p>
                After researching sustainable alternatives and testing dozens of eco-friendly dental products, we discovered that most either compromised on quality or were prohibitively expensive. We knew there had to be a better way.
              </p>
              <p>
                Working with sustainable material experts and dental professionals, we developed our 6-month dental kit – a perfect balance of environmental responsibility, premium quality, and affordability.
              </p>
              <p>
                Today, thousands of environmentally conscious individuals have made the switch to Brush Club, collectively preventing millions of plastic toothbrushes from ending up in our oceans and landfills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Production Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Production Cycle
            </h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p>
                Our restock timer reflects our commitment to sustainable bamboo harvesting. We align production with natural regeneration cycles to maintain quality while supporting forest health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Environmental Impact
            </h2>
            <p className="text-lg text-slate-600">
              Every Brush Club kit sold makes a meaningful difference for our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-emerald-600">90%</div>
              <h3 className="text-xl font-semibold text-slate-900">Less Plastic Waste</h3>
              <p className="text-slate-600">
                Compared to conventional dental care products
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-emerald-600">100%</div>
              <h3 className="text-xl font-semibold text-slate-900">Biodegradable</h3>
              <p className="text-slate-600">
                All materials break down naturally in composting conditions
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-emerald-600">0</div>
              <h3 className="text-xl font-semibold text-slate-900">PFAS Chemicals</h3>
              <p className="text-slate-600">
                Completely free from harmful forever chemicals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Join the Movement
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to make a positive impact on the planet while maintaining excellent oral health? Join thousands of satisfied customers who have already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button variant="primary" size="lg">
                Get Your Kit Today
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 