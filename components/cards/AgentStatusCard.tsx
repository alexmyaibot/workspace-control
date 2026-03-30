'use client'

import { useState } from 'react'
import { Card } from '../Card'

const AGENTS = [
  {
    id: 'alex',
    name: 'Alex',
    emoji: '🤖',
    role: 'CTO / Main Agent',
    status: 'active',
    workspace: 'main',
    model: 'qwen3.5:9b',
    description: 'Oversees all operations, delegates to subagents'
  },
  {
    id: 'jade',
    name: 'Jade',
    emoji: '💆',
    role: 'HD Skinn Manager',
    status: 'active',
    workspace: 'workspace-hd-skinn',
    model: 'gemma3:4b',
    description: 'Esthetician business operations'
  },
  {
    id: 'clips',
    name: 'Clips',
    emoji: '🎬',
    role: 'TikTok Director',
    status: 'active',
    workspace: 'workspace-clips',
    model: 'phi4-mini',
    description: 'Content strategy & creation'
  },
  {
    id: 'polish',
    name: 'Polish',
    emoji: '💅',
    role: 'Nails by Avery',
    status: 'ready',
    workspace: 'workspace-polish',
    model: 'gemma3:4b',
    description: 'Nail salon business (Avery)'
  },
  {
    id: 'maker',
    name: 'Maker',
    emoji: '🖨️',
    role: '3D Printing',
    status: 'active',
    workspace: 'workspace-maker',
    model: 'qwen3.5:9b',
    description: 'That\'s God Etsy shop'
  },
  {
    id: 'maestro',
    name: 'Maestro',
    emoji: '🎵',
    role: 'Music Leader',
    status: 'ready',
    workspace: 'workspace-maestro',
    model: 'qwen3.5:9b',
    description: 'LDS music direction'
  },
  {
    id: 'lexicon',
    name: 'Lexicon',
    emoji: '📖',
    role: 'Archive & Search',
    status: 'active',
    workspace: 'workspace-archive',
    model: 'qwen3.5:9b',
    description: '6TB archive indexing and semantic search'
  }
]

export function AgentStatusCard() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)

  const agent = selectedAgent ? AGENTS.find(a => a.id === selectedAgent) : null

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 col-span-full">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🤖</span>
        <h2 className="text-xl font-bold text-white">Agent Control Center</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {AGENTS.map(a => (
          <button
            key={a.id}
            onClick={() => setSelectedAgent(selectedAgent === a.id ? null : a.id)}
            className={`p-3 rounded-lg transition-all ${
              selectedAgent === a.id
                ? 'bg-blue-600 ring-2 ring-blue-400'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <div className="text-2xl mb-1">{a.emoji}</div>
            <div className="text-sm font-semibold text-white">{a.name}</div>
            <div className={`text-xs ${
              a.status === 'active' ? 'text-green-400' : 'text-yellow-400'
            }`}>
              {a.status}
            </div>
          </button>
        ))}
      </div>

      {agent && (
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                {agent.emoji} {agent.name}
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400">Role:</span>
                  <span className="text-white ml-2">{agent.role}</span>
                </div>
                <div>
                  <span className="text-gray-400">Status:</span>
                  <span className={`ml-2 ${
                    agent.status === 'active' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {agent.status.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Workspace:</span>
                  <span className="text-white ml-2 font-mono text-xs">{agent.workspace}</span>
                </div>
                <div>
                  <span className="text-gray-400">Model:</span>
                  <span className="text-white ml-2 font-mono text-xs">{agent.model}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Description</h4>
              <p className="text-sm text-gray-300 mb-4">{agent.description}</p>
              
              <div className="space-y-2">
                <a
                  href={`/agents/${agent.id}`}
                  className="block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg text-center transition-all"
                >
                  View Details
                </a>
                <a
                  href={`/agents/${agent.id}/logs`}
                  className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold rounded-lg text-center transition-all"
                >
                  View Logs
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 p-3 bg-gray-900 rounded-lg border border-gray-700 text-sm text-gray-400">
        <strong>Total Agents:</strong> {AGENTS.length} | 
        <strong className="ml-3">Active:</strong> {AGENTS.filter(a => a.status === 'active').length} |
        <strong className="ml-3">Ready:</strong> {AGENTS.filter(a => a.status === 'ready').length}
      </div>
    </div>
  )
}
