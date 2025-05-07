import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Footer from "../components/footer"

export default function DashboardFallback() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="mb-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <div className="whitespace-nowrap py-4 px-1 border-b-2 border-blue-500 font-medium text-sm text-blue-600">
                Tableau de bord
              </div>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Bonjour, Utilisateur</h1>
            <p className="text-gray-500">Voici un aperçu de votre activité récente</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">Chargement des données en cours</p>
                <p className="mt-2 text-sm text-yellow-700">
                  Veuillez patienter pendant que nous chargeons vos données. Certaines fonctionnalités peuvent être
                  limitées.
                </p>
              </div>
            </div>
          </div>

          {/* Placeholders pour les métriques */}
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white overflow-hidden shadow-sm rounded-lg p-6">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholders pour les graphiques */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Revenus</h2>
              <div className="animate-pulse flex flex-col space-y-4">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-40 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Activité Récente</h2>
              <div className="animate-pulse flex flex-col space-y-4">
                <div className="h-10 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
