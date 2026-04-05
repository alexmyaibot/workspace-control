'use client'

import { useEffect, useState } from 'react'
import { Header } from './Header'
import { AgentSidebar } from './AgentSidebar'

type AgentId = 'jade' | 'clips' | 'polish' | 'maker' | 'maestro' | 'lexicon' | 'gamemaster' | 'health' | 'ascent' | 'scholar'

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
    tasks: ['Schedule consultations', 'Manage pricing', 'Create social content'],
    stats: {
      'Services': '5 offered',
      'Status': 'Operational',
    },
  },
  clips: {
    name: 'Clips',
    emoji: '🎬',
    role: 'TikTok Content Director',
    description: 'Creates viral TikTok content, analyzes trends, and manages short-form video strategy.',
    workspace: 'workspace-clips',
    status: 'Active',
    model: 'gemma4:e4b (Ollama)',
    tasks: ['Post daily TikTok videos', 'Manage content calendar', 'Generate voiceovers'],
    stats: {
      'Followers': '16K',
      'Total Views': '500K+',
      'Videos Posted': 32,
      'Last Posted': 'Apr 5 @ 6 PM',
      'Status': '2 videos scheduled',
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
    tasks: ['Launch service menu', 'Implement booking system', 'Set pricing'],
    stats: {
      'Services': 'Menu pending',
      'Status': 'Pre-launch',
    },
  },
  maker: {
    name: 'Maker',
    emoji: '🖨️',
    role: '3D Printing & Manufacturing',
    description: 'Manages That\'s God 3D printing projects, Etsy orders, and production workflow.',
    workspace: 'workspace-3d-printing',
    status: 'Active',
    model: 'qwen3.5:9b (Ollama)',
    tasks: ['Process Etsy orders', 'Optimize print quality', 'Update product listings'],
    stats: {
      'Orders': 'In queue',
      'Status': 'Operational',
    },
  },
  maestro: {
    name: 'Maestro',
    emoji: '🎵',
    role: 'LDS Music Leadership',
    description: 'Directs music for LDS services, manages hymn selections, and creates flipcharts for Primary lessons.',
    workspace: 'workspace-maestro',
    status: 'Active',
    model: 'qwen3.5:9b (Ollama)',
    tasks: ['Manage flipchart library', 'Plan hymn selections', 'Create practice materials'],
    stats: {
      'Flipcharts': '13 active',
      'Status': 'Library restored',
      'Access': 'Live on Vercel',
    },
    link: 'https://flipcharts.vercel.app/login.html',
    linkText: 'Flipchart Library',
  },
  lexicon: {
    name: 'Lexicon',
    emoji: '📖',
    role: 'Archive & Search Manager',
    description: 'Indexes and searches your 6TB personal archive using semantic and full-text search.',
    workspace: 'workspace-archive',
    status: 'Indexing',
    model: 'gemma4:e4b (Ollama) + OpenAI Embeddings',
    tasks: ['Phase 1: Metadata indexing (in progress)', 'Phase 2: Generate video embeddings', 'Launch search dashboard'],
    stats: {
      'Phase 1': '~8K files/min (metadata)',
      'Phase 2': 'Queued for embeddings',
      'Total Files': '~417K expected',
      'ETA': 'Complete by Apr 5 8 PM',
    },
  },
  gamemaster: {
    name: 'Game Master',
    emoji: '🎮',
    role: 'Game Design & Development',
    description: 'Designs games and manages Godot game development projects (Turntable & Microphone game).',
    workspace: 'workspace-game-master',
    status: 'Ready',
    model: 'qwen3.5:9b (Ollama)',
    tasks: ['Define game mechanics', 'Design characters', 'Build prototype'],
    stats: {
      'Projects': '1 in design',
      'Status': 'Pre-development',
    },
  },
  health: {
    name: 'Health Tracker',
    emoji: '💚',
    role: 'Health Data Dashboard',
    description: 'Displays and tracks health metrics from your connected health app.',
    workspace: 'health-tracker',
    status: 'Connected',
    model: 'data-sync',
    tasks: ['Sync latest health data', 'Monitor wellness trends', 'Update metrics'],
    stats: {
      'Current Weight': '210 lbs',
      'Weight Loss': '10 lbs',
      'BMI': '28.3',
      'Status': 'Connected',
    },
  },
  ascent: {
    name: 'Ascent',
    emoji: '🧗',
    role: 'Owen\'s Climbing Tracker',
    description: 'Climbing time tracker app for Owen. MVP built with Next.js + Supabase. Records route difficulty, time, and photos.',
    workspace: 'ascent',
    status: 'Live',
    model: 'Next.js + Supabase',
    tasks: ['Enable climbing logging', 'Build photo capture feature', 'Create progress graphs'],
    stats: {
      'Status': 'MVP Complete - Password Auth',
      'Backend': 'Supabase',
      'Frontend': 'Next.js 14',
      'Features': 'Timer, Logging, History',
      'Auth': 'Simple password (cc3dxyz)',
    },
    link: 'https://ascent-omega.vercel.app',
    linkText: 'Ascent Tracker',
  },
  scholar: {
    name: 'Scholar',
    emoji: '📚',
    role: 'LDS General Conference Researcher',
    description: 'Scrapes, transcribes, and analyzes LDS General Conference talks. Auto-monitors for new transcripts, generates AI summaries, and tracks trends over time.',
    workspace: 'workspace-scholar',
    status: 'Launching',
    model: 'Claude + Whisper + Supabase',
    tasks: ['Monitor conference websites daily', 'Transcribe audio recordings', 'Generate talk summaries', 'Track themes & trends'],
    stats: {
      'Current Conference': 'April 2026',
      'Scraper': 'Auto-monitoring',
      'Database': 'Supabase',
      'Focus': 'Summaries + Trends',
    },
    link: 'https://scholar.vercel.app',
    linkText: 'Scholar Dashboard',
  },
}

