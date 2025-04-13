"use client"

import { useState, useEffect } from "react"
import { getNewsByCandidate } from "@/data/mock-data"

type News = {
  id: string
  title: string
  source: string
  date: string
  url: string
  sentiment?: "positive" | "negative" | "neutral"
}

export default function NewsAggregator({ candidateId }: { candidateId: string }) {
  const [news, setNews] = useState<News[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchNews = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        const newsData = getNewsByCandidate(candidateId)
        setNews(newsData)
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [candidateId])

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    )
  }

  if (news.length === 0) {
    return <p className="text-gray-500 italic">Nenhuma notícia encontrada.</p>
  }

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          <h4 className="font-medium line-clamp-2">{item.title}</h4>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
            <span>{item.source}</span>
            <div className="flex items-center gap-2">
              {item.sentiment && <span className={`w-2 h-2 rounded-full ${getSentimentColor(item.sentiment)}`}></span>}
              <span>{formatNewsDate(item.date)}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

function getSentimentColor(sentiment: string): string {
  switch (sentiment) {
    case "positive":
      return "bg-green-500"
    case "negative":
      return "bg-red-500"
    case "neutral":
    default:
      return "bg-gray-500"
  }
}

function formatNewsDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    return "Hoje"
  } else if (diffDays === 1) {
    return "Ontem"
  } else if (diffDays < 7) {
    return `${diffDays} dias atrás`
  } else {
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })
  }
}
