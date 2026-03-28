'use client'

import { useEffect, useState } from 'react'
import { Header } from './Header'
import { CardGrid } from './CardGrid'
import { ArchiveCard } from './cards/ArchiveCard'
import { HealthTrackerCard } from './cards/HealthTrackerCard'
import { FlipchartsCard } from './cards/FlipchartsCard'
import { JadeHDSkinnCard } from './cards/JadeHDSkinnCard'
import { GameMasterCard } from './cards/GameMasterCard'
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
        <CardGrid>
          <ArchiveCard stats={archiveStats} />
          <HealthTrackerCard />
          <FlipchartsCard />
          <JadeHDSkinnCard />
          <GameMasterCard />
          <TikTokClipsCard />
        </CardGrid>
      </main>
    </div>
  )
}
