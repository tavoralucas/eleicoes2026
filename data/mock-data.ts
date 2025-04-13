import type { Candidate, News } from "@/types"

export const states = [
  { name: "Acre", acronym: "AC", region: "Norte" },
  { name: "Alagoas", acronym: "AL", region: "Nordeste" },
  { name: "Amapá", acronym: "AP", region: "Norte" },
  { name: "Amazonas", acronym: "AM", region: "Norte" },
  { name: "Bahia", acronym: "BA", region: "Nordeste" },
  { name: "Ceará", acronym: "CE", region: "Nordeste" },
  { name: "Distrito Federal", acronym: "DF", region: "Centro-Oeste" },
  { name: "Espírito Santo", acronym: "ES", region: "Sudeste" },
  { name: "Goiás", acronym: "GO", region: "Centro-Oeste" },
  { name: "Maranhão", acronym: "MA", region: "Nordeste" },
  { name: "Mato Grosso", acronym: "MT", region: "Centro-Oeste" },
  { name: "Mato Grosso do Sul", acronym: "MS", region: "Centro-Oeste" },
  { name: "Minas Gerais", acronym: "MG", region: "Sudeste" },
  { name: "Pará", acronym: "PA", region: "Norte" },
  { name: "Paraíba", acronym: "PB", region: "Nordeste" },
  { name: "Paraná", acronym: "PR", region: "Sul" },
  { name: "Pernambuco", acronym: "PE", region: "Nordeste" },
  { name: "Piauí", acronym: "PI", region: "Nordeste" },
  { name: "Rio de Janeiro", acronym: "RJ", region: "Sudeste" },
  { name: "Rio Grande do Norte", acronym: "RN", region: "Nordeste" },
  { name: "Rio Grande do Sul", acronym: "RS", region: "Sul" },
  { name: "Rondônia", acronym: "RO", region: "Norte" },
  { name: "Roraima", acronym: "RR", region: "Norte" },
  { name: "Santa Catarina", acronym: "SC", region: "Sul" },
  { name: "São Paulo", acronym: "SP", region: "Sudeste" },
  { name: "Sergipe", acronym: "SE", region: "Nordeste" },
  { name: "Tocantins", acronym: "TO", region: "Norte" },
]

const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Carlos Silva",
    party: "PDB",
    coalition: "União pelo Progresso",
    state: "São Paulo",
    stateAcronym: "sp",
    image: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=1200&width=800",
    currentPosition: "Deputado Federal",
    socialLinks: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "instagram", url: "https://instagram.com" },
      { type: "facebook", url: "https://facebook.com" },
    ],
    timeline: [
      {
        date: "2022-01-15",
        title: "Eleito Deputado Federal",
        description: "Eleito com 120.000 votos para o mandato 2023-2026",
        type: "position",
      },
      {
        date: "2020-06-10",
        title: "Mudança para o PDB",
        description: "Após divergências internas, deixou o antigo partido",
        type: "party",
      },
      {
        date: "2018-10-28",
        title: "Secretário Estadual",
        description: "Nomeado Secretário de Infraestrutura do Estado",
        type: "position",
      },
    ],
    spending: [
      { year: "2022", amount: 1200000, category: "Infraestrutura" },
      { year: "2022", amount: 800000, category: "Saúde" },
      { year: "2022", amount: 500000, category: "Educação" },
      { year: "2023", amount: 1500000, category: "Infraestrutura" },
      { year: "2023", amount: 1000000, category: "Saúde" },
      { year: "2023", amount: 700000, category: "Educação" },
    ],
    connections: [
      {
        name: "Roberto Mendes",
        position: "Presidente do Senado",
        relationship: "Aliado político de longa data, apoiou diversas iniciativas",
        influence: "high",
      },
      {
        name: "Maria Gomes",
        position: "Ministra da Economia",
        relationship: "Colega de partido, colaboração em projetos econômicos",
        influence: "medium",
      },
      {
        name: "João Ferreira",
        position: "Prefeito de São Paulo",
        relationship: "Parceria em projetos municipais",
        influence: "medium",
      },
    ],
    promises: [
      {
        title: "Duplicação da Rodovia SP-101",
        description: "Projeto de ampliação e modernização da rodovia estadual",
        category: "Infraestrutura",
        status: "in_progress",
      },
      {
        title: "Construção de 10 novas UPAs",
        description: "Unidades de Pronto Atendimento em cidades do interior",
        category: "Saúde",
        status: "not_started",
      },
      {
        title: "Programa de Bolsas Universitárias",
        description: "Financiamento para 5.000 estudantes de baixa renda",
        category: "Educação",
        status: "fulfilled",
      },
    ],
  },
  {
    id: "2",
    name: "Ana Oliveira",
    party: "PSR",
    coalition: "Frente Popular",
    state: "São Paulo",
    stateAcronym: "sp",
    image: "/placeholder.svg?height=400&width=400",
    currentPosition: "Prefeita de Campinas",
    socialLinks: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "instagram", url: "https://instagram.com" },
    ],
    timeline: [
      {
        date: "2020-11-15",
        title: "Eleita Prefeita de Campinas",
        description: "Eleita com 52% dos votos válidos",
        type: "position",
      },
      {
        date: "2018-03-20",
        title: "Presidente Estadual do PSR",
        description: "Eleita presidente do diretório estadual do partido",
        type: "party",
      },
    ],
  },
  {
    id: "3",
    name: "Marcos Santos",
    party: "PLD",
    state: "São Paulo",
    stateAcronym: "sp",
    image: "/placeholder.svg?height=400&width=400",
    currentPosition: "Senador",
    socialLinks: [
      { type: "facebook", url: "https://facebook.com" },
      { type: "instagram", url: "https://instagram.com" },
    ],
  },
]

export function getCandidatesByState(stateAcronym: string): Candidate[] {
  return mockCandidates.filter((candidate) => candidate.stateAcronym.toLowerCase() === stateAcronym.toLowerCase())
}

export function getCandidateById(id: string): Candidate | undefined {
  return mockCandidates.find((candidate) => candidate.id === id)
}

const mockNews: Record<string, News[]> = {
  "1": [
    {
      id: "n1",
      title: "Carlos Silva anuncia novo pacote de investimentos em infraestrutura",
      source: "Folha de São Paulo",
      date: "2023-04-10",
      url: "#",
      sentiment: "positive",
    },
    {
      id: "n2",
      title: "Deputado defende reforma tributária em debate na Câmara",
      source: "O Estado de S. Paulo",
      date: "2023-03-25",
      url: "#",
      sentiment: "neutral",
    },
    {
      id: "n3",
      title: "Polêmica sobre declarações de Carlos Silva gera críticas da oposição",
      source: "G1",
      date: "2023-02-15",
      url: "#",
      sentiment: "negative",
    },
  ],
  "2": [
    {
      id: "n4",
      title: "Prefeita Ana Oliveira inaugura novo hospital municipal",
      source: "Correio Popular",
      date: "2023-04-05",
      url: "#",
      sentiment: "positive",
    },
    {
      id: "n5",
      title: "Campinas é destaque em ranking de cidades inteligentes",
      source: "Folha de São Paulo",
      date: "2023-03-20",
      url: "#",
      sentiment: "positive",
    },
  ],
}

export function getNewsByCandidate(candidateId: string): News[] {
  return mockNews[candidateId] || []
}
