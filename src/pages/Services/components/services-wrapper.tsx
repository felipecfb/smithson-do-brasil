import { useTranslation } from 'react-i18next'

import { ServicesItem } from './services-item'

export function ServicesWrapper() {
  const { t } = useTranslation()

  return (
    <section className="container space-y-10 pb-16 lg:space-y-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServicesItem
          icon="Code"
          title={t('servicesPage.service1Title')}
          description={t('servicesPage.service1Desc')}
        />
        <ServicesItem
          icon="Cctv"
          title={t('servicesPage.service2Title')}
          description={t('servicesPage.service2Desc')}
        />
        <ServicesItem
          icon="PcCase"
          title={t('servicesPage.service3Title')}
          description={t('servicesPage.service3Desc')}
        />
        <ServicesItem
          icon="Grid2x2"
          title={t('servicesPage.service4Title')}
          description={t('servicesPage.service4Desc')}
        />
        <ServicesItem
          icon="Megaphone"
          title={t('servicesPage.service5Title')}
          description={t('servicesPage.service5Desc')}
        />
        <ServicesItem
          icon="ShoppingCart"
          title={t('servicesPage.service6Title')}
          description={t('servicesPage.service6Desc')}
        />
      </div>
    </section>
  )
}
