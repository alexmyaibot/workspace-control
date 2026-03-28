import { Card } from '../Card'

export function GameMasterCard() {
  return (
    <Card
      title="Game Master"
      icon="🎮"
    >
      <div className="space-y-3">
        <p className="text-gray-300">Campaign and game status management</p>
        <div className="bg-gray-700 rounded p-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide">Current Status</p>
          <p className="text-yellow-400 font-medium">Campaign Active</p>
        </div>
        <div className="bg-gray-700 rounded p-3">
          <p className="text-gray-400 text-xs uppercase tracking-wide">Players</p>
          <p className="text-sm text-gray-200">Party in preparation</p>
        </div>
      </div>
    </Card>
  )
}
