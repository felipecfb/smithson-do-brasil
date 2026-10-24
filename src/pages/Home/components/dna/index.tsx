import { useTranslation } from 'react-i18next'

import { DnaIcon } from './dna-icon'
import { DnaItem } from './dna-item'

export function Dna() {
  const { t } = useTranslation()

  return (
    <section className="relative flex flex-col items-end justify-center gap-8 lg:gap-24">
      <div className="container space-y-5 text-center lg:text-end">
        <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
          {t('home.dna.title')}
        </h2>
        <p className="ml-auto w-full font-medium text-base lg:w-2/4 lg:text-xl">
          {t('home.dna.subtitle')}
        </p>
      </div>

      <div className="container z-10 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DnaItem
          icon="HeartHandshake"
          title={t('home.dna.item1Title')}
          description={t('home.dna.item1Desc')}
        />
        <DnaItem
          icon="BarChart4"
          title={t('home.dna.item2Title')}
          description={t('home.dna.item2Desc')}
        />
        <DnaItem
          icon="Wrench"
          title={t('home.dna.item3Title')}
          description={t('home.dna.item3Desc')}
        />
        <DnaItem
          icon="Wrench"
          title={t('home.dna.item4Title')}
          description={t('home.dna.item4Desc')}
        />
      </div>

      <div className="absolute bottom-4 right-1/3">
        <DnaIcon />
      </div>
    </section>
  )
}
