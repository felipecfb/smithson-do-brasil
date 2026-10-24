import Autoplay from 'embla-carousel-autoplay'
import { useTranslation } from 'react-i18next'

import { Carousel, CarouselContent } from '@/components/ui/carousel'

import { ReviewItem } from './review-item'

export function Review() {
  const { t } = useTranslation()

  return (
    <section className="space-y-9 bg-[#2364AA] py-16">
      <h2 className="text-center text-3xl font-bold text-zinc-50 lg:text-5xl">
        {t('home.review.title')}
      </h2>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="mx-auto w-[90%] lg:w-full"
      >
        <CarouselContent className="md:-mx-6">
          {[...Array(5)].map((_, i) => (
            <ReviewItem
              key={i}
              review={t('home.review.reviewText')}
              name="Disraeli Sampaio"
              role="CEO"
              image="/empresas-parceiras/sampaio-metalis-color.png"
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
