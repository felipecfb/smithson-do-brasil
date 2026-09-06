import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import { AboutUs } from './components/about-us'
import { Dna } from './components/dna'
import { Introduction } from './components/introduction'
import { Numbers } from './components/numbers'
import { Partners } from './components/partners'
import { Services } from './components/services'

export function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet title="Home" />

      <div className="space-y-8 bg-background text-foreground lg:space-y-16">
        <Introduction.Root>
          <Introduction.Button
            href="/servicos"
            title={t('introduction.learnMore')}
            className="border-[1px] border-foreground bg-background text-foreground hover:bg-muted"
          />
          <Introduction.Button
            href="/servicos"
            title={t('introduction.contactUs')}
            className="bg-primary text-primary-foreground hover:opacity-80"
          />
        </Introduction.Root>
        <AboutUs />
        <Numbers />
        <Dna />
        <Services />
        <Partners />
      </div>
    </>
  )
}
