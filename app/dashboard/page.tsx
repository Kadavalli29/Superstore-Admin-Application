'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function Dashboard() {
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading"></div>
      </div>
    )
  }

  const stats = [
    {
      title: 'Total Sales Today',
      value: '₹1,24,580',
      change: '+12.5%',
      positive: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Total Orders',
      value: '347',
      change: '+8.2%',
      positive: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Products',
      value: '2,845',
      change: '+3.1%',
      positive: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Low Stock Items',
      value: '23',
      change: '-5 items',
      positive: false,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const recentOrders = [
    { id: '#ORD-001', customer: 'Rahul Sharma', items: 5, amount: '₹3,240', status: 'Delivered', time: '2 hours ago' },
    { id: '#ORD-002', customer: 'Priya Patel', items: 3, amount: '₹1,890', status: 'Processing', time: '3 hours ago' },
    { id: '#ORD-003', customer: 'Amit Kumar', items: 7, amount: '₹5,420', status: 'Pending', time: '4 hours ago' },
    { id: '#ORD-004', customer: 'Sneha Reddy', items: 2, amount: '₹980', status: 'Delivered', time: '5 hours ago' },
    { id: '#ORD-005', customer: 'Vikram Singh', items: 4, amount: '₹2,350', status: 'Cancelled', time: '6 hours ago' },
  ]

  const topProducts = [
    { name: 'Organic Milk (1L)', sold: 245, revenue: '₹12,250', stock: 450, trend: 'up' },
    { name: 'Brown Rice (5kg)', sold: 189, revenue: '₹18,900', stock: 320, trend: 'up' },
    { name: 'Fresh Vegetables', sold: 567, revenue: '₹22,680', stock: 890, trend: 'up' },
    { name: 'Whole Wheat Bread', sold: 423, revenue: '₹16,920', stock: 234, trend: 'down' },
    { name: 'Cold Drinks (Pack)', sold: 334, revenue: '₹13,360', stock: 567, trend: 'up' },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-0 lg:ml-[280px]">
        {/* Header */}
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Dashboard Overview</h1>
                <p className="text-slate-400">Welcome back! Here's what's happening today.</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400">Current Date</p>
                <p className="text-lg font-semibold text-white">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                    {stat.icon}
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${stat.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-slate-400 text-sm mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts and Tables Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Orders</h2>
                <a href="/orders" className="text-sm text-blue-400 hover:text-blue-300 font-semibold">View All →</a>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-semibold text-white">{order.id}</p>
                        <span className={`badge ${
                          order.status === 'Delivered' ? 'badge-success' :
                          order.status === 'Processing' ? 'badge-info' :
                          order.status === 'Pending' ? 'badge-warning' :
                          'badge-danger'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400">{order.customer} • {order.items} items</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white">{order.amount}</p>
                      <p className="text-xs text-slate-500">{order.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Selling Products */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Top Selling Products</h2>
                <a href="/products" className="text-sm text-blue-400 hover:text-blue-300 font-semibold">View All →</a>
              </div>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-white">{product.name}</p>
                      {product.trend === 'up' ? (
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Sold: <span className="text-white font-semibold">{product.sold}</span></span>
                      <span className="text-slate-400">Stock: <span className="text-white font-semibold">{product.stock}</span></span>
                      <span className="text-green-400 font-bold">{product.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="/products" className="card group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Add New Product</h3>
                  <p className="text-sm text-slate-400">Add items to inventory</p>
                </div>
              </div>
            </a>

            <a href="/orders" className="card group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Process Orders</h3>
                  <p className="text-sm text-slate-400">Manage pending orders</p>
                </div>
              </div>
            </a>

            <a href="/analytics" className="card group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">View Reports</h3>
                  <p className="text-sm text-slate-400">Detailed analytics</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
