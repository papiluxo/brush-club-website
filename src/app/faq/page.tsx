import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'

const faqs = [
  {
    id: 1,
    question: "How often should I replace my bamboo toothbrush?",
    answer: "We recommend replacing your bamboo toothbrush every 3 months, just like conventional toothbrushes. Each Brush Club kit contains 2 bamboo toothbrushes, providing you with a 6-month supply."
  },
  {
    id: 2,
    question: "Are bamboo toothbrushes as effective as plastic ones?",
    answer: "Absolutely! Our bamboo toothbrushes feature soft, carbon-infused bristles that are just as effective at cleaning your teeth and removing plaque as conventional plastic toothbrushes. Many users find them even more comfortable to use."
  },
  {
    id: 3,
    question: "What makes your dental floss sustainable?",
    answer: "Our dental floss is made from corn fiber, which is completely biodegradable and plastic-free. Unlike conventional nylon floss that can take decades to decompose, our corn fiber floss breaks down naturally in composting conditions."
  },
  {
    id: 4,
    question: "How do I dispose of my bamboo toothbrush?",
    answer: "The bamboo handle can be composted or thrown in your regular trash where it will biodegrade much faster than plastic. The bristles should be removed with pliers and disposed of in regular trash, as they contain small amounts of nylon for durability."
  },
  {
    id: 5,
    question: "Is the packaging recyclable?",
    answer: "Yes! All our packaging is made from recyclable cardboard and uses minimal plastic. We've designed our packaging to be as environmentally friendly as our products, reducing waste at every step."
  },
  {
    id: 6,
    question: "Are your products PFAS-free?",
    answer: "Yes, all Brush Club products are completely PFAS-free. We don't use any 'forever chemicals' or harmful substances in our toothbrushes or floss. Your health and the environment are our top priorities."
  },
  {
    id: 7,
    question: "How much plastic waste does each kit actually save?",
    answer: "Each Brush Club kit prevents approximately 2 plastic toothbrushes and 2 plastic floss containers from entering the waste stream, reducing plastic waste by about 90% compared to conventional dental care products."
  },
  {
    id: 8,
    question: "Can I cancel or modify my order?",
    answer: "You can cancel or modify your order within 24 hours of purchase by contacting us at contact@brushclub.us. After that, orders are processed and shipped quickly to get your sustainable dental care to you as soon as possible."
  },
  {
    id: 9,
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within the United States only. We're working on expanding internationally to bring sustainable dental care to more people around the world. Stay tuned for updates!"
  },
  {
    id: 10,
    question: "What if I'm not satisfied with my purchase?",
    answer: "We stand behind our products! If you're not completely satisfied with your Brush Club kit, contact us within 30 days and we'll work to make it right. Your satisfaction and oral health are important to us."
  },
  {
    id: 11,
    question: "How often do you restock?",
    answer: "We restock our inventory every Sunday at 9:00 AM EST. You can see the countdown to our next restock on our homepage. This schedule helps us maintain freshness and manage our sustainable supply chain effectively."
  },
  {
    id: 12,
    question: "Are the bristles really soft enough for sensitive gums?",
    answer: "Yes! Our carbon-infused bristles are specifically designed to be gentle on sensitive gums while still providing effective cleaning. Many customers with sensitive teeth and gums prefer our bamboo toothbrushes over conventional ones."
  }
]

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Everything you need to know about Brush Club and our sustainable dental care products.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly customer support team is here to help.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 max-w-md mx-auto">
            <div className="space-y-4">
              <p className="text-slate-600">
                <strong>Email us:</strong>{' '}
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="text-sm text-slate-500">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Ready to Make the Switch?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of environmentally conscious individuals who have already made the switch to sustainable dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button variant="primary" size="lg">
                Get Your Kit Today
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="primary" size="lg">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 