import { ReactNode } from 'react'

interface CardProps {
  title: string
  icon: string
  children: ReactNode
  href?: string
  onClick?: () => void
}

export function Card({ title, icon, children, href, onClick }: CardProps) {
  const content = (
    <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg p-6 h-full">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="text-gray-300 text-sm">
        {children}
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full text-left">
        {content}
      </button>
    )
  }

  return content
}
