import { Card } from './ui/Card'

interface ImpactCardProps {
  icon: string
  title: string
  description: string
}

export function ImpactCard({ icon, title, description }: ImpactCardProps) {
  return (
    <Card hover className="text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-2xl">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </Card>
  )
}
