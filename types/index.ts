export type Candidate = {
  id: string
  name: string
  party: string
  coalition?: string
  state: string
  stateAcronym: string
  image: string
  coverImage?: string
  currentPosition?: string
  socialLinks?: {
    type: string
    url: string
  }[]
  timeline?: {
    date: string
    title: string
    description: string
    type: string
  }[]
  spending?: {
    year: string
    amount: number
    category: string
  }[]
  connections?: {
    name: string
    position: string
    relationship: string
    influence: "high" | "medium" | "low"
  }[]
  promises?: {
    title: string
    description: string
    category: string
    status?: "fulfilled" | "in_progress" | "broken" | "not_started"
  }[]
}

export type News = {
  id: string
  title: string
  source: string
  date: string
  url: string
  sentiment?: "positive" | "negative" | "neutral"
}
