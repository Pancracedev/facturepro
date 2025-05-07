export default function MetricCards() {
  const metrics = [
    { title: "Total Factures", value: "152", color: "blue", width: "100%" },
    { title: "Factures Payées", value: "98", color: "green", width: "75%" },
    { title: "Factures En Attente", value: "42", color: "yellow", width: "30%" },
    { title: "Factures En Retard", value: "12", color: "red", width: "10%" },
  ]

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.title} className="bg-white overflow-hidden shadow-sm rounded-lg">
          <div className="px-6 py-6 sm:p-8">
            <div className="text-sm font-medium text-gray-500 truncate">{metric.title}</div>
            <div className="mt-2 text-4xl font-semibold text-gray-900">{metric.value}</div>
            <div className="mt-5">
              <div className="relative h-3 rounded-full overflow-hidden bg-gray-200">
                <div
                  className={`absolute top-0 left-0 h-full ${
                    metric.color === "blue"
                      ? "bg-blue-500"
                      : metric.color === "green"
                        ? "bg-green-500"
                        : metric.color === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                  }`}
                  style={{ width: metric.width }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
