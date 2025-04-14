"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"
import type { Candidate } from "@/types"

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/candidato/${candidate.id}`)
  }

  const handleSocialClick = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.stopPropagation()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const getSocialIcon = (type: string) => {
    switch (type) {
      case "x":
        return "/social_network/x.avif"
      case "instagram":
        return "/social_network/instagram.webp"
      default:
        return ""
    }
  }

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="h-48 relative bg-gray-200">
        <Image src={candidate.partyImage || "/placeholder.svg"} alt={`Logo do ${candidate.party}`} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold">{candidate.name}</h3>

        <div className="flex items-center gap-2 text-gray-600 mt-1 mb-3">
          <span className="font-medium">{candidate.party}</span>
          {candidate.coalition && (
            <>
              <span>•</span>
              <span className="text-sm">Coligação: {candidate.coalition}</span>
            </>
          )}
        </div>

        {candidate.currentPosition && (
          <p className="text-sm text-gray-500 mb-4">Cargo atual: {candidate.currentPosition}</p>
        )}

        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-600 text-sm font-medium">Ver perfil completo</span>

          <div className="flex gap-2">
            {candidate.socialLinks?.map((social, index) => (
              <button
                key={index}
                onClick={(e) => handleSocialClick(e, social.url)}
                className="w-8 h-8 relative rounded-full overflow-hidden hover:opacity-80"
              >
                <Image
                  src={getSocialIcon(social.type)}
                  alt={social.type}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
