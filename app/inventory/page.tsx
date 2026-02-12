'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function InventoryPage() {
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

  const inventoryStats = [
    { label: 'Total Items', value: '2,845', color: 'from-blue-500 to-cyan-500' },
    { label: 'Low Stock', value: '23', color: 'from-orange-500 to-red-500' },
    { label: 'Out of Stock', value: '8', color: 'from-red-500 to-pink-500' },
    { label: 'Total Value', value: '₹45.2L', color: 'from-green-500 to-emerald-500' },
  ]

  const lowStockItems = [
    { name: 'Organic Honey (500g)', current: 12, minimum: 50, category: 'Groceries', reorderQty: 100 },
    { name: 'Almond Milk (1L)', current: 8, minimum: 30, category: 'Dairy', reorderQty: 80 },
    { name: 'Olive Oil (500ml)', current: 15, minimum: 40, category: 'Cooking', reorderQty: 90 },
    { name: 'Green Tea Bags', current: 6, minimum: 25, category: 'Beverages', reorderQty: 60 },
    { name: 'Protein Bars (Pack)', current: 10, minimum: 35, category: 'Snacks', reorderQty: 75 },
  ]

  const categoryStock = [
    { category: 'Groceries', items: 845, value: '₹12.4L', status: 'Good' },
    { category: 'Vegetables', items: 456, value: '₹3.2L', status: 'Good' },
    { category: 'Fruits', items: 312, value: '₹2.8L', status: 'Low' },
    { category: 'Dairy', items: 234, value: '₹4.5L', status: 'Good' },
    { category: 'Beverages', items: 398, value: '₹5.6L', status: 'Good' },
    { category: 'Snacks', items: 287, value: '₹3.9L', status: 'Low' },
    { category: 'Bakery', items: 156, value: '₹2.1L', status: 'Good' },
    { category: 'Frozen', items: 157, value: '₹4.7L', status: 'Good' },
  ]

  const recentActivity = [
    { action: 'Stock Added', item: 'Brown Rice (5kg)', qty: 200, user: 'Admin', time: '2 hours ago' },
    { action: 'Stock Removed', item: 'Fresh Milk (1L)', qty: 45, user: 'System', time: '3 hours ago' },
    { action: 'Stock Added', item: 'Whole Wheat Bread', qty: 150, user: 'Manager', time: '5 hours ago' },
    { action: 'Low Stock Alert', item: 'Organic Honey', qty: 12, user: 'System', time: '6 hours ago' },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-0 lg:ml-[280px]">
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Inventory Management</h1>
                <p className="text-slate-400">Monitor and manage your stock levels</p>
              </div>
              <button className="btn btn-primary">
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Stock
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {inventoryStats.map((stat, index) => (
              <div key={index} className="card">
                <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <div className={`mt-3 h-2 bg-gradient-to-r ${stat.color} rounded-full`}></div>
              </div>
            ))}
          </div>

          {/* Low Stock Alerts */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Low Stock Alerts
              </h2>
              <span className="badge badge-danger">{lowStockItems.length} Items</span>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Current Stock</th>
                    <th>Minimum Required</th>
                    <th>Reorder Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lowStockItems.map((item, index) => (
                    <tr key={index}>
                      <td className="font-semibold text-white">{item.name}</td>
                      <td>{item.category}</td>
                      <td>
                        <span className="badge badge-danger">{item.current}</span>
                      </td>
                      <td className="text-white">{item.minimum}</td>
                      <td className="text-white">{item.reorderQty}</td>
                      <td>
                        <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                          Reorder →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Category Stock Overview */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Stock by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categoryStock.map((cat, index) => (
                <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white">{cat.category}</h3>
                    <span className={`badge ${cat.status === 'Good' ? 'badge-success' : 'badge-warning'}`}>
                      {cat.status}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{cat.items}</p>
                  <p className="text-sm text-slate-400">Items • Value: {cat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className={`p-3 rounded-xl ${
                    activity.action.includes('Added') ? 'bg-green-500/20' :
                    activity.action.includes('Removed') ? 'bg-blue-500/20' :
                    'bg-orange-500/20'
                  }`}>
                    {activity.action.includes('Added') ? (
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    ) : activity.action.includes('Removed') ? (
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">{activity.action}</p>
                    <p className="text-sm text-slate-400">{activity.item} • Qty: {activity.qty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">{activity.user}</p>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
