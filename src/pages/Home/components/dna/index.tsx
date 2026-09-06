import { useTranslation } from 'react-i18next'

import { DnaIcon } from './dna-icon'
import { DnaItem } from './dna-item'

const DNA_ICONS = ['HeartHandshake', 'BarChart4', 'Wrench', 'Wrench'] as const

export function Dna() {
  const { t } = useTranslation()
  const items = t('dna.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section className="relative flex flex-col items-end justify-center gap-8 lg:gap-24">
      <div className="container space-y-5 text-center lg:text-end">
        <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
          {t('dna.title')}
        </h2>
        <p className="ml-auto w-full font-medium text-base lg:w-2/4 lg:text-xl">
          {t('dna.description')}
        </p>
      </div>

      <div className="container z-10 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <DnaItem
            key={i}
            icon={DNA_ICONS[i]}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-1/3">
        <DnaIcon />
      </div>
    </section>
  )
}
