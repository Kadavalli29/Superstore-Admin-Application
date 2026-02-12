'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function ProductsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated')
    if (!isAuth) {
      router.push('/')
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="loading"></div></div>

  const products = [
    { id: 'P001', name: 'Organic Milk (1L)', category: 'Dairy', price: 65, stock: 450, sold: 245, rating: 4.5, status: 'Active' },
    { id: 'P002', name: 'Brown Rice (5kg)', category: 'Groceries', price: 450, stock: 320, sold: 189, rating: 4.7, status: 'Active' },
    { id: 'P003', name: 'Fresh Tomatoes (1kg)', category: 'Vegetables', price: 40, stock: 890, sold: 567, rating: 4.2, status: 'Active' },
    { id: 'P004', name: 'Whole Wheat Bread', category: 'Bakery', price: 45, stock: 234, sold: 423, rating: 4.6, status: 'Active' },
    { id: 'P005', name: 'Cold Drink (Pack of 6)', category: 'Beverages', price: 180, stock: 567, sold: 334, rating: 4.1, status: 'Active' },
    { id: 'P006', name: 'Organic Honey (500g)', category: 'Groceries', price: 320, stock: 12, sold: 156, rating: 4.8, status: 'Low Stock' },
    { id: 'P007', name: 'Greek Yogurt (400g)', category: 'Dairy', price: 85, stock: 198, sold: 287, rating: 4.4, status: 'Active' },
    { id: 'P008', name: 'Potato Chips (100g)', category: 'Snacks', price: 20, stock: 0, sold: 412, rating: 4.0, status: 'Out of Stock' },
  ]

  const categories = ['All', 'Dairy', 'Groceries', 'Vegetables', 'Bakery', 'Beverages', 'Snacks']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-0 lg:ml-[280px]">
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Product Management</h1>
                <p className="text-slate-400">Manage your product catalog</p>
              </div>
              <button className="btn btn-primary">
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Product
              </button>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-slate-800/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Product Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Total Products</p>
              <p className="text-3xl font-bold text-white">{products.length}</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Active Products</p>
              <p className="text-3xl font-bold text-white">{products.filter(p => p.status === 'Active').length}</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Low Stock</p>
              <p className="text-3xl font-bold text-white">{products.filter(p => p.status === 'Low Stock').length}</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Out of Stock</p>
              <p className="text-3xl font-bold text-white">{products.filter(p => p.status === 'Out of Stock').length}</p>
            </div>
          </div>

          {/* Products Table */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">All Products ({filteredProducts.length})</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Sold</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="font-semibold text-white">{product.id}</td>
                      <td className="font-semibold text-white">{product.name}</td>
                      <td>
                        <span className="badge badge-info">{product.category}</span>
                      </td>
                      <td className="text-white font-semibold">₹{product.price}</td>
                      <td>
                        <span className={`font-semibold ${
                          product.stock === 0 ? 'text-red-400' :
                          product.stock < 50 ? 'text-orange-400' :
                          'text-green-400'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="text-white">{product.sold}</td>
                      <td>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-white font-semibold">{product.rating}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${
                          product.status === 'Active' ? 'badge-success' :
                          product.status === 'Low Stock' ? 'badge-warning' :
                          'badge-danger'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <button className="text-blue-400 hover:text-blue-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button className="text-red-400 hover:text-red-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Selling Products */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Best Sellers This Month</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.sort((a, b) => b.sold - a.sold).slice(0, 3).map((product, index) => (
                <div key={index} className="p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      #{index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{product.name}</h3>
                      <p className="text-xs text-slate-400">{product.category}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Units Sold:</span>
                      <span className="text-white font-bold">{product.sold}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Revenue:</span>
                      <span className="text-green-400 font-bold">₹{(product.sold * product.price).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Rating:</span>
                      <span className="text-yellow-400 font-bold flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.rating}
                      </span>
                    </div>
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
