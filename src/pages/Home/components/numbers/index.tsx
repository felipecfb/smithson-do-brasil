import { useTranslation } from 'react-i18next'

import { Separator } from '@/components/ui/separator'

import { NumbersIcon } from './numbers-icon'
import { NumbersItem } from './numbers-item'

export function Numbers() {
  const { t } = useTranslation()

  return (
    <div className="relative space-y-8 md:space-y-24">
      <section className="container flex flex-col-reverse items-center gap-4 md:flex-row lg:justify-between">
        <div className="space-y-5 text-center md:text-start">
          <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
            {t('home.numbers.title')}
          </h2>
          <p className="w-full font-medium text-base md:w-2/4 lg:text-xl">
            {t('home.numbers.subtitle')}
          </p>
        </div>

        <NumbersIcon />
      </section>

      <section className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-20">
          <NumbersItem number={30} title={t('home.numbers.years')} />
          <Separator className=" bg-muted-foreground md:h-12 md:w-[1px]" />
          <NumbersItem number={3000} title={t('home.numbers.clients')} />
          <Separator className="bg-muted-foreground md:h-12 md:w-[1px]" />
          <NumbersItem number={20} title={t('home.numbers.solutions')} />
        </div>
      </section>
    </div>
  )
}
