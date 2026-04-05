'use client'

import { useEffect, useState } from 'react'
import { Header } from './Header'
import { AgentSidebar } from './AgentSidebar'
import dynamic from 'next/dynamic'

type AgentId = 'jade' | 'clips' | 'polish' | 'maker' | 'maestro' | 'lexicon' | 'gamemaster' | 'health' | 'ascent'

const AgentNetworkDiagram = dynamic(() => import('./AgentNetworkDiagram').then(mod => mod.AgentNetworkDiagram), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-gray-400">Loading network diagram...</div>
})

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
    model: 'qwen3.5:9b (Ollama)',
    tasks: ['Schedule client consultations', 'Update pricing packages', 'Create social media content'],
  },
  clips: {
    name: 'Clips',
    emoji: '🎬',
    role: 'TikTok Content Director',
    description: 'Creates viral TikTok content, analyzes trends, and manages short-form video strategy.',
    workspace: 'workspace-clips',
    status: 'Active',
    model: 'gemma4:e4b (Ollama)',
    tasks: ['Produce Ghost Elephant video', 'Analyze trending audio', 'Plan content calendar'],
    stats: {
      'Followers': '16K',
      'Total Views': '500K+',
      'Videos Posted': 30,
    },
  },
  polish: {
    name: 'Polish',
    emoji: '💅',
    role: 'Nails by Avery Manager',
    description: 'Manages nail salon services, client appointments, and business operations for Nails by Avery.',
    workspace: 'workspace-polish',
    status: 'Ready',
    model: 'qwen3.5:9b (Ollama)',
    tasks: ['Finalize service menu', 'Set pricing structure', 'Create booking system'],
  },
  maker: {
    name: 'Maker',
    emoji: '🖨️',
    role: '3D Printing & Manufacturing',
    description: 'Manages That\'s God 3D printing projects, Etsy orders, and production workflow.',
    workspace: 'workspace-3d-printing',
    status: 'Active',
    model: 'qwen3.5:9b (Ollama)',
    tasks: ['Review pending Etsy orders', 'Optimize print settings', 'Update product photos'],
  },
  maestro: {
    name: 'Maestro',
    emoji: '🎵',
    role: 'LDS Music Leadership',
    description: 'Directs music for LDS services, manages hymn selections, and creates flipcharts for Primary lessons.',
    workspace: 'workspace-maestro',
    status: 'Ready',
    model: 'qwen3.5:9b (Ollama)',
    tasks: ['Plan next month\'s hymns', 'Create new flipcharts', 'Prepare practice materials'],
    link: 'https://flipcharts.vercel.app/login.html',
    linkText: 'Flipchart Library',
  },
  lexicon: {
    name: 'Lexicon',
    emoji: '📖',
    role: 'Archive & Search Manager',
    description: 'Indexes and searches your 6TB personal archive using semantic and full-text search.',
    workspace: 'workspace-archive',
    status: 'Active',
    model: 'gemma4:e4b (Ollama)',
    tasks: ['Continue 6TB archive indexing', 'Test semantic search', 'Optimize search performance'],
  },
  gamemaster: {
    name: 'Game Master',
    emoji: '🎮',
    role: 'Game Design & Development',
    description: 'Designs games and manages Godot game development projects (Turntable & Microphone game).',
    workspace: 'workspace-game-master',
    status: 'Ready',
    model: 'qwen3.5:9b (Ollama)',
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
    tasks: ['Sync latest health data from Health app', 'Set up HealthKit API for real-time updates'],
    stats: {},
  },
  ascent: {
    name: 'Ascent',
    emoji: '🧗',
    role: 'Owen\'s Climbing Tracker',
    description: 'Climbing time tracker app for Owen. MVP built with Next.js + Supabase. Records route difficulty, time, and photos.',
    workspace: 'ascent',
    status: 'Live',
    model: 'Next.js + Supabase',
    tasks: ['Track climb times and difficulty', 'Capture photos per climb', 'View climb history'],
    stats: {
      'Status': 'MVP Complete',
      'Backend': 'Supabase',
      'Frontend': 'Next.js 14',
      'Features': 'Timer, Logging, History',
    },
    link: 'https://ascent-omega.vercel.app',
    linkText: 'Ascent Tracker',
  },
}

export function Dashboard() {
  const [expandedAgent, setExpandedAgent] = useState<AgentId | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [healthData, setHealthData] = useState({
    current_lbs: 210,
    start_lbs: 220,
    bmi: 28.3,
    weight_loss: 10,
  })

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const response = await fetch('/api/health')
        if (response.ok) {
          const data = await response.json()
          setHealthData({
            current_lbs: data.weight?.current_lbs || 210,
            start_lbs: data.weight?.start_lbs || 220,
            bmi: data.stats?.bmi || 28.3,
            weight_loss: data.stats?.weight_loss || 10,
          })
        }
      } catch (e) {
        console.log('Using default health data')
      }
    }
    fetchHealthData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Mobile Responsive */}
        <AgentSidebar
          selectedAgent={expandedAgent}
          onSelectAgent={setExpandedAgent}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Right Content Area - Network Diagram + Details */}
        <main className="flex-1 overflow-y-auto">
          <div className="h-full flex flex-col">
            {/* Network Diagram (takes up most space) */}
            <div className="flex-1 border-b border-gray-700">
              <AgentNetworkDiagram
                selectedAgent={expandedAgent}
                onSelectAgent={setExpandedAgent}
              />
            </div>

            {/* Agent Details Panel (bottom, collapsible) */}
            {expandedAgent && (
              <div className="max-h-80 overflow-y-auto bg-gray-800 border-t border-gray-700 p-6">
                {(() => {
                  const agent = agentDetails[expandedAgent]
                  return (
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{agent.emoji}</span>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-white">{agent.name}</h2>
                          <p className="text-blue-300 text-sm">{agent.role}</p>
                        </div>
                        <button
                          onClick={() => setExpandedAgent(null)}
                          className="text-gray-400 hover:text-white text-lg"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="text-gray-300 text-sm mb-4">{agent.description}</p>

                      <div className="grid grid-cols-3 gap-3 text-sm mb-4">
                        <div>
                          <p className="text-gray-400 text-xs font-semibold">Status</p>
                          <p className={`${agent.status === 'Active' ? 'text-green-400' : agent.status === 'Ready' ? 'text-yellow-400' : 'text-blue-400'}`}>
                            {agent.status}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs font-semibold">Model</p>
                          <p className="text-white text-xs">{agent.model}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs font-semibold">Workspace</p>
                          <p className="text-white text-xs font-mono">{agent.workspace}</p>
                        </div>
                      </div>

                      {agent.link && (
                        <a
                          href={agent.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded text-sm transition-colors"
                        >
                          → {agent.linkText}
                        </a>
                      )}
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
