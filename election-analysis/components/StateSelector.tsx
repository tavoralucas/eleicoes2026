"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import type { State } from "@/types"

export default function StateSelector({ states }: { states: State[] }) {
  const router = useRouter()
  const [selectedRegion, setSelectedRegion] = useState<string>("all")

  const regions = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"]

  const filteredStates = selectedRegion === "all" ? states : states.filter((state) => state.region === selectedRegion)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          onClick={() => setSelectedRegion("all")}
          className={`px-4 py-2 rounded-full ${
            selectedRegion === "all" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Todos
        </button>

        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full ${
              selectedRegion === region ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredStates.map((state) => (
          <Link
            href={`/estado/${state.acronym.toLowerCase()}`}
            key={state.acronym}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3 relative overflow-hidden">
              {state.acronym === "PE" ? (
                <Image
                  src="/bandeiras/Pernambuco.png"
                  alt={`Bandeira de ${state.name}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-xl font-bold">{state.acronym}</span>
              )}
            </div>
            <span className="text-center font-medium">{state.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
