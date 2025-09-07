import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Code Modernization Sprint | Soul7OS',
  description: 'Turn tech debt into clean PRs in 72 hours. Standardize errors, add structured logs, and raise test coverage delivered as 5-12 PRs with an Owner Manual.',
  keywords: ['AI', 'code modernization', 'tech debt', 'automated PRs', 'Soul7OS'],
  openGraph: {
    title: 'AI Code Modernization Sprint | Soul7OS',
    description: 'Turn tech debt into clean PRs in 72 hours. Standardize errors, add structured logs, and raise test coverage delivered as 5-12 PRs with an Owner Manual.',
    type: 'website',
    url: 'https://soul7os.com/repo-rescue',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Code Modernization Sprint | Soul7OS',
    description: 'Turn tech debt into clean PRs in 72 hours. Standardize errors, add structured logs, and raise test coverage delivered as 5-12 PRs with an Owner Manual.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Code Modernization Sprint',
  description: 'Clean PRs in 72 hours - standardized error codes, structured logging, and +15% targeted test coverage, powered by Soul7OS.',
  provider: {
    '@type': 'Organization',
    name: 'Soul7OS',
    url: 'https://soul7os.com',
  },
  url: 'https://soul7os.com/repo-rescue',
  serviceType: 'Code Modernization',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Code Modernization Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Standardized Error Codes',
          description: 'Implement consistent error handling patterns across your codebase'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Structured Logging',
          description: 'Add comprehensive logging with structured data for better observability'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Test Coverage Enhancement',
          description: 'Increase targeted test coverage by 15% or more'
        }
      }
    ]
  }
}

export default function RepoRescuePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Modernization</span> Sprint
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Clean PRs in 72 hours - standardized error codes, structured logging, and +15% targeted test coverage, powered by Soul7OS.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-2">Standardized Errors</h3>
              <p className="text-gray-300">Consistent error handling patterns across your entire codebase</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Structured Logging</h3>
              <p className="text-gray-300">Comprehensive logging with structured data for better observability</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">+15% Test Coverage</h3>
              <p className="text-gray-300">Targeted test coverage improvements where it matters most</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">What You Get</h2>
            <ul className="text-left text-gray-300 space-y-3 max-w-2xl mx-auto">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                5-12 clean, reviewable PRs delivered in 72 hours
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Comprehensive Owner Manual with migration guides
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Zero breaking changes to existing functionality
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                AI-powered analysis and implementation
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Ready-to-merge code with full test coverage
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Your Sprint
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 border border-white/20 backdrop-blur-lg">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}