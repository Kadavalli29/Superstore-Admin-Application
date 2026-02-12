'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function EmployeesPage() {
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

  const employees = [
    { id: 'EMP001', name: 'Rajesh Kumar', role: 'Store Manager', department: 'Management', email: 'rajesh@superstore.com', phone: '+91 98765 43210', salary: 75000, status: 'Active', joining: '2022-01-15', performance: 95 },
    { id: 'EMP002', name: 'Anjali Sharma', role: 'Cashier', department: 'Sales', email: 'anjali@superstore.com', phone: '+91 98765 43211', salary: 25000, status: 'Active', joining: '2023-03-20', performance: 88 },
    { id: 'EMP003', name: 'Suresh Patel', role: 'Inventory Manager', department: 'Operations', email: 'suresh@superstore.com', phone: '+91 98765 43212', salary: 55000, status: 'Active', joining: '2021-07-10', performance: 92 },
    { id: 'EMP004', name: 'Meera Reddy', role: 'Sales Associate', department: 'Sales', email: 'meera@superstore.com', phone: '+91 98765 43213', salary: 22000, status: 'Active', joining: '2023-06-01', performance: 85 },
    { id: 'EMP005', name: 'Vikram Singh', role: 'Delivery Manager', department: 'Logistics', email: 'vikram@superstore.com', phone: '+91 98765 43214', salary: 45000, status: 'Active', joining: '2022-11-05', performance: 90 },
    { id: 'EMP006', name: 'Priya Gupta', role: 'HR Manager', department: 'Human Resources', email: 'priya@superstore.com', phone: '+91 98765 43215', salary: 60000, status: 'Active', joining: '2021-02-20', performance: 94 },
    { id: 'EMP007', name: 'Arjun Mehta', role: 'Security Guard', department: 'Security', email: 'arjun@superstore.com', phone: '+91 98765 43216', salary: 20000, status: 'On Leave', joining: '2023-01-15', performance: 80 },
    { id: 'EMP008', name: 'Neha Kapoor', role: 'Accountant', department: 'Finance', email: 'neha@superstore.com', phone: '+91 98765 43217', salary: 50000, status: 'Active', joining: '2022-05-10', performance: 91 },
  ]

  const departments = [
    { name: 'Management', count: 1, color: 'from-purple-500 to-pink-500' },
    { name: 'Sales', count: 2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Operations', count: 1, color: 'from-green-500 to-emerald-500' },
    { name: 'Logistics', count: 1, color: 'from-orange-500 to-red-500' },
    { name: 'Human Resources', count: 1, color: 'from-yellow-500 to-amber-500' },
    { name: 'Security', count: 1, color: 'from-indigo-500 to-purple-500' },
    { name: 'Finance', count: 1, color: 'from-pink-500 to-red-500' },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-0 lg:ml-[280px]">
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Employee Management</h1>
                <p className="text-slate-400">Manage your workforce and team</p>
              </div>
              <button className="btn btn-primary">
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Employee
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Employee Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Total Employees</p>
              <p className="text-3xl font-bold text-white">{employees.length}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Active</p>
              <p className="text-3xl font-bold text-white">{employees.filter(e => e.status === 'Active').length}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">On Leave</p>
              <p className="text-3xl font-bold text-white">{employees.filter(e => e.status === 'On Leave').length}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </div>
            <div className="card">
              <p className="text-slate-400 text-sm mb-2">Departments</p>
              <p className="text-3xl font-bold text-white">{departments.length}</p>
              <div className="mt-3 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>

          {/* Employees Table */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">All Employees</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Contact</th>
                    <th>Salary</th>
                    <th>Performance</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="font-semibold text-white">{employee.id}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold text-white">{employee.name}</p>
                            <p className="text-xs text-slate-400">{employee.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-white">{employee.role}</td>
                      <td>
                        <span className="badge badge-info">{employee.department}</span>
                      </td>
                      <td className="text-slate-400">{employee.phone}</td>
                      <td className="text-white font-semibold">₹{employee.salary.toLocaleString()}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-700 rounded-full h-2">
                            <div 
                              className={`h-full rounded-full ${
                                employee.performance >= 90 ? 'bg-green-500' :
                                employee.performance >= 80 ? 'bg-blue-500' :
                                'bg-orange-500'
                              }`}
                              style={{ width: `${employee.performance}%` }}
                            ></div>
                          </div>
                          <span className="text-white text-sm font-semibold">{employee.performance}%</span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${
                          employee.status === 'Active' ? 'badge-success' : 'badge-warning'
                        }`}>
                          {employee.status}
                        </span>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <button className="text-blue-400 hover:text-blue-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="text-green-400 hover:text-green-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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

          {/* Department Distribution & Top Performers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Departments */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Department Distribution</h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold">{dept.name}</span>
                      <span className="text-white font-bold">{dept.count} {dept.count === 1 ? 'employee' : 'employees'}</span>
                    </div>
                    <div className={`h-2 bg-gradient-to-r ${dept.color} rounded-full`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Top Performers</h2>
              <div className="space-y-4">
                {employees.sort((a, b) => b.performance - a.performance).slice(0, 5).map((employee, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                        index === 1 ? 'bg-gradient-to-br from-slate-300 to-slate-500' :
                        index === 2 ? 'bg-gradient-to-br from-orange-600 to-red-600' :
                        'bg-slate-700'
                      }`}>
                        #{index + 1}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white">{employee.name}</p>
                        <p className="text-xs text-slate-400">{employee.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-bold">{employee.performance}%</span>
                      </div>
                      <p className="text-xs text-green-400">Excellent</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Salary Overview */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Salary Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-2">Total Monthly Payroll</p>
                <p className="text-3xl font-bold text-white mb-1">
                  ₹{employees.reduce((sum, emp) => sum + emp.salary, 0).toLocaleString()}
                </p>
                <p className="text-sm text-green-400">Active employees</p>
              </div>
              <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-2">Average Salary</p>
                <p className="text-3xl font-bold text-white mb-1">
                  ₹{Math.round(employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length).toLocaleString()}
                </p>
                <p className="text-sm text-blue-400">Per employee</p>
              </div>
              <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-2">Highest Salary</p>
                <p className="text-3xl font-bold text-white mb-1">
                  ₹{Math.max(...employees.map(e => e.salary)).toLocaleString()}
                </p>
                <p className="text-sm text-purple-400">Store Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
