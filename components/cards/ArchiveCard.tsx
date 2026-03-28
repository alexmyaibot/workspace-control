import { Card } from '../Card'

interface ArchiveCardProps {
  stats: {
    totalFiles: number
    lastIndexed: string
  }
}

export function ArchiveCard({ stats }: ArchiveCardProps) {
  return (
    <Card
      title="Archive Search"
      icon="📦"
      href="https://archive-search.vercel.app"
    >
      <div className="space-y-3">
        <div className="bg-gray-700 rounded p-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide">Total Files Indexed</p>
          <p className="text-2xl font-bold text-blue-400">{stats.totalFiles.toLocaleString()}</p>
        </div>
        <div className="bg-gray-700 rounded p-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide">Last Indexed</p>
          <p className="text-sm text-gray-200">{stats.lastIndexed}</p>
        </div>
        <div className="pt-2">
          <p className="text-blue-400 hover:text-blue-300 font-medium text-sm">Open Search UI →</p>
        </div>
      </div>
    </Card>
  )
}
