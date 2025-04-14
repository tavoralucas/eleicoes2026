import CandidateCard from "@/components/CandidateCard"
import { getCandidatesByState } from "@/data/mock-data"
import Link from "next/link"

export default function StatePage({ params }: { params: { sigla: string } }) {
  const { sigla } = params
  const candidates = getCandidatesByState(sigla)
  const stateName = candidates[0]?.state || sigla.toUpperCase()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Voltar para seleção de estados
        </Link>
        <h1 className="text-3xl font-bold">Candidatos a Governador - {stateName}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </main>
  )
}
