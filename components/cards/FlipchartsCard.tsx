import { Card } from '../Card'

export function FlipchartsCard() {
  return (
    <Card
      title="Flipcharts"
      icon="📊"
      href="https://willowaymedia.vercel.app/flipcharts"
    >
      <div className="space-y-3">
        <p className="text-gray-300">Interactive presentation and flipchart content</p>
        <div className="bg-gray-700 rounded p-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide">Status</p>
          <p className="text-green-400 font-medium">Live</p>
        </div>
        <div className="pt-2">
          <p className="text-blue-400 hover:text-blue-300 font-medium text-sm">View Flipcharts →</p>
        </div>
      </div>
    </Card>
  )
}
