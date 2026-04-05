'use client'

import { useState } from 'react'

type AgentId = 'jade' | 'clips' | 'polish' | 'maker' | 'maestro' | 'lexicon' | 'gamemaster' | 'health' | 'ascent' | 'scholar'

interface Agent {
  id: AgentId
  name: string
  emoji: string
  workspace: string
  model: string
  status: 'Active' | 'Ready' | 'Connected' | 'Offline' | 'Live'
}

const agents: Agent[] = [
  { id: 'jade', name: 'Jade', emoji: '💆', workspace: 'HD Skinn', model: 'qwen3.5:9b', status: 'Active' },
  { id: 'clips', name: 'Clips', emoji: '🎬', workspace: 'TikTok', model: 'gemma4:e4b', status: 'Active' },
  { id: 'polish', name: 'Polish', emoji: '💅', workspace: 'Nails by Avery', model: 'qwen3.5:9b', status: 'Ready' },
  { id: 'maker', name: 'Maker', emoji: '🖨️', workspace: '3D Printing', model: 'qwen3.5:9b', status: 'Active' },
  { id: 'maestro', name: 'Maestro', emoji: '🎵', workspace: 'LDS Music', model: 'qwen3.5:9b', status: 'Ready' },
  { id: 'lexicon', name: 'Lexicon', emoji: '📖', workspace: 'Archive', model: 'gemma4:e4b', status: 'Active' },
  { id: 'gamemaster', name: 'GameMaster', emoji: '🎮', workspace: 'Games', model: 'qwen3.5:9b', status: 'Ready' },
  { id: 'health', name: 'Health', emoji: '💚', workspace: 'Health Tracker', model: 'data-sync', status: 'Connected' },
  { id: 'ascent', name: 'Ascent', emoji: '🧗', workspace: 'Climbing Tracker', model: 'Next.js+Supabase', status: 'Live' },
  { id: 'scholar', name: 'Scholar', emoji: '📚', workspace: 'LDS Conference', model: 'Claude+Whisper', status: 'Active' },
]

interface AgentSidebarProps {
  selectedAgent: AgentId | null
  onSelectAgent: (agentId: AgentId) => void
  isOpen: boolean
  onToggle: () => void
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return '🟢'
    case 'Ready': return '🟡'
    case 'Connected': return '🔵'
    case 'Live': return '🟢'
    case 'Offline': return '🔴'
    default: return '⚪'
  }
}

const getStatusBgClass = (status: string) => {
  switch (status) {
    case 'Active':
    case 'Live': return 'bg-green-900 text-green-200'
    case 'Ready': return 'bg-yellow-900 text-yellow-200'
    case 'Connected': return 'bg-blue-900 text-blue-200'
    case 'Offline': return 'bg-red-900 text-red-200'
    default: return 'bg-gray-700 text-gray-200'
  }
}

export function AgentSidebar({ selectedAgent, onSelectAgent, isOpen, onToggle }: AgentSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.workspace.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleRefresh = () => {
    setLastUpdated(new Date())
    // Trigger status refresh from parent
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed md:hidden top-20 left-4 z-40 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-64 bg-gray-900 border-r border-gray-700 transition-transform duration-300 z-40 md:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:w-80 overflow-y-auto`}
        style={{ marginTop: '4rem' }}
      >
        <div className="p-4 space-y-4">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Status Header */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <button
              onClick={handleRefresh}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ↻
            </button>
          </div>

          {/* Agent List */}
          <div className="space-y-2">
            {filteredAgents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => {
                  onSelectAgent(agent.id)
                  if (window.innerWidth < 768) onToggle() // Close on mobile after selection
                }}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedAgent === agent.id
                    ? 'bg-blue-900 border-blue-500 ring-2 ring-blue-400'
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{agent.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white text-sm truncate">{agent.name}</h3>
                      <span className="text-lg flex-shrink-0">{getStatusColor(agent.status)}</span>
                    </div>
                    <p className="text-gray-400 text-xs truncate">{agent.workspace}</p>
                    <div className={`mt-1 inline-block px-2 py-0.5 rounded text-xs font-semibold ${getStatusBgClass(agent.status)}`}>
                      {agent.status}
                    </div>
                  </div>
                </div>
              </button>
            ))}
            {filteredAgents.length === 0 && (
              <p className="text-center text-gray-500 text-sm py-4">No agents found</p>
            )}
          </div>

          {/* Status Legend */}
          <div className="pt-4 border-t border-gray-700">
            <p className="text-xs font-semibold text-gray-400 mb-2">Status Legend</p>
            <div className="space-y-1 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span>🟢</span>
                <span>Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🟡</span>
                <span>Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔴</span>
                <span>Offline</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
