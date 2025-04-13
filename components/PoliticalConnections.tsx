"use client"

import { useState } from "react"

type Connection = {
  name: string
  position: string
  relationship: string
  influence: "high" | "medium" | "low"
}

export default function PoliticalConnections({ connections }: { connections: Connection[] }) {
  const [filter, setFilter] = useState<string>("all")

  const filteredConnections = filter === "all" ? connections : connections.filter((c) => c.influence === filter)

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 text-sm rounded-full ${
            filter === "all" ? "bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter("high")}
          className={`px-3 py-1 text-sm rounded-full ${
            filter === "high" ? "bg-red-600 text-white" : "bg-red-100 hover:bg-red-200 text-red-800"
          }`}
        >
          Alta Influência
        </button>
        <button
          onClick={() => setFilter("medium")}
          className={`px-3 py-1 text-sm rounded-full ${
            filter === "medium" ? "bg-yellow-600 text-white" : "bg-yellow-100 hover:bg-yellow-200 text-yellow-800"
          }`}
        >
          Média Influência
        </button>
        <button
          onClick={() => setFilter("low")}
          className={`px-3 py-1 text-sm rounded-full ${
            filter === "low" ? "bg-green-600 text-white" : "bg-green-100 hover:bg-green-200 text-green-800"
          }`}
        >
          Baixa Influência
        </button>
      </div>

      <div className="space-y-3">
        {filteredConnections.length === 0 ? (
          <p className="text-gray-500 italic">Nenhuma conexão encontrada com este filtro.</p>
        ) : (
          filteredConnections.map((connection, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{connection.name}</h4>
                  <p className="text-sm text-gray-600">{connection.position}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getInfluenceStyle(connection.influence)}`}>
                  {getInfluenceLabel(connection.influence)}
                </span>
              </div>
              <p className="text-sm mt-2">{connection.relationship}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

function getInfluenceStyle(influence: string): string {
  switch (influence) {
    case "high":
      return "bg-red-100 text-red-800"
    case "medium":
      return "bg-yellow-100 text-yellow-800"
    case "low":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function getInfluenceLabel(influence: string): string {
  switch (influence) {
    case "high":
      return "Alta Influência"
    case "medium":
      return "Média Influência"
    case "low":
      return "Baixa Influência"
    default:
      return "Desconhecida"
  }
}
