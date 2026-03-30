'use client'

import { useEffect, useState } from 'react'
import { Header } from './Header'


export function Dashboard() {
  const [archiveStats, setArchiveStats] = useState({
    totalFiles: 0,
    lastIndexed: 'Never',
  })

  useEffect(() => {
    // Fetch archive stats from Supabase or local API
    // For now, using placeholder data
    setArchiveStats({
      totalFiles: 1250,
      lastIndexed: new Date().toLocaleDateString(),
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* CTO Card - Large (2x size) */}
        <div className="mb-8 col-span-2">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-lg border-2 border-blue-600 hover:border-blue-500 transition-all hover:shadow-2xl p-8 cursor-pointer group">
            <div className="flex items-center gap-6">
              <span className="text-6xl group-hover:scale-110 transition-transform">🤖</span>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white">Alex</h1>
                <p className="text-blue-200">Chief Technology Officer</p>
              </div>
              <div className="text-right">
                <p className="text-blue-300 text-sm">Managing</p>
                <p className="text-white text-3xl font-bold">8</p>
                <p className="text-blue-300 text-sm">Subagents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subagent Cards Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">Operations</h2>
        </div>

          {/* Jade - HD Skinn */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-pink-500 transition-all hover:shadow-lg p-4 cursor-pointer hover:bg-gray-750">
            <div className="text-center">
              <span className="text-3xl block mb-2">💆</span>
              <h3 className="font-bold text-white mb-1">Jade</h3>
              <p className="text-gray-400 text-xs mb-2">HD Skinn</p>
              <div className="text-green-400 text-xs font-semibold">Active</div>
            </div>
          </div>

          {/* Clips - TikTok */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg p-4 cursor-pointer hover:bg-gray-750">
            <div className="text-center">
              <span className="text-3xl block mb-2">🎬</span>
              <h3 className="font-bold text-white mb-1">Clips</h3>
              <p className="text-gray-400 text-xs mb-2">TikTok Director</p>
              <div className="text-green-400 text-xs font-semibold">Active</div>
            </div>
          </div>

          {/* Polish - Nails */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-red-500 transition-all hover:shadow-lg p-4 cursor-pointer hover:bg-gray-750">
            <div className="text-center">
              <span className="text-3xl block mb-2">💅</span>
              <h3 className="font-bold text-white mb-1">Polish</h3>
              <p className="text-gray-400 text-xs mb-2">Nails by Avery</p>
              <div className="text-yellow-400 text-xs font-semibold">Ready</div>
            </div>
          </div>

          {/* Maker - 3D */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-orange-500 transition-all hover:shadow-lg p-4 cursor-pointer hover:bg-gray-750">
            <div className="text-center">
              <span className="text-3xl block mb-2">🖨️</span>
              <h3 className="font-bold text-white mb-1">Maker</h3>
              <p className="text-gray-400 text-xs mb-2">3D Printing</p>
              <div className="text-green-400 text-xs font-semibold">Active</div>
            </div>
          </div>

          {/* Maestro - Music */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg p-4 cursor-pointer hover:bg-gray-750">
            <div className="text-center">
              <span className="text-3xl block mb-2">🎵</span>
              <h3 className="font-bold text-white mb-1">Maestro</h3>
              <p className="text-gray-400 text-xs mb-2">Music Leader</p>
              <div className="text-yellow-400 text-xs font-semibold">Ready</div>
            </div>
          </div>

          {/* Lexicon - Archive */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all hover:shadow-lg p-4 cursor-pointer hover:bg-gray-750">
            <div className="text-center">
              <span className="text-3xl block mb-2">📖</span>
              <h3 className="font-bold text-white mb-1">Lexicon</h3>
              <p className="text-gray-400 text-xs mb-2">Archive Search</p>
              <div className="text-green-400 text-xs font-semibold">Active</div>
            </div>
          </div>

          {/* Game Master - Games */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500 transition-all hover:shadow-lg p-4 cursor-pointer hover:bg-gray-750">
            <div className="text-center">
              <span className="text-3xl block mb-2">🎮</span>
              <h3 className="font-bold text-white mb-1">Game Master</h3>
              <p className="text-gray-400 text-xs mb-2">Game Design</p>
              <div className="text-yellow-400 text-xs font-semibold">Ready</div>
            </div>
          </div>

          {/* Health Tracker */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500 transition-all hover:shadow-lg p-4 cursor-pointer hover:bg-gray-750">
            <div className="text-center">
              <span className="text-3xl block mb-2">💚</span>
              <h3 className="font-bold text-white mb-1">Health</h3>
              <p className="text-gray-400 text-xs mb-2">Tracker</p>
              <div className="text-green-400 text-xs font-semibold">Connected</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
