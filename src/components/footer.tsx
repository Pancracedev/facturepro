import { ChevronLeft } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center">
            <ChevronLeft className="h-5 w-5 text-gray-400" />
            <p className="ml-2 text-sm text-gray-500">Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Aide
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Support
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Conditions
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Designed by</span>
            <span className="font-medium">Readdy</span>
            <div className="flex space-x-1 ml-4">
              <div className="h-6 w-10 bg-blue-600 rounded"></div>
              <div className="h-6 w-10 bg-red-500 rounded"></div>
              <div className="h-6 w-10 bg-blue-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
