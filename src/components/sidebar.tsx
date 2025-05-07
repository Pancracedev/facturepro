"use client"

import { BarChart2, FileText, Settings, Users, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  // Déterminer l'onglet actif en fonction du chemin
  const getActiveTab = () => {
    if (pathname === "/") return "Tableau de bord"
    if (pathname.startsWith("/factures")) return "Factures"
    if (pathname.startsWith("/clients")) return "Clients"
    if (pathname.startsWith("/parametres")) return "Paramètres"
    return "Tableau de bord"
  }

  const activeTab = getActiveTab()

  // Vérifier si le menu des rapports est ouvert
  const isReportsOpen = pathname.startsWith("/rapports")

  const menuItems = [
    { name: "Tableau de bord", icon: <BarChart2 className="h-5 w-5" />, path: "/" },
    { name: "Factures", icon: <FileText className="h-5 w-5" />, path: "/factures" },
    { name: "Clients", icon: <Users className="h-5 w-5" />, path: "/clients" },
    { name: "Paramètres", icon: <Settings className="h-5 w-5" />, path: "/parametres" },
  ]

  const reportItems = [
    { name: "Mensuel", path: "/rapports/mensuel" },
    { name: "Trimestriel", path: "/rapports/trimestriel" },
    { name: "Annuel", path: "/rapports/annuel" },
  ]

  return (
    <div className="w-64 bg-white shadow-sm">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`flex items-center p-3 rounded-lg w-full text-left ${
                  activeTab === item.name ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/rapports"
                className={`flex items-center p-3 rounded-lg w-full text-left ${
                  isReportsOpen ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="mr-3">
                  <BarChart2 className="h-5 w-5" />
                </span>
                <span>Rapports</span>
                <ChevronDown className={`ml-auto h-4 w-4 ${isReportsOpen ? "transform rotate-180" : ""}`} />
              </Link>
              {isReportsOpen && (
                <ul className="pl-10 mt-2 space-y-1">
                  {reportItems.map((report) => (
                    <li key={report.name}>
                      <Link
                        href={report.path}
                        className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                      >
                        {report.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
