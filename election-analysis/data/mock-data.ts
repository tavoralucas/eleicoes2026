import type { Candidate, News } from "@/types"

// Adicionar novo tipo para receitas
type ElectoralReceipt = {
  donor: string
  cpfCnpj: string
  originalDonor?: string
  date: string
  electoralReceipt?: string
  value: number
  resourceType: string
  documentNumber: string
  resourceSource: string
}

export type { ElectoralReceipt }

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
    profileImage: "/placeholder.svg?height=400&width=400",
    partyImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=1200&width=800",
    currentPosition: "Deputado Federal",
    socialLinks: [
      { type: "x", url: "https://twitter.com" },
      { type: "instagram", url: "https://instagram.com" }
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
    profileImage: "/placeholder.svg?height=400&width=400",
    partyImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=1200&width=800",
    currentPosition: "Prefeita de Campinas",
    socialLinks: [
      { type: "x", url: "https://twitter.com" },
      { type: "instagram", url: "https://instagram.com" }
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
    profileImage: "/placeholder.svg?height=400&width=400",
    partyImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=1200&width=800",
    currentPosition: "Senador",
    socialLinks: [
      { type: "instagram", url: "https://instagram.com" }
    ],
  },
  {
    id: "4",
    name: "João Campos",
    party: "PSB",
    coalition: "Frente Democrática de Pernambuco",
    state: "Pernambuco",
    stateAcronym: "pe",
    profileImage: "/assets/joao_campos_pe.jpeg",
    partyImage: "/assets/joao_campos_thumb.png",
    coverImage: "/assets/joao_campos_thumb.png",
    currentPosition: "Prefeito do Recife",
    socialLinks: [
      { type: "x", url: "https://twitter.com/joaocampos" },
      { type: "instagram", url: "https://instagram.com/joaocampos" }
    ],
    timeline: [
      {
        date: "2024-10-15",
        title: "Reeleito Prefeito do Recife",
        description: "Reeleito no primeiro turno com 78,11% dos votos válidos, alcançando o maior percentual de votos desde a redemocratização. Sua gestão foi marcada por iniciativas como a ampliação de vagas em creches, obras de contenção de encostas e investimentos em eventos culturais.",
        type: "position"
      },
      {
        date: "2020-11-29",
        title: "Eleito Prefeito do Recife",
        description: "Aos 27 anos, é eleito prefeito do Recife, tornando-se o mais jovem a assumir o cargo na história da cidade. Venceu no segundo turno com 56,27% dos votos válidos, derrotando sua prima Marília Arraes.",
        type: "position"
      },
      {
        date: "2018-10-07",
        title: "Eleito Deputado Federal por Pernambuco",
        description: "Com 460.387 votos, João Campos torna-se o deputado federal mais votado da história de Pernambuco. Durante seu mandato, destacou-se como criador e relator da CPI do Óleo, coordenador da Comissão Externa de Acompanhamento dos Trabalhos do MEC e presidente da Frente Parlamentar Mista em Defesa da Renda Básica.",
        type: "position"
      },
      {
        date: "2016-05-15",
        title: "Filiação ao PSB",
        description: "João Campos filia-se ao Partido Socialista Brasileiro (PSB), seguindo os passos de seu pai, Eduardo Campos, e de seu bisavô, Miguel Arraes, ambos figuras proeminentes na política pernambucana.",
        type: "party"
      }
    ],
    receipts: [
      {
        donor: "Direção Municipal/Comissão Provisória - Partido Socialista Brasileiro",
        cpfCnpj: "10.643.668/0001-00",
        date: "2024-01-10",
        value: 266500,
        resourceType: "Transferência eletrônica",
        documentNumber: "000651",
        resourceSource: "Fundo Especial"
      },
      {
        donor: "Direção Nacional - Partido Socialista Brasileiro",
        cpfCnpj: "01.421.697/0001-37",
        date: "2024-09-16",
        value: 4537500,
        resourceType: "Transferência eletrônica",
        documentNumber: "000001",
        resourceSource: "Fundo Especial"
      },
      {
        donor: "Direção Nacional - Partido Socialista Brasileiro",
        cpfCnpj: "01.421.697/0001-37",
        date: "2024-08-22",
        value: 4837500,
        resourceType: "Transferência eletrônica",
        documentNumber: "000001",
        resourceSource: "Fundo Especial"
      },
      {
        donor: "Direção Municipal/Comissão Provisória - Partido Socialista Brasileiro",
        cpfCnpj: "10.643.668/0001-00",
        date: "2024-08-15",
        electoralReceipt: "000401125313PE000001E",
        value: 30000,
        resourceType: "Transferência eletrônica",
        documentNumber: "",
        resourceSource: "Fundo Partidário"
      }
    ],
    spending: [
      { year: "2021", amount: 1800000, category: "Infraestrutura" },
      { year: "2021", amount: 1200000, category: "Saúde" },
      { year: "2021", amount: 900000, category: "Educação" },
      { year: "2022", amount: 2000000, category: "Infraestrutura" },
      { year: "2022", amount: 1500000, category: "Saúde" },
      { year: "2022", amount: 1100000, category: "Educação" },
      { year: "2023", amount: 2200000, category: "Infraestrutura" },
      { year: "2023", amount: 1700000, category: "Saúde" },
      { year: "2023", amount: 1300000, category: "Educação" },
    ],
    connections: [
      {
        name: "Renata Campos",
        position: "Mãe e Conselheira Política",
        relationship: "Figura central na formação política de João, Renata é uma conselheira constante e guardiã do legado de Eduardo Campos. Sua influência é decisiva nas decisões estratégicas e na manutenção dos vínculos com a base histórica do PSB.",
        influence: "high"
      },
      {
        name: "Geraldo Julio",
        position: "Ex-prefeito do Recife",
        relationship: "Mentor político direto, Geraldo foi fundamental na transição de João da Câmara Federal para a Prefeitura do Recife. Mesmo fora dos holofotes, continua atuando como articulador nos bastidores da Frente Popular.",
        influence: "high"
      },
      {
        name: "Luiz Inácio Lula da Silva",
        position: "Presidente da República",
        relationship: "A relação entre João e Lula transcende alianças eleitorais. Lula tem elogiado publicamente a gestão de João e o incentivado a disputar o governo de Pernambuco em 2026. A conexão é reforçada por laços históricos entre o PT e a família Arraes-Campos.",
        influence: "high"
      },
      {
        name: "Eduardo Campos",
        position: "Pai (in memoriam)",
        relationship: "Embora falecido, Eduardo permanece como referência simbólica e inspiração para João. Seu legado molda a identidade política do filho, sendo frequentemente citado em discursos e ações públicas.",
        influence: "high"
      },
      {
        name: "Paulo Câmara",
        position: "Ex-governador de Pernambuco",
        relationship: "Aliado histórico do PSB e ex-chefe de João no governo estadual. Embora sua influência tenha diminuído após deixar o cargo, ainda mantém relevância nos círculos políticos locais.",
        influence: "medium"
      },
      {
        name: "Tabata Amaral",
        position: "Deputada Federal e Companheira",
        relationship: "Parceira pessoal e política, Tabata compartilha pautas progressistas com João. Sua atuação em nível nacional e a relação com João fortalecem a imagem de ambos como lideranças jovens e inovadoras.",
        influence: "medium"
      },
      {
        name: "Pedro Campos",
        position: "Irmão e Deputado Federal",
        relationship: "Atuante na Câmara dos Deputados, Pedro colabora com João em projetos e articulações políticas, reforçando a presença da família Campos no cenário político pernambucano.",
        influence: "medium"
      },
      {
        name: "Marília Arraes",
        position: "Prima e Ex-deputada Federal",
        relationship: "Apesar dos laços familiares, Marília seguiu trajetória política distinta, com disputas eleitorais diretas contra João. Atualmente, não exerce influência significativa em suas decisões políticas.",
        influence: "low"
      },
      {
        name: "Danilo Cabral",
        position: "Ex-deputado Federal",
        relationship: "Aliado do PSB e ex-candidato ao governo estadual, Danilo teve papel relevante em campanhas anteriores, mas sua influência direta sobre João é limitada no contexto atual.",
        influence: "low"
      }
    ],
    promises: [
      {
        title: "Programa Recife Digital",
        description: "Transformação digital da cidade com Wi-Fi gratuito em todos os bairros",
        category: "Tecnologia",
        status: "in_progress",
      },
      {
        title: "Revitalização da Orla",
        description: "Projeto de modernização e preservação da orla marítima do Recife",
        category: "Urbanismo",
        status: "in_progress",
      },
      {
        title: "Expansão do BRT",
        description: "Ampliação das linhas de BRT para melhorar a mobilidade urbana",
        category: "Transporte",
        status: "not_started",
      },
      {
        title: "Programa Escola do Futuro",
        description: "Modernização de 50 escolas municipais com laboratórios de tecnologia",
        category: "Educação",
        status: "fulfilled",
      },
      {
        title: "Obras de saneamento",
        description: "As obras do Sistema de Esgotamento Sanitário (SES) Cordeiro estão em andamento, com investimentos de R$ 196 milhões, incluindo a implantação de 150 km de rede coletora e a construção de uma estação de tratamento e seis estações elevatórias, beneficiando mais de 70 mil pessoas",
        category: "Urbanismo",
        status: "in_progress",
      },
      {
        title: "Urbanização das comunidades em áreas vulneráveis",
        description: "A Prefeitura do Recife iniciou obras de urbanização na Comunidade do Bem, na Imbiribeira, com investimentos de R$ 34 milhões pelo programa ProMorar. As intervenções incluem pavimentação, saneamento, abastecimento de água, construção de unidade de saúde, escola, praça e parque, com previsão de entrega para março de 2026",
        category: "Urbanismo",
        status: "in_progress",
      },
      {
        title: "Programa Parceria",
        description: "O Programa Parceria continua ativo, realizando obras de contenção de encostas e melhorias em áreas de morro com a participação da comunidade",
        category: "Defesa Civil",
        status: "in_progress",
      },
      {
        title: "Contenções de encostas",
        description: "Foram realizadas mais de 100 obras de contenção de encostas e aplicados 66 mil m² de geomanta em áreas de risco",
        category: "Defesa Civil",
        status: "fulfilled",
      },
      {
        title: "Escadarias e corrimãos",
        description: "A implantação de 1.000 escadarias e 600 corrimãos foi concluída, melhorando a mobilidade em áreas de morro",
        category: "Defesa Civil",
        status: "fulfilled",
      },
      {
        title: "Redução de risco para famílias",
        description: "As ações de defesa civil seguem em andamento, visando reduzir o risco para 10 mil famílias em áreas vulneráveis",
        category: "Defesa Civil",
        status: "in_progress",
      },
      {
        title: "Hospital Veterinário do Recife",
        description: "O Hospital Veterinário do Recife está em processo de expansão para atendimento 24 horas",
        category: "Proteção Animal",
        status: "in_progress",
      },
      {
        title: "Plataforma AdotaPet",
        description: "A plataforma AdotaPet foi integrada ao Conecta Recife, facilitando a adoção de animais",
        category: "Proteção Animal",
        status: "fulfilled",
      },
      {
        title: "Parcerias com ONGs para adoções",
        description: "Estão em andamento parcerias com ONGs para ampliar o número de adoções de animais",
        category: "Proteção Animal",
        status: "in_progress",
      },
      {
        title: "Reestruturação do Sistema de Incentivo à Cultura",
        description: "O Sistema de Incentivo à Cultura foi reestruturado para melhor apoiar artistas e produtores culturais",
        category: "Cultura",
        status: "fulfilled",
      },
      {
        title: "Expansão do calendário cultural",
        description: "O calendário cultural foi expandido, incluindo eventos de frevo, jazz e festas populares",
        category: "Cultura",
        status: "fulfilled",
      },
      {
        title: "Recorde de público em eventos",
        description: "Os eventos de Carnaval e São João registraram recorde de público nos últimos anos",
        category: "Cultura",
        status: "fulfilled",
      },
      {
        title: "Fortalecimento da Escola de Turismo",
        description: "A Escola de Turismo foi fortalecida, formando 13 mil profissionais para o setor",
        category: "Cultura",
        status: "fulfilled",
      },
      {
        title: "Rotas exclusivas de corrida",
        description: "Foram implantadas rotas exclusivas de corrida e realizado o evento Cross Recife",
        category: "Esporte",
        status: "fulfilled",
      },
      {
        title: "Expansão dos campos de várzea",
        description: "Está em andamento a expansão dos campos de várzea, conhecidos como Gramadão",
        category: "Esporte",
        status: "in_progress",
      },
      {
        title: "Bolsa Atleta",
        description: "O programa Bolsa Atleta foi implementado, oferecendo apoio financeiro de R$ 300 a R$ 500 por mês",
        category: "Esporte",
        status: "fulfilled",
      },
      {
        title: "Centros de Referência Paralímpicos",
        description: "Recife conta com quatro Centros de Referência Paralímpicos, oferecendo oito modalidades esportivas para pessoas com deficiência, incluindo o programa TEAtivo para o público autista",
        category: "Esporte",
        status: "fulfilled",
      },
      {
        title: "Academias Recife",
        description: "O número de Academias Recife chegou a 28 unidades, com a inauguração da mais recente na UFPE",
        category: "Esporte",
        status: "fulfilled",
      },
    ],
  },
  {
    id: "5",
    name: "Raquel Lyra",
    party: "PSDB",
    coalition: "Pernambuco na Direção Certa",
    state: "Pernambuco",
    stateAcronym: "pe",
    profileImage: "/assets/raquel_lyra_pe.jpg/",
    partyImage: "/assets/raquel_lyra_thumb.jpg",
    coverImage: "/assets/raquel_lyra_thumb.jpg",
    currentPosition: "Governadora de Pernambuco",
    socialLinks: [
      { type: "x", url: "https://x.com/raquellyra" },
      { type: "instagram", url: "https://instagram.com/raquellyraoficial" }
    ],
    timeline: [
      {
        date: "2022-10-30",
        title: "Eleita Governadora de Pernambuco",
        description: "Eleita no segundo turno com 58,7% dos votos válidos",
        type: "position",
      },
      {
        date: "2020-11-15",
        title: "Reeleita Prefeita de Caruaru",
        description: "Reeleita com 79% dos votos válidos",
        type: "position",
      },
      {
        date: "2016-10-02",
        title: "Eleita Prefeita de Caruaru",
        description: "Eleita no primeiro turno com 51% dos votos",
        type: "position",
      },
      {
        date: "2014-10-05",
        title: "Eleita Deputada Estadual",
        description: "Eleita para a Assembleia Legislativa de Pernambuco",
        type: "position",
      },
      {
        date: "2011-01-01",
        title: "Secretária da Criança e Juventude",
        description: "Nomeada pelo então governador Eduardo Campos",
        type: "position",
      },
    ],
    spending: [
      { year: "2023", amount: 3500000, category: "Infraestrutura" },
      { year: "2023", amount: 2800000, category: "Saúde" },
      { year: "2023", amount: 2200000, category: "Educação" },
      { year: "2023", amount: 1500000, category: "Segurança" },
      { year: "2024", amount: 4000000, category: "Infraestrutura" },
      { year: "2024", amount: 3200000, category: "Saúde" },
      { year: "2024", amount: 2500000, category: "Educação" },
      { year: "2024", amount: 1800000, category: "Segurança" },
    ],
    connections: [
      {
        name: "João Lyra Neto",
        position: "Ex-governador de Pernambuco",
        relationship: "Pai e mentor político",
        influence: "high",
      },
      {
        name: "Fernando Henrique Cardoso",
        position: "Ex-presidente da República",
        relationship: "Referência política e apoiador",
        influence: "medium",
      },
      {
        name: "Bruno Araújo",
        position: "Ex-presidente nacional do PSDB",
        relationship: "Aliado político e estrategista de campanha",
        influence: "high",
      },
      {
        name: "Miguel Coelho",
        position: "Ex-prefeito de Petrolina",
        relationship: "Aliado político regional",
        influence: "medium",
      },
    ],
    promises: [
      {
        title: "Programa Pernambuco Seguro",
        description: "Redução de 30% nos índices de criminalidade em todo o estado",
        category: "Segurança",
        status: "in_progress",
      },
      {
        title: "Duplicação da BR-232",
        description: "Conclusão da duplicação até Caruaru e início das obras até Arcoverde",
        category: "Infraestrutura",
        status: "in_progress",
      },
      {
        title: "Hospital Regional do Agreste",
        description: "Construção de novo hospital regional em Caruaru",
        category: "Saúde",
        status: "not_started",
      },
      {
        title: "Programa Primeiro Emprego",
        description: "Inserção de 10.000 jovens no mercado de trabalho",
        category: "Emprego",
        status: "in_progress",
      },
      {
        title: "Modernização das Escolas Técnicas",
        description: "Reforma e equipagem de 15 escolas técnicas estaduais",
        category: "Educação",
        status: "fulfilled",
      },
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
  "4": [
    {
      id: "n1",
      title: "João Campos lidera com 67% contra 22% de Raquel Lyra em Pernambuco",
      source: "UOL",
      date: "2025-04-10",
      url: "https://noticias.uol.com.br/politica/eleicoes/2025/04/10/joao-campos-lidera-com-67-contra-22-de-raquel-lyra-em-pernambuco.htm",
      sentiment: "positive",
    },
    {
      id: "n2",
      title: "João Campos é lançado candidato à presidência do PSB",
      source: "UOL",
      date: "2025-02-07",
      url: "https://noticias.uol.com.br/politica/eleicoes/2025/02/07/joao-campos-e-lancado-candidato-a-presidencia-do-psb.htm",
      sentiment: "positive",
    },
    {
      id: "n3",
      title: "João Campos inicia segundo mandato com protagonismo a novo vice-prefeito no Recife",
      source: "Folha de S.Paulo",
      date: "2025-01-01",
      url: "https://www1.folha.uol.com.br/poder/2025/01/01/joao-campos-inicia-segundo-mandato-com-protagonismo-a-novo-vice-prefeito-no-recife.shtml",
      sentiment: "positive",
    },
    {
      id: "n4",
      title: "Reeleito, João Campos é empossado prefeito de Recife nesta quarta",
      source: "Metrópoles",
      date: "2025-01-01",
      url: "https://www.metropoles.com/brasil/politica-brasil/reeleito-joao-campos-e-empossado-prefeito-de-recife-nesta-quarta",
      sentiment: "positive",
    },
    {
      id: "n5",
      title: "João Campos é reeleito em Recife",
      source: "Agência Brasil",
      date: "2024-10-06",
      url: "https://agenciabrasil.ebc.com.br/politica/noticia/2024-10/joao-campos-e-reeleito-em-recife",
      sentiment: "positive",
    },
  ],
  "5": [
    {
      id: "n9",
      title: "Raquel Lyra lança programa de desenvolvimento econômico para o interior",
      source: "Diario de Pernambuco",
      date: "2023-06-05",
      url: "#",
      sentiment: "positive",
    },
    {
      id: "n10",
      title: "Governadora enfrenta desafios na Assembleia Legislativa",
      source: "Jornal do Commercio",
      date: "2023-05-18",
      url: "#",
      sentiment: "neutral",
    },
    {
      id: "n11",
      title: "Raquel Lyra anuncia concurso para 2.000 vagas na segurança pública",
      source: "G1 Pernambuco",
      date: "2023-04-12",
      url: "#",
      sentiment: "positive",
    },
    {
      id: "n12",
      title: "Oposição critica gestão da governadora na área da saúde",
      source: "Folha de Pernambuco",
      date: "2023-03-25",
      url: "#",
      sentiment: "negative",
    },
  ],
}

export function getNewsByCandidate(candidateId: string): News[] {
  return mockNews[candidateId] || []
}
