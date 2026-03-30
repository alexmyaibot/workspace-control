'use client'

import { useEffect, useState } from 'react'
import { Header } from './Header'

type AgentId = 'jade' | 'clips' | 'polish' | 'maker' | 'maestro' | 'lexicon' | 'gamemaster' | 'health'

const agentDetails: Record<AgentId, { 
  name: string
  emoji: string
  role: string
  description: string
  workspace: string
  status: string
  model: string
  tasks: string[]
  stats?: Record<string, string | number>
  link?: string
  linkText?: string
}> = {
  jade: {
    name: 'Jade',
    emoji: '💆',
    role: 'HD Skinn Business Manager',
    description: 'Manages esthetician services, client bookings, pricing, and business growth for HD Skinn.',
    workspace: 'workspace-hd-skinn',
    status: 'Active',
    model: 'gemma3:4b',
    tasks: ['Schedule client consultations', 'Update pricing packages', 'Create social media content'],
  },
  clips: {
    name: 'Clips',
    emoji: '🎬',
    role: 'TikTok Content Director',
    description: 'Creates viral TikTok content, analyzes trends, and manages short-form video strategy.',
    workspace: 'workspace-clips',
    status: 'Active',
    model: 'phi4-mini',
    tasks: ['Produce Ghost Elephant video', 'Analyze trending audio', 'Plan content calendar'],
    stats: {
      'Followers': '12.4K',
      'Total Views': '487.3K',
      'Videos Posted': 24,
      'Avg Views/Video': '20.3K',
      'Engagement Rate': '12.3%',
      'Avg Likes': '2.4K',
      'Avg Comments': '340',
      'Avg Shares': '180',
      'Best Video Views': '85.2K',
      'Best Video Likes': '8.1K',
      'Growth (30d)': '+3.2K followers',
      'Top Sound Used': '#trending-audio',
    },
  },
  polish: {
    name: 'Polish',
    emoji: '💅',
    role: 'Nails by Avery Manager',
    description: 'Manages nail salon services, client appointments, and business operations for Nails by Avery.',
    workspace: 'workspace-polish',
    status: 'Ready',
    model: 'gemma3:4b',
    tasks: ['Finalize service menu', 'Set pricing structure', 'Create booking system'],
  },
  maker: {
    name: 'Maker',
    emoji: '🖨️',
    role: '3D Printing & Manufacturing',
    description: 'Manages That\'s God 3D printing projects, Etsy orders, and production workflow.',
    workspace: 'workspace-3d-printing',
    status: 'Active',
    model: 'qwen3.5:9b',
    tasks: ['Review pending Etsy orders', 'Optimize print settings', 'Update product photos'],
  },
  maestro: {
    name: 'Maestro',
    emoji: '🎵',
    role: 'LDS Music Leadership',
    description: 'Directs music for LDS services, manages hymn selections, and creates flipcharts for Primary lessons.',
    workspace: 'workspace-maestro',
    status: 'Ready',
    model: 'qwen3.5:9b',
    tasks: ['Plan next month\'s hymns', 'Create new flipcharts', 'Prepare practice materials'],
    link: 'https://willowaymedia.vercel.app/flipcharts/login.html',
    linkText: 'Flipchart Library',
  },
  lexicon: {
    name: 'Lexicon',
    emoji: '📖',
    role: 'Archive & Search Manager',
    description: 'Indexes and searches your 6TB personal archive using semantic and full-text search.',
    workspace: 'workspace-archive',
    status: 'Active',
    model: 'qwen3.5:9b',
    tasks: ['Continue 6TB archive indexing', 'Test semantic search', 'Optimize search performance'],
  },
  gamemaster: {
    name: 'Game Master',
    emoji: '🎮',
    role: 'Game Design & Development',
    description: 'Designs games and manages Godot game development projects (Turntable & Microphone game).',
    workspace: 'workspace-game-master',
    status: 'Ready',
    model: 'gemma3:4b',
    tasks: ['Define game mechanics', 'Create character designs', 'Build first prototype'],
  },
  health: {
    name: 'Health Tracker',
    emoji: '💚',
    role: 'Health Data Dashboard',
    description: 'Displays and tracks health metrics from your connected health app.',
    workspace: 'health-tracker',
    status: 'Connected',
    model: 'data-sync',
    tasks: ['Sync latest health data', 'Generate weekly report'],
    stats: {
      'Water Intake': '40oz',
      'Steps Today': '8,247',
      'Calories Burned': '2,340 cal',
      'Heart Rate (Avg)': '72 bpm',
      'Sleep Last Night': '7h 22m',
      'Sleep Quality': '82%',
      'Workouts This Week': '4',
      'Workout Minutes': '285 min',
      'Distance Walked': '3.2 mi',
      'Active Minutes': '45 min',
      'Weight': '185 lbs',
      'BMI': '24.8',
    },
  },
}

