import { useTranslation } from 'react-i18next'

import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'

import { TabsTrigger } from './components/tabs-trigger'

export function Policies() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto space-y-24 py-24">
      <h1 className="mb-4 text-center font-medium text-6xl">
        {t('policies.title')}
      </h1>

      <Tabs defaultValue="spam-and-personal-data" className="space-y-10">
        <TabsList className="h-full w-full flex-col justify-between rounded-none bg-transparent px-0 pb-0 lg:flex-row">
          <TabsTrigger value="spam-and-personal-data" title={t('policies.tab1')} />
          <TabsTrigger value="anonymous-data-and-cookies" title={t('policies.tab2')} />
          <TabsTrigger value="external-links" title={t('policies.tab3')} />
          <TabsTrigger value="information-security-policy" title={t('policies.tab4')} />
        </TabsList>

        <div className="text-base text-foreground">
          <TabsContent value="spam-and-personal-data">
            {t('policies.tab1Content')}{' '}
            <a href="mailto:dpo@smithson.com.br" className="underline">
              dpo@smithson.com.br
            </a>
            .
          </TabsContent>
          <TabsContent value="anonymous-data-and-cookies">
            {t('policies.tab2Content')}
          </TabsContent>
          <TabsContent value="external-links">
            {t('policies.tab3Content')}
          </TabsContent>
          <TabsContent value="information-security-policy" className="space-y-4">
            <p>{t('policies.tab4Intro')}</p>
            <ul className="list-disc">
              <li>{t('policies.tab4Item1')}</li>
              <li>{t('policies.tab4Item2')}</li>
              <li>{t('policies.tab4Item3')}</li>
              <li>{t('policies.tab4Item4')}</li>
              <li>{t('policies.tab4Item5')}</li>
              <li>{t('policies.tab4Item6')}</li>
              <li>{t('policies.tab4Item7')}</li>
              <li>{t('policies.tab4Item8')}</li>
              <li>{t('policies.tab4Item9')}</li>
            </ul>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
