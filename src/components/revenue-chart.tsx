"use client"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function RevenueChart() {
  const chartData: ChartData<"line"> = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai"],
    datasets: [
      {
        label: "Facturé",
        data: [32000, 41000, 38000, 48000, 52000],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.3,
      },
      {
        label: "Payé",
        data: [30000, 39000, 35000, 42000, 45000],
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Revenus Mensuels 2025",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 60000,
        ticks: {
          stepSize: 10000,
        },
      },
    },
  }

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  )
}