export function Dashboard() {
  const [expandedAgent, setExpandedAgent] = useState<AgentId | null>(null)
  const [tokenStats] = useState({
    today: 45230,
    week: 287450,
    month: 1204560,
    cost: '$12.40',
  })

  useEffect(() => {
    // Token stats would be fetched from your cost tracking API
    // For now using placeholder data
  }, [])

  const handleCardClick = (agentId: AgentId) => {
    setExpandedAgent(expandedAgent === agentId ? null : agentId)
    // Scroll to details section
    setTimeout(() => {
      const element = document.getElementById(`details-${agentId}`)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

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

        {/* Token Cost Tracker */}
        <div className="mb-8 bg-gray-800 rounded-lg border border-gray-700 p-4">
          <h2 className="text-sm font-semibold text-gray-400 mb-3">Token Cost Tracker</h2>
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-1">Today</p>
              <p className="text-white font-bold">{tokenStats.today.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-1">This Week</p>
              <p className="text-white font-bold">{tokenStats.week.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-1">This Month</p>
              <p className="text-white font-bold">{tokenStats.month.toLocaleString()}</p>
            </div>
            <div className="text-center bg-blue-900 rounded-lg p-2">
              <p className="text-blue-300 text-xs mb-1">Est. Cost</p>
              <p className="text-blue-100 font-bold text-lg">{tokenStats.cost}</p>
            </div>
          </div>
        </div>

        {/* Subagent Cards Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">Operations</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {(['clips', 'maker', 'maestro', 'lexicon', 'gamemaster', 'health', 'jade', 'polish'] as AgentId[]).map((agentId) => {
            const agent = agentDetails[agentId]
            const borderColors: Record<AgentId, string> = {
              jade: 'hover:border-pink-500',
              clips: 'hover:border-purple-500',
              polish: 'hover:border-red-500',
              maker: 'hover:border-orange-500',
              maestro: 'hover:border-blue-500',
              lexicon: 'hover:border-cyan-500',
              gamemaster: 'hover:border-green-500',
              health: 'hover:border-green-500',
            }
            
            return (
              <button
                key={agentId}
                onClick={() => handleCardClick(agentId)}
                className={`bg-gray-800 rounded-lg border border-gray-700 ${borderColors[agentId]} transition-all hover:shadow-lg p-3 cursor-pointer hover:bg-gray-750 active:scale-95 ${expandedAgent === agentId ? 'ring-2 ring-blue-500' : ''}`}
              >
                <div className="text-center">
                  <span className="text-2xl block mb-1">{agent.emoji}</span>
                  <h3 className="font-bold text-white text-sm mb-1">{agent.name}</h3>
                  <p className="text-gray-400 text-xs mb-2">{agent.role.split(' ')[0]}</p>
                  <div className={`text-xs font-semibold mb-2 ${agent.status === 'Active' ? 'text-green-400' : agent.status === 'Ready' ? 'text-yellow-400' : 'text-blue-400'}`}>
                    {agent.status}
                  </div>
                  <div className="text-blue-400 text-xs">Tap to see details</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Details Sections */}
        <div className="mt-12 space-y-8">
          {(['clips', 'maker', 'maestro', 'lexicon', 'gamemaster', 'health', 'jade', 'polish'] as AgentId[]).map((agentId) => {
            const agent = agentDetails[agentId]
            if (expandedAgent !== agentId) return null
            
            return (
              <div
                key={`details-${agentId}`}
                id={`details-${agentId}`}
                className="bg-gray-800 rounded-lg border-2 border-blue-500 p-6 animate-in fade-in slide-in-from-top-4"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{agent.emoji}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{agent.name}</h2>
                    <p className="text-blue-300">{agent.role}</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p className="text-base leading-relaxed">{agent.description}</p>
                  
                  {/* Model & Status Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-gray-400 text-sm font-semibold">Status</p>
                      <p className={`text-lg font-bold ${agent.status === 'Active' ? 'text-green-400' : agent.status === 'Ready' ? 'text-yellow-400' : 'text-blue-400'}`}>
                        {agent.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-semibold">Model</p>
                      <p className="text-white font-mono text-sm">{agent.model}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-semibold">Workspace</p>
                      <p className="text-white font-mono text-xs">{agent.workspace}</p>
                    </div>
                  </div>

                  {/* Upcoming Tasks */}
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm font-semibold mb-2">Upcoming Tasks</p>
                    <ul className="space-y-1">
                      {agent.tasks.map((task, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">→</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats (if available) */}
                  {agent.stats && (
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-gray-400 text-sm font-semibold mb-3">Stats</p>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(agent.stats).map(([key, value]) => (
                          <div key={key} className="bg-gray-750 rounded p-2">
                            <p className="text-gray-400 text-xs mb-1">{key}</p>
                            <p className="text-white font-bold">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* External Links */}
                  {agent.link && (
                    <div className="pt-4 border-t border-gray-700">
                      <a
                        href={agent.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors"
                      >
                        → {agent.linkText}
                      </a>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setExpandedAgent(null)}
                  className="mt-6 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  ← Close details
                </button>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
