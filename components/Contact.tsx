interface SocialLink {
  platform: string
  handle: string
  url: string
}

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    handle: '@mikerosoft-8842',
    url: 'https://github.com/mikerosoft-8842',
  },
  {
    platform: 'LinkedIn',
    handle: 'mike-butler',
    url: 'https://linkedin.com/in/mike-butler-683b3223',
  },
]

export default function Contact() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 text-charcoal">Let's Connect</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-serif">
              Always interested in new opportunities, collaborations, and conversations about
              technology and design.
            </p>
            <a
              href="mailto:michaelxxbutler@gmail.com"
              className="inline-flex items-center gap-2 text-lg hover:text-gray-600 transition-colors group font-serif text-charcoal"
            >
              michaelxxbutler@gmail.com
              <svg
                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-6 tracking-widest font-sans">ELSEWHERE</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-gray-300 rounded-none p-6 hover:border-gray-400 transition-all duration-300 hover:shadow-lg bg-white"
                >
                  <h3 className="text-lg font-serif font-medium mb-1 group-hover:text-charcoal transition-colors text-gray-800">
                    {link.platform}
                  </h3>
                  <p className="text-sm text-gray-600 font-sans">{link.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 font-sans">
          <p>© 2025 Mike Butler. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  )
}
