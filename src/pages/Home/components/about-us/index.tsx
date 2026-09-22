import { useTranslation } from 'react-i18next'

import { AboutUsHeroImage } from './about-us-hero-image'

export function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <section className="container flex flex-col items-end gap-4 text-center lg:flex-row lg:gap-12 lg:text-end">
        <AboutUsHeroImage />

        <div className="flex w-full flex-col items-center gap-4 lg:items-end lg:gap-12">
          <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
            {t('aboutUs.title')}
          </h2>
          <p className="flex flex-col items-center gap-4 font-medium text-base lg:items-end lg:text-xl">
            <span>{t('aboutUs.para1')}</span>
            <span style={{ whiteSpace: 'pre-line' }}>{t('aboutUs.para2')}</span>
            <span>{t('aboutUs.para3')}</span>
          </p>
          <h3 className="font-bold font-ppformula text-2xl italic lg:text-4xl">
            {t('aboutUs.subheading')}
          </h3>
        </div>
      </section>
    </div>
  )
}
