import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PRODUCT_DATA } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { CheckoutForm } from "@/components/CheckoutForm";

export default function ShopPage() {
  return (
    <div className="bg-white">
      {/* Product Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={PRODUCT_DATA.images[0]}
                  alt="Brush Club Eco Dental Kit - Main View"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {PRODUCT_DATA.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="aspect-square relative rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={image}
                      alt={`Brush Club Eco Dental Kit - View ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                  {PRODUCT_DATA.name}
                </h1>
                <p className="text-lg text-slate-600">
                  {PRODUCT_DATA.description}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-emerald-600">
                    {formatPrice(PRODUCT_DATA.price)}
                  </span>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">What's Included</h3>
                <ul className="space-y-2">
                  {PRODUCT_DATA.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Form */}
              <div id="order-section" className="pt-6 border-t border-slate-200">
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Commitment to Sustainability
            </h2>
            <p className="text-lg text-slate-600">
              Every aspect of our dental kit is designed with the environment in mind. 
              Here's how we're making a difference:
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_DATA.sustainability.map((item, index) => {
              const icons = [
                // Trash/waste reduction icon for "Reduces plastic waste by 90%"
                <path key="waste" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />,
                // Seedling/plant icon for "Biodegradable bamboo handles"  
                <path key="bamboo" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 18c0-11 6-15 6-15s6 4 6 15" />,
                // Grain/corn icon for "Corn-based floss fibers"
                <path key="corn" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />,
                // Recycle icon for "Recyclable packaging"
                <path key="recycle" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
                // Truck icon for "Carbon-neutral shipping"
                <path key="shipping" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              ];
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {icons[index % icons.length]}
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Designed for Your Health
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">PFAS-Free Bristles</h3>
                    <p className="text-slate-600">
                      Our bamboo toothbrushes feature soft, carbon-infused bristles that are completely free from harmful PFAS chemicals, ensuring safe and effective cleaning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 18c0-11 6-15 6-15s6 4 6 15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Biodegradable Materials</h3>
                    <p className="text-slate-600">
                      Both the bamboo handles and corn fiber floss are fully biodegradable, naturally breaking down without harming the environment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Perfect Timing</h3>
                    <p className="text-slate-600">
                      Each item is designed to last exactly 3 months, giving you a complete 6-month supply that aligns with dentist recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/product_media/dk.gif"
                  alt="Brush Club Eco Dental Kit in use"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Start Your Sustainable Dental Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Make the switch to eco-friendly dental care today. Your teeth and the planet will thank you.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Link href="#order-section" className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Order Now
                </Button>
              </Link>
            </div>
            <div className="flex-1 max-w-xs">
              <Link href="/about" className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Learn More About Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 