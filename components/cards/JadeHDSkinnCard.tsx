import { Card } from '../Card'

export function JadeHDSkinnCard() {
  return (
    <Card
      title="Jade HD Skinn Bot"
      icon="💆"
    >
      <div className="space-y-3">
        <p className="text-gray-300">Business assistant for HD Skinn esthetician services</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-700 rounded p-2">
            <p className="text-gray-400 text-xs uppercase tracking-wide">Services</p>
            <p className="text-sm text-gray-200">Facials, Brows</p>
          </div>
          <div className="bg-gray-700 rounded p-2">
            <p className="text-gray-400 text-xs uppercase tracking-wide">Owner</p>
            <p className="text-sm text-gray-200">Halle</p>
          </div>
        </div>
        <div className="pt-2 border-t border-gray-700">
          <p className="text-purple-400 font-medium text-sm">Status: Online</p>
        </div>
      </div>
    </Card>
  )
}
