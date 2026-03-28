'use client'

import { useState, useEffect } from 'react'
import { Dashboard } from '@/components/Dashboard'
import { LoginModal } from '@/components/LoginModal'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem('mission-control-auth')
    setIsAuthenticated(auth === 'true')
    setIsLoading(false)
  }, [])

  const handleLogin = (password: string) => {
    if (password === 'cc3dxyz') {
      localStorage.setItem('mission-control-auth', 'true')
      setIsAuthenticated(true)
    }
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-gray-400">Loading...</div>
    </div>
  }

  if (!isAuthenticated) {
    return <LoginModal onLogin={handleLogin} />
  }

  return <Dashboard />
}
