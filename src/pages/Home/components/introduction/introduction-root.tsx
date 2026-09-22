import { ArrowRightIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'

interface IntroductionRootProps {
  children: ReactNode
}

export function IntroductionRoot({ children }: IntroductionRootProps) {
  const { t } = useTranslation()

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 px-4 py-16 md:container md:gap-8"
      id="aboutUs"
    >
      <Link to="/servicos">
        <div className="flex w-max cursor-pointer items-center gap-2 rounded-full bg-primary p-1 transition-all hover:opacity-80">
          <Badge className="bg-background p-1 text-xs text-foreground hover:bg-muted dark:text-foreground lg:p-2">
            {t('introduction.badge')}
          </Badge>

          <p className="font-medium text-xs text-primary-foreground lg:text-sm">
            {t('introduction.badgeText')}
          </p>

          <ArrowRightIcon className="h-4 w-4 text-primary-foreground lg:h-6 lg:w-6" />
        </div>
      </Link>

      <h1 className="text-center font-bold font-ppformula text-3xl lg:text-7xl">
        {t('introduction.headline')}
      </h1>

      <p className="text-center font-medium text-sm lg:text-2xl">
        {t('introduction.subheading')}
      </p>

      <section className="flex w-full flex-col items-center justify-center gap-2 md:flex-row lg:w-max">
        {children}
      </section>
    </div>
  )
}
