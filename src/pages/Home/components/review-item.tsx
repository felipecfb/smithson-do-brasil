import { CarouselItem } from '@/components/ui/carousel'

interface ReviewItemProps {
  review: string
  name: string
  role: string
  image: string
}

export function ReviewItem({ review, name, role, image }: ReviewItemProps) {
  return (
    <CarouselItem className="md:basis-1/2 md:pl-4 lg:basis-1/3">
      <div className="flex h-full flex-col gap-12 rounded-sm bg-background p-6 text-foreground md:rounded-lg">
        <img src={image} alt={name} className="ml-auto max-w-48 text-end" />

        <p className="font-medium text-base md:text-lg">{review}</p>

        <div className="space-y-0.5">
          <p className="text-base font-bold md:text-lg">{name}</p>
          <p className="text-sm text-muted-foreground md:text-base">{role}</p>
        </div>
      </div>
    </CarouselItem>
  )
}
