import { icons } from 'lucide-react'

interface ServicesItemProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function ServicesItem({ icon, title, description }: ServicesItemProps) {
  const LucideIcon = icons[icon]

  return (
    <div className="flex items-start gap-4">
      <div className="rounded-2xl bg-primary/10 p-3">
        <LucideIcon className="h-6 w-6 text-primary lg:h-8 lg:w-8" />
      </div>
      <div>
        <h3 className="font-bold text-xl text-foreground lg:text-2xl">
          {title}
        </h3>
        <p className="text-base text-muted-foreground lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  )
}
