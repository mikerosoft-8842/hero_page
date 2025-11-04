export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24 bg-cream">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-gray-600 mb-6 tracking-widest font-sans">PORTFOLIO / 2025</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-4 text-charcoal">
            Mike<br />
            <span className="text-gray-600">Butler</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-8 leading-relaxed font-serif">
            Platform Product manager from the <span className="font-semibold">ad tech</span> and <span className="font-semibold">payments</span> space, creating features customers love.
          </p>
          <div className="flex items-center gap-6 mt-8 text-sm font-sans">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-600">Available for new opportunities</span>
            </div>
            <span className="text-gray-500">Greater London</span>
          </div>
        </div>

        <div className="lg:pl-12">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-600 mb-3 tracking-widest font-sans">CURRENTLY</p>
              <h3 className="text-2xl font-serif font-medium mb-2 text-charcoal">Senior Product Manager</h3>
              <p className="text-gray-600 font-serif">@ Microsoft AI</p>
              <p className="text-sm text-gray-500 mt-1 font-sans">2023 — Present</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-3 tracking-widest font-sans">FOCUS</p>
              <div className="flex flex-wrap gap-2">
                {['Product Management', 'Generative AI', 'Advertising Technology', 'Billing & Payments', 'Ad Auctions & Marketplaces', 'Platform Integrations', 'Audiences & Data Clean Rooms'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-sans text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
