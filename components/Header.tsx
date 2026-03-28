'use client'

import { useState } from 'react'

export function Header() {
  const handleLogout = () => {
    localStorage.removeItem('mission-control-auth')
    window.location.reload()
  }

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Mission Control</h1>
          <p className="text-gray-400 mt-1">Dashboard & Control Center</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
