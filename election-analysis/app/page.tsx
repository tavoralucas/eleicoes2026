import StateSelector from "@/components/StateSelector"
import { states } from "@/data/mock-data"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Análise Eleitoral 2026</h1>
        <p className="text-xl text-gray-600 mb-8">
          Acompanhe e compare os candidatos a governador nas eleições de 2026
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Selecione um estado</h2>
        <StateSelector states={states} />
      </section>
    </main>
  )
}
