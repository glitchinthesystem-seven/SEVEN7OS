export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">SEVEN7OS</h1>
        <p className="text-gray-300 mb-8">Real estate CRM built for high-speed deal makers</p>
        <a 
          href="/repo-rescue" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          View AI Code Modernization Sprint
        </a>
      </div>
    </div>
  )
}