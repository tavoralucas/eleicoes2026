export type State = {
  name: string
  acronym: string
  region: string
}

export type ElectoralReceipt = {
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

export type Candidate = {
  id: string
  name: string
  party: string
  coalition?: string
  state: string
  stateAcronym: string
  profileImage: string
  partyImage: string
  coverImage: string
  currentPosition: string
  socialLinks: Array<{
    type: string
    url: string
  }>
  timeline?: Array<{
    date: string
    title: string
    description: string
    type: string
  }>
  spending?: Array<{
    year: string
    amount: number
    category: string
  }>
  connections?: Array<{
    name: string
    position: string
    relationship: string
    influence: "high" | "medium" | "low"
  }>
  promises?: Array<{
    title: string
    description: string
    category: string
    status: "fulfilled" | "in_progress" | "broken" | "not_started"
  }>
  receipts?: ElectoralReceipt[]
}

export type News = {
  id: string
  title: string
  source: string
  date: string
  url: string
  sentiment: "positive" | "neutral" | "negative"
}

export type SpendingData = {
  year: string
  amount: number
  category: string
}

export type Connection = {
  name: string
  position: string
  relationship: string
  influence: "high" | "medium" | "low"
}
