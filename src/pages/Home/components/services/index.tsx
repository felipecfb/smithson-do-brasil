import { ArrowRightIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Accordion } from '@/components/accordion'
import { Button } from '@/components/ui/button'

import { ServicesItem } from './services-item'

const SERVICE_ICONS = ['Cctv', 'Code', 'PcCase', 'Grid2x2', 'Megaphone', 'ShoppingCart'] as const

export function Services() {
  const { t } = useTranslation()
  const accordion = t('services.accordion', { returnObjects: true }) as { title: string; items: string[] }[]
  const items = t('services.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section className="container space-y-8 lg:space-y-20" id="services">
      <h2 className="text-center font-bold font-ppformula text-4xl italic lg:text-start lg:text-6xl">
        {t('services.title')}
      </h2>

      <Accordion.Root>
        {accordion.map((acc, i) => (
          <Accordion.Item key={i} value={`item-${i + 1}`}>
            <Accordion.Trigger title={acc.title} />
            <Accordion.Content>
              <ul className="space-y-4 font-medium text-base lg:text-xl">
                {acc.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <div className="flex flex-col items-center gap-8 lg:gap-24">
        <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
          {t('services.moreTitle')}
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ServicesItem
              key={i}
              icon={SERVICE_ICONS[i]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <Link to="#contact">
          <Button className="gap-1 rounded-3xl bg-primary p-4 font-medium text-base text-primary-foreground hover:opacity-80 lg:text-lg">
            {t('services.cta')}
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
