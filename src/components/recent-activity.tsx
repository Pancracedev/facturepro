import { FileText } from "lucide-react"

export default function RecentActivity() {
  const activities = [
    {
      id: "FAC-2025-001",
      company: "Entreprise ABC",
      date: "2025-04-25",
      status: "Payée",
      statusColor: "green",
    },
    {
      id: "FAC-2025-002",
      company: "Société XYZ",
      date: "2025-04-28",
      status: "En attente",
      statusColor: "yellow",
    },
    {
      id: "FAC-2025-003",
      company: "Boutique 123",
      date: "2025-04-30",
      status: "En retard",
      statusColor: "red",
    },
    {
      id: "FAC-2025-004",
      company: "Restaurant Le Gourmet",
      date: "2025-05-01",
      status: "Payée",
      statusColor: "green",
    },
  ]

  return (
    <div className="flow-root">
      <ul className="-my-5 divide-y divide-gray-200">
        {activities.map((activity) => (
          <li key={activity.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <FileText className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{activity.id}</p>
                <p className="text-sm text-gray-500 truncate">
                  {activity.company} - {activity.date}
                </p>
              </div>
              <div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    activity.statusColor === "green"
                      ? "bg-green-100 text-green-800"
                      : activity.statusColor === "yellow"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a
          href="#"
          className="w-full flex justify-center items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Voir tout
        </a>
      </div>
    </div>
  )
}
