export default function Page() {
  const faqs = [
    {
      q: 'How does the AI predict stockouts?',
      a: 'We analyze your Shopify sales velocity, historical seasonality patterns, and your supplier lead times to forecast inventory needs 2-4 weeks ahead with high accuracy.'
    },
    {
      q: 'What store size is this built for?',
      a: 'Ideal for Shopify stores with 100+ SKUs and $50k+ monthly revenue. Our algorithms are tuned for stores with enough sales history to detect meaningful trends.'
    },
    {
      q: 'How do I get alerted about shortages?',
      a: 'You receive daily dashboard updates and email alerts whenever a SKU is predicted to stock out within your configured lead time window.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Inventory Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Predict stockouts before<br className="hidden sm:block" /> they happen with AI
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Analyzes your Shopify sales velocity, seasonality, and supplier lead times to predict inventory shortages <strong className="text-[#c9d1d9]">2–4 weeks in advance</strong>. Stop losing revenue to empty shelves.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Predicting Stockouts — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '2–4 weeks', label: 'advance warning before stockouts' },
            { stat: '100+ SKUs', label: 'analyzed daily across your catalog' },
            { stat: 'Daily alerts', label: 'via dashboard and email notifications' }
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-2xl font-bold text-[#58a6ff] mb-1">{stat}</div>
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-8">Everything you need to prevent stockouts</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Shopify sales velocity analysis',
              'Seasonality & trend detection',
              'Supplier lead time modeling',
              'Daily stockout predictions',
              'Email + dashboard alerts',
              'Unlimited SKUs'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify Inventory Shortage Predictor. Built for serious Shopify operators.
      </footer>
    </main>
  )
}