export function Dashboard() {
  const [expandedAgent, setExpandedAgent] = useState<AgentId | null>('clips')
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
        {/* Left Sidebar - Agent List */}
        <AgentSidebar
          selectedAgent={expandedAgent}
          onSelectAgent={setExpandedAgent}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Right Content Area - Agent Details */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* AlexAI CEO Header (Top Layer) - Compact */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-lg border border-blue-600 p-3 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <div className="flex-1">
                <p className="text-blue-200 text-sm"><span className="font-bold text-white">Alex</span> — CEO & Mission Control</p>
              </div>
            </div>
          </div>

          {/* Sentinel CTO Layer (Oversight) - Compact */}
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 rounded-lg border border-purple-600 p-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div className="flex-1">
                <p className="text-purple-200 text-sm"><span className="font-bold text-white">Sentinel</span> — CTO • Monitors 9 subagents • Real-time oversight</p>
              </div>
            </div>
          </div>

          {/* Subagents Layer */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">🚀 SUBAGENTS</h3>
          </div>

          {expandedAgent ? (
            (() => {
              const agent = agentDetails[expandedAgent]
              return (
                <div className="max-w-4xl">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <span className="text-7xl">{agent.emoji}</span>
                    <div className="flex-1">
                      <h1 className="text-4xl font-bold text-white mb-2">{agent.name}</h1>
                      <p className="text-xl text-blue-300 mb-4">{agent.role}</p>
                      <p className="text-gray-400">{agent.description}</p>
                    </div>
                  </div>

                  {/* Key Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <p className="text-gray-400 text-sm font-semibold mb-2">Status</p>
                      <p className={`text-lg font-bold ${
                        agent.status === 'Active' ? 'text-green-400' :
                        agent.status === 'Ready' ? 'text-yellow-400' :
                        agent.status === 'Live' ? 'text-emerald-400' :
                        'text-blue-400'
                      }`}>
                        {agent.status}
                      </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <p className="text-gray-400 text-sm font-semibold mb-2">Model</p>
                      <p className="text-white font-mono text-sm">{agent.model}</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <p className="text-gray-400 text-sm font-semibold mb-2">Workspace</p>
                      <p className="text-white font-mono text-xs break-all">{agent.workspace}</p>
                    </div>
                    {agent.link && (
                      <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-400 text-sm font-semibold mb-2">Link</p>
                        <a
                          href={agent.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline text-sm break-all"
                        >
                          Open
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Tasks */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Tasks</h2>
                    <ul className="space-y-2">
                      {agent.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-blue-400 mt-1">→</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  {agent.stats && Object.keys(agent.stats).length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Stats</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(agent.stats).map(([key, value]) => (
                          <div key={key} className="bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-400 text-sm font-semibold mb-2">{key}</p>
                            <p className="text-white font-bold text-lg">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Health Data Special Case */}
                  {expandedAgent === 'health' && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Health Metrics</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-400 text-sm font-semibold mb-2">Current Weight</p>
                          <p className="text-white font-bold text-lg">{healthData.current_lbs} lbs</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-400 text-sm font-semibold mb-2">Starting Weight</p>
                          <p className="text-white font-bold text-lg">{healthData.start_lbs} lbs</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-400 text-sm font-semibold mb-2">Weight Loss</p>
                          <p className="text-green-400 font-bold text-lg">{healthData.weight_loss} lbs ✓</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-400 text-sm font-semibold mb-2">BMI</p>
                          <p className="text-white font-bold text-lg">{healthData.bmi}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })()
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 text-lg">Select an agent from the sidebar to view details</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
