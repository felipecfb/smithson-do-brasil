import { icons } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ProductsItemProps {
  icon: keyof typeof icons
  title: string
  description: string
  url: string
}

export function ProductsItem({
  icon,
  title,
  description,
  url,
}: ProductsItemProps) {
  const LucideIcon = icons[icon]

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="block transition-transform duration-300 ease-in-out hover:-translate-y-1"
    >
      <Card className="flex h-full flex-col items-center justify-between gap-2 text-center">
        <CardHeader className="items-center">
          <LucideIcon size={64} />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-3xl font-bold">{title}</h3>
            <Badge variant="secondary">Em desenvolvimento</Badge>
          </div>
          <p className="text-xl text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </a>
  )
}
