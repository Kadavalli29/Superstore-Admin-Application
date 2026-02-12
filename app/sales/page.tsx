'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function SalesPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated')
    if (!isAuth) {
      router.push('/')
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="loading"></div></div>

  const dailySales = [
    { date: 'Mon', sales: 45000, orders: 87 },
    { date: 'Tue', sales: 52000, orders: 95 },
    { date: 'Wed', sales: 48000, orders: 82 },
    { date: 'Thu', sales: 61000, orders: 103 },
    { date: 'Fri', sales: 73000, orders: 124 },
    { date: 'Sat', sales: 89000, orders: 156 },
    { date: 'Sun', sales: 94000, orders: 167 },
  ]

  const salesByCategory = [
    { category: 'Groceries', amount: 285000, percentage: 35, color: 'from-blue-500 to-cyan-500' },
    { category: 'Vegetables', amount: 195000, percentage: 24, color: 'from-green-500 to-emerald-500' },
    { category: 'Dairy Products', amount: 162000, percentage: 20, color: 'from-purple-500 to-pink-500' },
    { category: 'Beverages', amount: 122000, percentage: 15, color: 'from-orange-500 to-red-500' },
    { category: 'Others', amount: 48000, percentage: 6, color: 'from-yellow-500 to-amber-500' },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-0 lg:ml-[280px]">
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-1">Sales Analytics</h1>
            <p className="text-slate-400">Track your sales performance and revenue</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Today's Sales</p>
              <p className="text-3xl font-bold text-white mb-1">₹1,24,580</p>
              <p className="text-green-400 text-sm font-semibold">↑ 12.5% from yesterday</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">This Week</p>
              <p className="text-3xl font-bold text-white mb-1">₹8,47,350</p>
              <p className="text-green-400 text-sm font-semibold">↑ 8.3% from last week</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">This Month</p>
              <p className="text-3xl font-bold text-white mb-1">₹32,15,420</p>
              <p className="text-green-400 text-sm font-semibold">↑ 15.7% from last month</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Average Order Value</p>
              <p className="text-3xl font-bold text-white mb-1">₹1,845</p>
              <p className="text-blue-400 text-sm font-semibold">↑ 5.2% increase</p>
            </div>
          </div>

          {/* Daily Sales Chart */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Daily Sales Overview</h2>
            <div className="space-y-4">
              {dailySales.map((day, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 text-slate-400 font-semibold">{day.date}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">₹{day.sales.toLocaleString()}</span>
                      <span className="text-slate-400 text-sm">{day.orders} orders</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${(day.sales / 100000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sales by Category */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Sales by Category</h2>
            <div className="space-y-6">
              {salesByCategory.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{item.category}</span>
                    <div className="text-right">
                      <p className="text-white font-bold">₹{item.amount.toLocaleString()}</p>
                      <p className="text-slate-400 text-sm">{item.percentage}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-700`}
                      style={{ width: `${item.percentage * 2.5}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profit Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Profit Margin</h2>
              <div className="text-center py-8">
                <div className="relative inline-block">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="none" className="text-slate-700" />
                    <circle cx="96" cy="96" r="80" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeDasharray="502.65" strokeDashoffset="125.66" strokeLinecap="round" className="transition-all duration-1000" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#34D399" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-5xl font-bold text-white">75%</p>
                      <p className="text-slate-400 text-sm mt-1">Profit</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Total Revenue:</span>
                    <span className="text-white font-semibold">₹32,15,420</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Total Cost:</span>
                    <span className="text-white font-semibold">₹8,03,855</span>
                  </div>
                  <div className="flex items-center justify-between text-lg pt-2 border-t border-slate-700">
                    <span className="text-slate-400 font-semibold">Net Profit:</span>
                    <span className="text-green-400 font-bold">₹24,11,565</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Top Performing Hours</h2>
              <div className="space-y-4">
                {[
                  { time: '6:00 PM - 8:00 PM', sales: 42000, orders: 89 },
                  { time: '12:00 PM - 2:00 PM', sales: 38000, orders: 76 },
                  { time: '8:00 AM - 10:00 AM', sales: 34000, orders: 68 },
                  { time: '4:00 PM - 6:00 PM', sales: 28000, orders: 54 },
                  { time: '10:00 AM - 12:00 PM', sales: 24000, orders: 47 },
                ].map((slot, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{slot.time}</span>
                      <span className="text-green-400 font-bold">₹{slot.sales.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>{slot.orders} orders</span>
                      <span>Avg: ₹{Math.round(slot.sales / slot.orders)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
