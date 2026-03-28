import { Card } from '../Card'

export function TikTokClipsCard() {
  return (
    <Card
      title="TikTok Clips"
      icon="📱"
    >
      <div className="space-y-3">
        <p className="text-gray-300">Recent content and video management</p>
        <div className="bg-gray-700 rounded p-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide">Latest Content</p>
          <p className="text-gray-200 text-sm">3 new clips this week</p>
        </div>
        <div className="bg-gray-700 rounded p-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide">Engagement</p>
          <p className="text-pink-400 font-medium">Trending ↑</p>
        </div>
      </div>
    </Card>
  )
}
