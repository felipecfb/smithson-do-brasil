import { icons } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface DnaItemProps {
  icon: keyof typeof icons
  title: string
  description: string
}

export function DnaItem({ icon, title, description }: DnaItemProps) {
  const LucideIcon = icons[icon]

  return (
    <Card className="flex min-h-80 flex-col items-center justify-between rounded-2xl rounded-bl-none border-[10px] border-r-[4px] border-t-[4px] border-primary/30 p-6 shadow-2xl shadow-primary/10">
      <CardHeader className="w-full items-start justify-start p-0">
        <LucideIcon className="h-10 w-10 text-primary" />
      </CardHeader>
      <CardContent className="space-y-1 p-0">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
