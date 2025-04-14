import { getCandidateById } from "@/data/mock-data"
import Link from "next/link"
import Image from "next/image"
import CandidateTimeline from "@/components/CandidateTimeline"
import SpendingChart from "@/components/SpendingChart"
import PoliticalConnections from "@/components/PoliticalConnections"
import CampaignPromises from "@/components/CampaignPromises"
import NewsAggregator from "@/components/NewsAggregator"

export default function CandidatePage({ params }: { params: { id: string } }) {
  const { id } = params
  const candidate = getCandidateById(id)

  if (!candidate) {
    return <div className="container mx-auto px-4 py-8">Candidato não encontrado</div>
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href={`/estado/${candidate.stateAcronym}`} className="text-blue-600 hover:underline mb-4 inline-block">
          ← Voltar para candidatos de {candidate.state}
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 relative">
          {candidate.coverImage && (
            <Image
              src={candidate.coverImage || "/placeholder.svg"}
              alt={`Capa de ${candidate.name}`}
              fill
              className="object-cover opacity-30"
            />
          )}
        </div>

        <div className="px-6 py-8 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden -mt-20 bg-gray-200 relative">
              <Image src={candidate.profileImage || "/placeholder.svg"} alt={candidate.name} fill className="object-cover" />
            </div>

            <div>
              <h1 className="text-3xl font-bold">{candidate.name}</h1>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <span className="font-medium">{candidate.party}</span>
                <span>•</span>
                <span>{candidate.state}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Histórico Político</h2>
            <CandidateTimeline events={candidate.timeline || []} />
          </section>

          <section className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Gastos Públicos</h2>
            <SpendingChart data={candidate.spending || []} />
          </section>

          <section className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Promessas de Campanha</h2>
            <CampaignPromises promises={candidate.promises || []} />
          </section>
        </div>

        <div>
          <section className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Conexões Políticas</h2>
            <PoliticalConnections connections={candidate.connections || []} />
          </section>

          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Notícias Recentes</h2>
            <NewsAggregator candidateId={candidate.id} />
          </section>
        </div>
      </div>
    </main>
  )
}
