"use client"

import { useState } from "react"

type Promise = {
  title: string
  description: string
  category: string
  status?: "fulfilled" | "in_progress" | "broken" | "not_started"
}

export default function CampaignPromises({ promises }: { promises: Promise[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(promises.map((p) => p.category)))]

  const filteredPromises =
    selectedCategory === "all" ? promises : promises.filter((p) => p.category === selectedCategory)

  return (
    <div>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
              selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category === "all" ? "Todas" : category}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredPromises.map((promise, index) => (
          <div key={index} className="border-l-4 pl-4 py-1" style={{ borderColor: getCategoryColor(promise.category) }}>
            <div className="flex justify-between items-start">
              <h4 className="font-medium">{promise.title}</h4>
              {promise.status && (
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(promise.status)}`}>
                  {getStatusLabel(promise.status)}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">{promise.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function getCategoryColor(category: string): string {
  // Simple hash function to generate consistent colors for categories
  let hash = 0
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash)
  }

  const colors = [
    "#3b82f6", // blue
    "#10b981", // green
    "#f59e0b", // amber
    "#ef4444", // red
    "#8b5cf6", // purple
    "#ec4899", // pink
    "#06b6d4", // cyan
    "#f97316", // orange
  ]

  return colors[Math.abs(hash) % colors.length]
}

function getStatusStyle(status: string): string {
  switch (status) {
    case "fulfilled":
      return "bg-green-100 text-green-800"
    case "in_progress":
      return "bg-blue-100 text-blue-800"
    case "broken":
      return "bg-red-100 text-red-800"
    case "not_started":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "fulfilled":
      return "Cumprida"
    case "in_progress":
      return "Em andamento"
    case "broken":
      return "Não cumprida"
    case "not_started":
      return "Não iniciada"
    default:
      return "Desconhecida"
  }
}
