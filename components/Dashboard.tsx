'use client'

import { useEffect, useState } from 'react'
import { Header } from './Header'
import { CardGrid } from './CardGrid'
import { ArchiveCard as ArchiveSearchCard } from './cards/ArchiveCard'
import { HealthTrackerCard } from './cards/HealthTrackerCard'
import { JadeHDSkinnCard } from './cards/JadeHDSkinnCard'
import { TikTokClipsCard } from './cards/TikTokClipsCard'

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
        {/* CTO Hero Card - Alex on top (full width, larger) */}
        <div className="mb-12 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-lg border-2 border-blue-600 hover:border-blue-500 transition-all hover:shadow-2xl p-8">
          <div className="flex items-center gap-6 mb-6">
            <span className="text-6xl">🤖</span>
            <div>
              <h1 className="text-4xl font-bold text-white">Alex</h1>
              <p className="text-blue-200 text-lg">Chief Technology Officer</p>
            </div>
          </div>
          <div className="text-blue-100 mb-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-blue-300 text-sm font-semibold">Status</p>
              <p className="text-white text-lg font-bold">🟢 Active</p>
            </div>
            <div>
              <p className="text-blue-300 text-sm font-semibold">Model</p>
              <p className="text-white text-lg font-bold">qwen3.5:9b</p>
            </div>
            <div>
              <p className="text-blue-300 text-sm font-semibold">Agents Managed</p>
              <p className="text-white text-lg font-bold">8 Subagents</p>
            </div>
            <div>
              <p className="text-blue-300 text-sm font-semibold">Workspace</p>
              <p className="text-white text-lg font-bold">workspace-main</p>
            </div>
          </div>
          <p className="text-blue-100 text-base leading-relaxed">
            AI operations lead managing all subagents (Jade, Clips, Polish, Maker, Maestro, Lexicon, Game Master). 
            Handles infrastructure, automation, cron jobs, and system health. Runs nightly audits via Sentinel.
          </p>
        </div>

        {/* Subagent Cards Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Agent Operations</h2>
        </div>

        <CardGrid>
          <JadeHDSkinnCard />
          <TikTokClipsCard />
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💅</span>
              <h2 className="text-xl font-semibold text-white">Polish</h2>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="mb-3">Nails by Avery business management</p>
              <div className="space-y-2 text-xs">
                <div><span className="text-gray-400">Status:</span> <span className="text-yellow-400">Ready</span></div>
                <div><span className="text-gray-400">Owner:</span> <span className="text-white">Avery</span></div>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-semibold mt-4 block">View Details →</a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🖨️</span>
              <h2 className="text-xl font-semibold text-white">Maker</h2>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="mb-3">That's God 3D printing</p>
              <div className="space-y-2 text-xs">
                <div><span className="text-gray-400">Status:</span> <span className="text-green-400">Active</span></div>
                <div><span className="text-gray-400">API:</span> <span className="text-yellow-400">Pending Review</span></div>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-semibold mt-4 block">View Details →</a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎵</span>
              <h2 className="text-xl font-semibold text-white">Maestro</h2>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="mb-3">LDS music direction & hymn leadership</p>
              <div className="space-y-2 text-xs">
                <div><span className="text-gray-400">Status:</span> <span className="text-yellow-400">Ready</span></div>
                <div><span className="text-gray-400">Role:</span> <span className="text-white">Music Director</span></div>
                <div><span className="text-gray-400">Workspace:</span> <span className="text-white">workspace-maestro</span></div>
              </div>
              <div className="mt-4">
                <a href="https://willowaymedia.vercel.app/flipcharts/login.html" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">Flipchart Library →</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎮</span>
              <h2 className="text-xl font-semibold text-white">Game Master</h2>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="mb-3">Game design and Godot development</p>
              <div className="space-y-2 text-xs">
                <div><span className="text-gray-400">Status:</span> <span className="text-yellow-400">Ready</span></div>
                <div><span className="text-gray-400">Project:</span> <span className="text-white">Turntable & Microphone</span></div>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-semibold mt-4 block">View Details →</a>
            </div>
          </div>
          <ArchiveSearchCard />
          <HealthTrackerCard />
        </CardGrid>
      </main>
    </div>
  )
}
