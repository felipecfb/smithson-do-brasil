import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import { ServicesWrapper } from './components/services-wrapper'

export function Services() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet title={t('servicesPage.title')} />
      <section className="space-y-10 lg:space-y-28">
        <div className="relative">
          <div className="absolute h-full w-full bg-foreground opacity-40"></div>
          <img src="image-service.png" alt="Banner" className="hidden w-full lg:block" />
          <img src="image-service-mobile.png" alt="Banner" className="block w-full lg:hidden" />
          <h1 className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-center text-4xl font-bold text-background lg:text-7xl">
            {t('servicesPage.title')}
          </h1>
        </div>
        <ServicesWrapper />
      </section>
    </>
  )
}
