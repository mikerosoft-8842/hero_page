interface WorkExperience {
  year: string
  title: string
  company: string
  description: string
  technologies: string[]
}

const experiences: WorkExperience[] = [
  {
    year: '2024',
    title: 'Senior Product Manager',
    company: 'Microsoft AI',
    description: 'Owning third-party (3P) measurement capabilities across the Microsoft advertising platform, including new integrations.',
    technologies: ['End-to-end Product Lifecycle', 'API Integrations', 'Measurement'],
  },
  {
    year: '2022',
    title: 'Product Manager',
    company: 'Xandr',
    description: 'Led the Clearing house capability, owning a suite of products responsible for the contract-to-cash mechanisms for an advertising marketplace transacting billions of impressions daily.',
    technologies: ['Billing Systems', 'Marketplace Architecture', 'Data Analytics'],
  },
  {
    year: '2015',
    title: 'Senior Account Director',
    company: 'AppNexus / Xandr',
    description: 'My prior commercial roles, I ending this part of my career in a GTM leadership role, supporting innovative agency customer across Northern Europe.',
    technologies: ['Client Strategy', 'Revenue Driver', 'Commercial Leadership'],
  },
]

export default function WorkExperience() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-charcoal">Selected Work</h2>
          <span className="text-gray-500 text-sm font-sans">2015 — 2025</span>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-gray-300 py-12 hover:bg-cream transition-all duration-300 px-6 -mx-6"
            >
              <div className="md:col-span-2">
                <span className="text-4xl font-serif font-light text-gray-600">{exp.year}</span>
              </div>

              <div className="md:col-span-6">
                <h3 className="text-3xl font-serif font-medium mb-2 group-hover:text-charcoal transition-colors text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-xl text-gray-600 mb-4 font-serif">{exp.company}</p>
                <p className="text-gray-600 leading-relaxed font-serif">{exp.description}</p>
              </div>

              <div className="md:col-span-4 flex items-start justify-end">
                <div className="flex flex-wrap gap-2 justify-end">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cream border border-gray-300 rounded-full text-sm text-gray-700 font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
