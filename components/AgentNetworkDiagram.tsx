'use client'

import { useCallback, useMemo, useState, useEffect } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'

type AgentId = 'jade' | 'clips' | 'polish' | 'maker' | 'maestro' | 'lexicon' | 'gamemaster' | 'health' | 'ascent'

interface AgentNode {
  id: AgentId
  name: string
  emoji: string
  workspace: string
  model: string
  status: 'Active' | 'Ready' | 'Connected' | 'Offline' | 'Live'
}

const agents: AgentNode[] = [
  { id: 'jade', name: 'Jade', emoji: '💆', workspace: 'HD Skinn', model: 'qwen3.5:9b', status: 'Active' },
  { id: 'clips', name: 'Clips', emoji: '🎬', workspace: 'TikTok', model: 'gemma4:e4b', status: 'Active' },
  { id: 'polish', name: 'Polish', emoji: '💅', workspace: 'Nails by Avery', model: 'qwen3.5:9b', status: 'Ready' },
  { id: 'maker', name: 'Maker', emoji: '🖨️', workspace: '3D Printing', model: 'qwen3.5:9b', status: 'Active' },
  { id: 'maestro', name: 'Maestro', emoji: '🎵', workspace: 'LDS Music', model: 'qwen3.5:9b', status: 'Ready' },
  { id: 'lexicon', name: 'Lexicon', emoji: '📖', workspace: 'Archive', model: 'gemma4:e4b', status: 'Active' },
  { id: 'gamemaster', name: 'GameMaster', emoji: '🎮', workspace: 'Games', model: 'qwen3.5:9b', status: 'Ready' },
  { id: 'health', name: 'Health', emoji: '💚', workspace: 'Health Tracker', model: 'data-sync', status: 'Connected' },
  { id: 'ascent', name: 'Ascent', emoji: '🧗', workspace: 'Climbing Tracker', model: 'Next.js+Supabase', status: 'Live' },
]

// Define relationships between agents (who depends on/works with whom)
const relationships: [AgentId, AgentId][] = [
  ['clips', 'lexicon'],
  ['jade', 'clips'],
  ['polish', 'clips'],
  ['maker', 'lexicon'],
  ['maestro', 'clips'],
  ['gamemaster', 'maker'],
  ['health', 'jade'],
  ['ascent', 'health'],
]

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Active':
    case 'Live': return '#10b981' // green
    case 'Ready': return '#f59e0b' // amber
    case 'Connected': return '#3b82f6' // blue
    case 'Offline': return '#ef4444' // red
    default: return '#6b7280' // gray
  }
}

interface AgentNetworkDiagramProps {
  selectedAgent: AgentId | null
  onSelectAgent: (agentId: AgentId) => void
}

export function AgentNetworkDiagram({ selectedAgent, onSelectAgent }: AgentNetworkDiagramProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [hoveredNode, setHoveredNode] = useState<AgentId | null>(null)

  // Initialize nodes and edges on mount
  useEffect(() => {
    const initialNodes: Node[] = agents.map((agent, index) => {
      const angle = (index / agents.length) * Math.PI * 2
      const radius = 300
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      return {
        id: agent.id,
        data: {
          label: agent.emoji,
          name: agent.name,
          workspace: agent.workspace,
          model: agent.model,
          status: agent.status,
        },
        position: { x, y },
        style: {
          background: getStatusColor(agent.status),
          border: selectedAgent === agent.id ? '3px solid #60a5fa' : '2px solid #1f2937',
          borderRadius: '50%',
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 32,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: selectedAgent === agent.id ? '0 0 20px rgba(96, 165, 250, 0.5)' : '0 2px 8px rgba(0, 0, 0, 0.3)',
        },
      }
    })

    const initialEdges: Edge[] = relationships.map(([source, target]) => ({
      id: `${source}-${target}`,
      source,
      target,
      animated: selectedAgent === source || selectedAgent === target,
      style: {
        stroke: selectedAgent === source || selectedAgent === target ? '#60a5fa' : '#4b5563',
        strokeWidth: selectedAgent === source || selectedAgent === target ? 2.5 : 1.5,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: selectedAgent === source || selectedAgent === target ? '#60a5fa' : '#4b5563',
      },
    }))

    setNodes(initialNodes)
    setEdges(initialEdges)
  }, [selectedAgent, setNodes, setEdges])

  // Update node styles when selection changes
  useEffect(() => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        const isSelected = selectedAgent === node.id
        const isConnected = relationships.some(
          ([source, target]) =>
            (source === node.id && target === selectedAgent) ||
            (target === node.id && source === selectedAgent)
        )

        const agent = agents.find((a) => a.id === node.id)
        const statusColor = agent ? getStatusColor(agent.status) : '#6b7280'

        return {
          ...node,
          style: {
            ...node.style,
            background: statusColor,
            border: isSelected ? '3px solid #60a5fa' : isConnected ? '2px solid #93c5fd' : '2px solid #1f2937',
            boxShadow: isSelected
              ? '0 0 20px rgba(96, 165, 250, 0.7)'
              : isConnected
              ? '0 0 12px rgba(147, 197, 253, 0.4)'
              : '0 2px 8px rgba(0, 0, 0, 0.3)',
            scale: isSelected ? 1.2 : 1,
          },
        }
      })
    )
  }, [selectedAgent, setNodes])

  // Update edge styles when selection changes
  useEffect(() => {
    setEdges((prevEdges) =>
      prevEdges.map((edge) => {
        const isConnected =
          selectedAgent === edge.source || selectedAgent === edge.target
        return {
          ...edge,
          animated: isConnected,
          style: {
            stroke: isConnected ? '#60a5fa' : '#4b5563',
            strokeWidth: isConnected ? 2.5 : 1.5,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: isConnected ? '#60a5fa' : '#4b5563',
          },
        }
      })
    )
  }, [selectedAgent, setEdges])

  const handleNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.stopPropagation()
      onSelectAgent(node.id as AgentId)
    },
    [onSelectAgent]
  )

  return (
    <div className="w-full h-full bg-gray-900 rounded-lg border border-gray-700 overflow-hidden relative group">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        fitView
      >
        <Background color="#374151" gap={16} />
        <Controls />
      </ReactFlow>

      {/* Hover tooltip */}
      {hoveredNode && (
        <div className="absolute top-4 right-4 bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm max-w-xs z-50">
          {(() => {
            const agent = agents.find((a) => a.id === hoveredNode)
            return agent ? (
              <div>
                <p className="font-semibold text-white">{agent.name}</p>
                <p className="text-gray-400 text-xs">{agent.workspace}</p>
                <p className="text-gray-500 text-xs">{agent.model}</p>
              </div>
            ) : null
          })()}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-gray-800 border border-gray-700 rounded-lg p-3 text-xs text-gray-300 space-y-1">
        <p className="font-semibold text-gray-200 mb-2">Status</p>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10b981' }} />
          <span>Active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
          <span>Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3b82f6' }} />
          <span>Connected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
          <span>Offline</span>
        </div>
      </div>

      {/* Click instruction */}
      <div className="absolute top-4 left-4 bg-gray-800/80 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 pointer-events-none">
        Click nodes to expand details
      </div>
    </div>
  )
}
