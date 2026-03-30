'use client'

import { useState, useEffect } from 'react'
import { Card } from '../Card'

export function ArchiveCard() {
  const [stats, setStats] = useState({
    totalSize: '6TB',
    indexed: '35%',
    lastUpdated: 'In progress',
    searchSpeed: '~200ms'
  })

  return (
    <Card 
      title="Lexicon Search"
      icon="📖"
    >
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Total Size:</span>
          <span className="text-white font-semibold">{stats.totalSize}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Indexed:</span>
          <div className="w-32 bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: stats.indexed }}
            />
          </div>
          <span className="text-blue-400 text-sm">{stats.indexed}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Search Speed:</span>
          <span className="text-green-400 text-sm">{stats.searchSpeed}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Status:</span>
          <span className="text-yellow-400 text-sm">{stats.lastUpdated}</span>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-700">
          <a 
            href="/archive/search"
            className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
          >
            Launch Search →
          </a>
        </div>
      </div>
    </Card>
  )
}
