"use client"

import { Bell, ChevronDown, LogOut, Search, FileText } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

export default function Header() {
  // const { data: session } = useSession()

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center text-blue-600 font-bold text-2xl">
                <FileText className="h-6 w-6 mr-2" />
                <span>FacturePro</span>
              </div>
            </div>
            <div className="ml-6 flex items-center">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Rechercher des factures
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Rechercher des factures..."
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative"
            >
              <span className="sr-only">Voir les notifications</span>
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                5
              </span>
            </button>
            <div className="ml-3 relative">
              <div className="group">
                <button
                  type="button"
                  className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  id="user-menu-button"
                >
                  <span className="sr-only">Ouvrir le menu utilisateur</span>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    {/* {session?.user?.name?.charAt(0) || "U"} */}
                  </div>
                  {/* <span className="ml-2 text-gray-700">{session?.user?.name || "Utilisateur"}</span> */}
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                </button>
                <div className="hidden group-hover:block absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <button
                    onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Se déconnecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
