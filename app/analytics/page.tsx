'use client'

import React from "react"

export default function AnalyticsPage() {

  const predictions = [
    {
      title: "Stock Recommendations",
      items: [
        {
          product: "Organic Milk",
          action: "Increase Stock",
          reason: "High demand predicted",
          priority: "High",
        },
        {
          product: "Brown Bread",
          action: "Maintain Stock",
          reason: "Stable demand",
          priority: "Medium",
        },
        {
          product: "Eggs",
          action: "Reduce Stock",
          reason: "Demand decreasing",
          priority: "Low",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      
      <h1 className="text-3xl font-bold text-white mb-8">
        Analytics Dashboard
      </h1>

      <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-6">
          {predictions[0].title}
        </h2>

        <div className="space-y-4">
          {predictions[0].items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-slate-700 p-4 rounded-lg"
            >
              <div>
                {/* ✅ FIXED PROPERTY */}
                <p className="text-white font-semibold">
                  {item.product}
                </p>
                <p className="text-slate-400 text-sm">
                  {item.reason}
                </p>
              </div>

              <div className="text-right">
                <p className="text-green-400 text-sm font-medium">
                  {item.action}
                </p>
                <p className="text-yellow-400 text-xs">
                  Priority: {item.priority}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
