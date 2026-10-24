import { ArrowRightIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Accordion } from '@/components/accordion'
import { Button } from '@/components/ui/button'

import { ServicesItem } from './services-item'

export function Services() {
  const { t } = useTranslation()

  return (
    <section className="container space-y-8 lg:space-y-20" id="services">
      <h2 className="text-center font-bold font-ppformula text-4xl italic lg:text-start lg:text-6xl">
        {t('home.services.title')}
      </h2>

      <Accordion.Root>
        <Accordion.Item value="item-1">
          <Accordion.Trigger title={t('home.services.accordion1Title')} />
          <Accordion.Content>
            <ul className="space-y-4 font-medium text-base lg:text-xl">
              <li>{t('home.services.accordion1Item1')}</li>
              <li>{t('home.services.accordion1Item2')}</li>
              <li>{t('home.services.accordion1Item3')}</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger title={t('home.services.accordion2Title')} />
          <Accordion.Content>
            <ul className="space-y-4 font-medium text-base lg:text-xl">
              <li>{t('home.services.accordion2Item1')}</li>
              <li>{t('home.services.accordion2Item2')}</li>
              <li>{t('home.services.accordion2Item3')}</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger title={t('home.services.accordion3Title')} />
          <Accordion.Content>
            <ul className="space-y-4 font-medium text-base lg:text-xl">
              <li>{t('home.services.accordion3Item1')}</li>
              <li>{t('home.services.accordion3Item2')}</li>
              <li>{t('home.services.accordion3Item3')}</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-4">
          <Accordion.Trigger title={t('home.services.accordion4Title')} />
          <Accordion.Content>
            <ul className="space-y-4 font-medium text-base lg:text-xl">
              <li>{t('home.services.accordion4Item1')}</li>
              <li>{t('home.services.accordion4Item2')}</li>
              <li>{t('home.services.accordion4Item3')}</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <div className="flex flex-col items-center gap-8 lg:gap-24">
        <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
          {t('home.services.moreTitle')}
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <ServicesItem
            icon="Cctv"
            title={t('home.services.service1Title')}
            description={t('home.services.service1Desc')}
          />
          <ServicesItem
            icon="Code"
            title={t('home.services.service2Title')}
            description={t('home.services.service2Desc')}
          />
          <ServicesItem
            icon="PcCase"
            title={t('home.services.service3Title')}
            description={t('home.services.service3Desc')}
          />
          <ServicesItem
            icon="Grid2x2"
            title={t('home.services.service4Title')}
            description={t('home.services.service4Desc')}
          />
          <ServicesItem
            icon="Megaphone"
            title={t('home.services.service5Title')}
            description={t('home.services.service5Desc')}
          />
          <ServicesItem
            icon="ShoppingCart"
            title={t('home.services.service6Title')}
            description={t('home.services.service6Desc')}
          />
        </div>

        <Link to="#contact">
          <Button className="gap-1 rounded-3xl bg-zinc-950 p-4 font-medium text-base text-zinc-50 hover:brightness-90 dark:bg-teal-200 dark:text-zinc-950 lg:text-lg">
            {t('home.services.cta')}
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
