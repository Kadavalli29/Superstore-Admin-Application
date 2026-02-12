'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function OrdersPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('All')

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated')
    if (!isAuth) {
      router.push('/')
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="loading"></div></div>

  const orders = [
    { id: '#ORD-001', customer: 'Rahul Sharma', items: 5, amount: 3240, status: 'Delivered', payment: 'Paid', type: 'Online', date: '2024-02-12', time: '10:30 AM' },
    { id: '#ORD-002', customer: 'Priya Patel', items: 3, amount: 1890, status: 'Processing', payment: 'Paid', type: 'Online', date: '2024-02-12', time: '11:15 AM' },
    { id: '#ORD-003', customer: 'Amit Kumar', items: 7, amount: 5420, status: 'Pending', payment: 'COD', type: 'Online', date: '2024-02-12', time: '12:00 PM' },
    { id: '#ORD-004', customer: 'Sneha Reddy', items: 2, amount: 980, status: 'Delivered', payment: 'Paid', type: 'In-Store', date: '2024-02-12', time: '01:20 PM' },
    { id: '#ORD-005', customer: 'Vikram Singh', items: 4, amount: 2350, status: 'Cancelled', payment: 'Refunded', type: 'Online', date: '2024-02-12', time: '02:45 PM' },
    { id: '#ORD-006', customer: 'Neha Gupta', items: 6, amount: 4120, status: 'Shipped', payment: 'Paid', type: 'Online', date: '2024-02-12', time: '03:10 PM' },
    { id: '#ORD-007', customer: 'Arjun Mehta', items: 3, amount: 1560, status: 'Processing', payment: 'Paid', type: 'Online', date: '2024-02-12', time: '03:55 PM' },
    { id: '#ORD-008', customer: 'Pooja Sharma', items: 8, amount: 6780, status: 'Pending', payment: 'COD', type: 'Online', date: '2024-02-12', time: '04:20 PM' },
  ]

  const statuses = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

  const filteredOrders = filterStatus === 'All' 
    ? orders 
    : orders.filter(order => order.status === filterStatus)

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'Pending').length,
    processing: orders.filter(o => o.status === 'Processing').length,
    delivered: orders.filter(o => o.status === 'Delivered').length,
    cancelled: orders.filter(o => o.status === 'Cancelled').length,
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-0 lg:ml-[280px]">
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Order Management</h1>
                <p className="text-slate-400">Track and manage customer orders</p>
              </div>
              <div className="flex gap-3">
                <button className="btn btn-secondary">
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filter
                </button>
                <button className="btn btn-primary">
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export
                </button>
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                    filterStatus === status
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-slate-800/50 text-slate-400 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Order Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Total Orders</p>
              <p className="text-3xl font-bold text-white">{orderStats.total}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Pending</p>
              <p className="text-3xl font-bold text-white">{orderStats.pending}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Processing</p>
              <p className="text-3xl font-bold text-white">{orderStats.processing}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Delivered</p>
              <p className="text-3xl font-bold text-white">{orderStats.delivered}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Cancelled</p>
              <p className="text-3xl font-bold text-white">{orderStats.cancelled}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">
              {filterStatus === 'All' ? 'All Orders' : `${filterStatus} Orders`} ({filteredOrders.length})
            </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date & Time</th>
                    <th>Items</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="font-semibold text-white">{order.id}</td>
                      <td className="font-semibold text-white">{order.customer}</td>
                      <td>
                        <div className="text-sm">
                          <p className="text-white">{order.date}</p>
                          <p className="text-slate-400">{order.time}</p>
                        </div>
                      </td>
                      <td className="text-white">{order.items}</td>
                      <td className="text-white font-bold">₹{order.amount.toLocaleString()}</td>
                      <td>
                        <span className={`badge ${order.type === 'Online' ? 'badge-info' : 'badge-success'}`}>
                          {order.type}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${
                          order.payment === 'Paid' ? 'badge-success' :
                          order.payment === 'COD' ? 'badge-warning' :
                          'badge-danger'
                        }`}>
                          {order.payment}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${
                          order.status === 'Delivered' ? 'badge-success' :
                          order.status === 'Processing' || order.status === 'Shipped' ? 'badge-info' :
                          order.status === 'Pending' ? 'badge-warning' :
                          'badge-danger'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                          View Details →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today's Orders Timeline */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Today's Order Timeline</h2>
              <div className="space-y-4">
                {orders.slice(0, 5).map((order, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                        order.status === 'Cancelled' ? 'bg-red-500/20 text-red-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {order.status === 'Delivered' ? '✓' :
                         order.status === 'Cancelled' ? '✗' : '•'}
                      </div>
                      {index < 4 && <div className="w-0.5 h-8 bg-slate-700"></div>}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-white">{order.id}</p>
                        <p className="text-sm text-slate-400">{order.time}</p>
                      </div>
                      <p className="text-sm text-slate-400 mb-1">{order.customer} • {order.items} items</p>
                      <div className="flex items-center gap-2">
                        <span className={`badge ${
                          order.status === 'Delivered' ? 'badge-success' :
                          order.status === 'Cancelled' ? 'badge-danger' :
                          'badge-info'
                        }`}>
                          {order.status}
                        </span>
                        <span className="text-white font-bold">₹{order.amount}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Online vs In-Store */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Order Distribution</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                      <span className="text-white font-semibold">Online Orders</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">{orders.filter(o => o.type === 'Online').length}</p>
                      <p className="text-sm text-slate-400">
                        {Math.round((orders.filter(o => o.type === 'Online').length / orders.length) * 100)}%
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      style={{ width: `${(orders.filter(o => o.type === 'Online').length / orders.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                      <span className="text-white font-semibold">In-Store Orders</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">{orders.filter(o => o.type === 'In-Store').length}</p>
                      <p className="text-sm text-slate-400">
                        {Math.round((orders.filter(o => o.type === 'In-Store').length / orders.length) * 100)}%
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: `${(orders.filter(o => o.type === 'In-Store').length / orders.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-sm font-semibold text-slate-400 mb-4">Cancellation Rate</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Cancelled Orders</span>
                    <span className="text-red-400 font-bold">
                      {orderStats.cancelled} ({Math.round((orderStats.cancelled / orders.length) * 100)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
