import { useTranslation } from 'react-i18next'

import { TimelineItem } from './timeline-item'

export function Timeline() {
  const { t } = useTranslation()

  return (
    <section className="space-y-8">
      <h2 className="text-center font-medium text-5xl text-foreground">
        {t('aboutPage.journeyTitle')}
      </h2>
      <ol
        className="relative mx-4 border-s border-gray-200 dark:border-gray-700 lg:mx-0"
        role="list"
      >
        <TimelineItem
          year={1994}
          title={t('aboutPage.timeline1Title')}
          description={t('aboutPage.timeline1Desc')}
        />
        <TimelineItem
          year={1997}
          title={t('aboutPage.timeline2Title')}
          description={t('aboutPage.timeline2Desc')}
        />
        <TimelineItem
          year={2002}
          title={t('aboutPage.timeline3Title')}
          description={t('aboutPage.timeline3Desc')}
        />
      </ol>
    </section>
  )
}
