import { Card } from '../Card'

export function HealthTrackerCard() {
  return (
    <Card
      title="Health Tracker"
      icon="💪"
      href="https://tuckers-tracker.vercel.app/"
    >
      <div className="space-y-3">
        <p className="text-gray-300">Track fitness metrics and health goals</p>
        <div className="bg-gray-700 rounded p-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide">Status</p>
          <p className="text-green-400 font-medium">Active</p>
        </div>
        <div className="pt-2">
          <p className="text-blue-400 hover:text-blue-300 font-medium text-sm">Open Tracker →</p>
        </div>
      </div>
    </Card>
  )
}
