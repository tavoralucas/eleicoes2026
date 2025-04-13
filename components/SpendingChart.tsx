"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

type SpendingData = {
  year: string
  amount: number
  category: string
}

export default function SpendingChart({ data }: { data: SpendingData[] }) {
  // Group data by year and category
  const processedData = data.reduce((acc, item) => {
    const existingYear = acc.find((d) => d.year === item.year)

    if (existingYear) {
      existingYear[item.category] = item.amount
    } else {
      const newYearData: any = { year: item.year }
      newYearData[item.category] = item.amount
      acc.push(newYearData)
    }

    return acc
  }, [] as any[])

  // Get unique categories
  const categories = Array.from(new Set(data.map((item) => item.category)))

  // Generate colors for categories
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                notation: "compact",
                compactDisplay: "short",
              }).format(value)
            }
          />
          <Tooltip
            formatter={(value: number) =>
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(value)
            }
          />
          <Legend />
          {categories.map((category, index) => (
            <Bar key={category} dataKey={category} fill={colors[index % colors.length]} stackId="a" />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
