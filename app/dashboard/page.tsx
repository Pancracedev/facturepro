"use client"

import Dashboard from "../../src/components/dashboard"


function DashboardFallback() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Chargement du tableau de bord...</h2>
                <p className="text-gray-600">Veuillez patienter pendant que nous chargeons vos données.</p>
            </div>
        </div>
    )
}

function DashboardErrorFallback() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Tableau de bord</h2>
                <p className="mb-6 text-gray-600">
                    Certaines données ne sont pas disponibles pour le moment. Veuillez réessayer ultérieurement.
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={() => window.location.reload()}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Rafraîchir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (

        <Dashboard />

    )
}
