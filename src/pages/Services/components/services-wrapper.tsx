import { useTranslation } from 'react-i18next'

import { ServicesItem } from './services-item'

const SERVICE_ICONS = ['Code', 'Cctv', 'PcCase', 'Grid2x2', 'Megaphone', 'ShoppingCart'] as const

export function ServicesWrapper() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section className="container space-y-10 pb-16 lg:space-y-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <ServicesItem
            key={i}
            icon={SERVICE_ICONS[i]}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
