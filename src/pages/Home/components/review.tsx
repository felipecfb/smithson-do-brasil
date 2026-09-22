import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent } from '@/components/ui/carousel'

import { ReviewItem } from './review-item'

export function Review() {
  return (
    <section className="space-y-9 bg-[#2364AA] py-16">
      <h2 className="text-center text-3xl font-bold text-background lg:text-5xl">
        Confirme com quem já está conosco
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
          <ReviewItem
            review="Antes da consultoria em TI da Smithson do Brasil, enfrentávamos desafios operacionais e de segurança de dados. Agora, com seus serviços, nossa empresa opera com eficiência e segurança de alto nível, permitindo-nos focar no crescimento do negócio."
            name="Disraeli Sampaio"
            role="CEO"
            image="/empresas-parceiras/sampaio-metalis-color.png"
          />
          <ReviewItem
            review="Antes da consultoria em TI da Smithson do Brasil, enfrentávamos desafios operacionais e de segurança de dados. Agora, com seus serviços, nossa empresa opera com eficiência e segurança de alto nível, permitindo-nos focar no crescimento do negócio."
            name="Disraeli Sampaio"
            role="CEO"
            image="/empresas-parceiras/sampaio-metalis-color.png"
          />
          <ReviewItem
            review="Antes da consultoria em TI da Smithson do Brasil, enfrentávamos desafios operacionais e de segurança de dados. Agora, com seus serviços, nossa empresa opera com eficiência e segurança de alto nível, permitindo-nos focar no crescimento do negócio."
            name="Disraeli Sampaio"
            role="CEO"
            image="/empresas-parceiras/sampaio-metalis-color.png"
          />
          <ReviewItem
            review="Antes da consultoria em TI da Smithson do Brasil, enfrentávamos desafios operacionais e de segurança de dados. Agora, com seus serviços, nossa empresa opera com eficiência e segurança de alto nível, permitindo-nos focar no crescimento do negócio."
            name="Disraeli Sampaio"
            role="CEO"
            image="/empresas-parceiras/sampaio-metalis-color.png"
          />
          <ReviewItem
            review="Antes da consultoria em TI da Smithson do Brasil, enfrentávamos desafios operacionais e de segurança de dados. Agora, com seus serviços, nossa empresa opera com eficiência e segurança de alto nível, permitindo-nos focar no crescimento do negócio."
            name="Disraeli Sampaio"
            role="CEO"
            image="/empresas-parceiras/sampaio-metalis-color.png"
          />
        </CarouselContent>
      </Carousel>
    </section>
  )
}
