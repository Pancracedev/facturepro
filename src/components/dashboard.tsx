"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Sidebar from "../components/sidebar"
import Header from "../components/header"
import MetricCards from "../components/metric-cards"
import RevenueChart from "../components/revenue-chart"
import RecentActivity from "../components/recent-activity"
import Footer from "../components/footer"

export default function Dashboard() {
  // const { data: session, status } = useSession()
  const [error, setError] = useState<string | null>(null)

  // // Utiliser un nom d'utilisateur par défaut si la session n'est pas disponible
  // const userName = session?.user?.name || "Utilisateur"

  // Gérer les erreurs potentielles lors du chargement des données
  useEffect(() => {
    const handleErrors = () => {
      try {
        // Vérifier si les composants nécessaires sont disponibles
        if (!MetricCards || !RevenueChart || !RecentActivity) {
          throw new Error("Certains composants ne sont pas disponibles")
        }
      } catch (err) {
        console.error("Erreur lors du chargement du tableau de bord:", err)
        setError("Une erreur est survenue lors du chargement du tableau de bord")
      }
    }

    handleErrors()
  }, [])

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
            <h1 className="text-2xl font-semibold text-gray-900">Bonjour, </h1>
            <p className="text-gray-500">Voici un aperçu de votre activité récente</p>
          </div>

          {error ? (
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
                  <p className="text-sm text-yellow-700">{error}</p>
                  <p className="mt-2 text-sm text-yellow-700">
                    Les données affichées peuvent être incomplètes. Veuillez rafraîchir la page ou contacter le support.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* Conteneurs des types de factures agrandis */}
          <div className="mb-8">
            <MetricCards />
          </div>

          {/* Revenus et Activité Récente sur la même ligne */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Revenus</h2>
              <RevenueChart />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Activité Récente</h2>
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
