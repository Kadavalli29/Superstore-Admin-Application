'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function AnalyticsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('7days')

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated')
    if (!isAuth) {
      router.push('/')
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="loading"></div></div>

  const revenueData = [
    { month: 'Jan', revenue: 284000, profit: 213000, orders: 1240 },
    { month: 'Feb', revenue: 312000, profit: 234000, orders: 1380 },
    { month: 'Mar', revenue: 298000, profit: 223500, orders: 1320 },
    { month: 'Apr', revenue: 356000, profit: 267000, orders: 1580 },
    { month: 'May', revenue: 389000, profit: 291750, orders: 1720 },
    { month: 'Jun', revenue: 421000, profit: 315750, orders: 1860 },
  ]

  const customerInsights = [
    { metric: 'New Customers', value: 245, change: '+12%', positive: true },
    { metric: 'Returning Customers', value: 1847, change: '+8%', positive: true },
    { metric: 'Customer Retention', value: '88%', change: '+3%', positive: true },
    { metric: 'Avg. Customer Value', value: '₹8,450', change: '+15%', positive: true },
  ]

  const productInsights = [
    { category: 'Groceries', revenue: '₹4.2L', growth: 18, trending: 'up' },
    { category: 'Vegetables', revenue: '₹2.8L', growth: 12, trending: 'up' },
    { category: 'Dairy', revenue: '₹3.5L', growth: -3, trending: 'down' },
    { category: 'Beverages', revenue: '₹2.1L', growth: 8, trending: 'up' },
    { category: 'Snacks', revenue: '₹1.9L', growth: 15, trending: 'up' },
  ]

  const predictions = [
    { title: 'Stock Recommendations', items: [
      { product: 'Organic Milk', action: 'Increase Stock', reason: 'High demand predicted', priority: 'High' },
      { product: 'Fresh Vegetables', action: 'Maintain Stock', reason: 'Stable demand', priority: 'Medium' },
      { product: 'Brown Rice', action: 'Increase Stock', reason: 'Growing trend', priority: 'High' },
    ]},
    { title: 'Sales Forecast', items: [
      { metric: 'Next Week Sales', value: '₹8.5L', confidence: '92%' },
      { metric: 'Next Month Sales', value: '₹32L', confidence: '87%' },
      { metric: 'Peak Hours', value: '6-8 PM', confidence: '95%' },
    ]},
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-0 lg:ml-[280px]">
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Advanced Analytics</h1>
                <p className="text-slate-400">Deep insights and predictions</p>
              </div>
              <div className="flex gap-2">
                {['7days', '30days', '90days', '1year'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      timeRange === range
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-slate-800/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    {range === '7days' ? '7 Days' :
                     range === '30days' ? '30 Days' :
                     range === '90days' ? '90 Days' :
                     '1 Year'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="badge badge-success">+23.5%</span>
              </div>
              <p className="text-slate-400 text-sm mb-1">Revenue Growth</p>
              <p className="text-3xl font-bold text-white">23.5%</p>
            </div>
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="badge badge-info">+12%</span>
              </div>
              <p className="text-slate-400 text-sm mb-1">Customer Growth</p>
              <p className="text-3xl font-bold text-white">2,092</p>
            </div>
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="badge badge-success">+18%</span>
              </div>
              <p className="text-slate-400 text-sm mb-1">Conversion Rate</p>
              <p className="text-3xl font-bold text-white">3.8%</p>
            </div>
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="badge badge-success">+15%</span>
              </div>
              <p className="text-slate-400 text-sm mb-1">Avg. Order Value</p>
              <p className="text-3xl font-bold text-white">₹1,845</p>
            </div>
          </div>

          {/* Revenue Trends */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Revenue & Profit Trends</h2>
            <div className="space-y-4">
              {revenueData.map((data, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 font-semibold w-12">{data.month}</span>
                    <div className="flex-1 mx-4 grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-400">Revenue</span>
                          <span className="text-white font-bold">₹{(data.revenue / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                            style={{ width: `${(data.revenue / 500000) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-400">Profit</span>
                          <span className="text-green-400 font-bold">₹{(data.profit / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
                            style={{ width: `${(data.profit / 500000) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-slate-400">{data.orders} orders</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Insights */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Customer Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {customerInsights.map((insight, index) => (
                <div key={index} className="p-5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <p className="text-slate-400 text-sm mb-2">{insight.metric}</p>
                  <p className="text-2xl font-bold text-white mb-2">{insight.value}</p>
                  <span className={`text-sm font-semibold ${insight.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {insight.change} from last period
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Performance & Predictions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Product Performance */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Category Performance</h2>
              <div className="space-y-5">
                {productInsights.map((product, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-white font-semibold">{product.category}</span>
                        {product.trending === 'up' ? (
                          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                          </svg>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">{product.revenue}</p>
                        <p className={`text-sm font-semibold ${product.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {product.growth > 0 ? '+' : ''}{product.growth}%
                        </p>
                      </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full ${
                          product.growth > 15 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          product.growth > 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          'bg-gradient-to-r from-orange-500 to-red-500'
                        }`}
                        style={{ width: `${Math.abs(product.growth) * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Predictions */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                AI-Powered Insights
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl border border-purple-500/30">
                  <h3 className="font-semibold text-white mb-3">Stock Recommendations</h3>
                  <div className="space-y-2">
                    {predictions[0].items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex-1">
                          <p className="text-white font-semibold">{item.product}</p>
                          <p className="text-slate-400 text-xs">{item.reason}</p>
                        </div>
                        <span className={`badge ${item.priority === 'High' ? 'badge-danger' : 'badge-warning'}`}>
                          {item.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl border border-green-500/30">
                  <h3 className="font-semibold text-white mb-3">Sales Forecast</h3>
                  <div className="space-y-3">
                    {predictions[1].items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">{item.metric}</span>
                        <div className="text-right">
                          <p className="text-white font-bold">{item.value}</p>
                          <p className="text-green-400 text-xs">{item.confidence} confidence</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Selling Hours */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Peak Business Hours Heatmap</h2>
            <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 24 }, (_, hour) => {
                const intensity = hour >= 6 && hour <= 8 ? 100 :
                                hour >= 12 && hour <= 14 ? 80 :
                                hour >= 18 && hour <= 20 ? 90 :
                                hour >= 9 && hour <= 11 ? 60 :
                                hour >= 15 && hour <= 17 ? 55 :
                                20
                return (
                  <div key={hour} className="text-center">
                    <div 
                      className={`h-20 rounded-lg mb-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                        intensity >= 90 ? 'bg-gradient-to-t from-red-600 to-orange-500' :
                        intensity >= 70 ? 'bg-gradient-to-t from-orange-600 to-yellow-500' :
                        intensity >= 50 ? 'bg-gradient-to-t from-yellow-600 to-green-500' :
                        'bg-slate-700'
                      }`}
                      style={{ opacity: intensity / 100 }}
                      title={`${hour}:00 - ${intensity}% activity`}
                    ></div>
                    <p className="text-xs text-slate-400">{hour}h</p>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-t from-red-600 to-orange-500"></div>
                <span className="text-sm text-slate-400">Peak (90-100%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-t from-orange-600 to-yellow-500"></div>
                <span className="text-sm text-slate-400">High (70-89%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-t from-yellow-600 to-green-500"></div>
                <span className="text-sm text-slate-400">Moderate (50-69%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-700"></div>
                <span className="text-sm text-slate-400">Low (&lt;50%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
