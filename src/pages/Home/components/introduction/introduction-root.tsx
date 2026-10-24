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
        <div className="flex w-max cursor-pointer items-center gap-2 rounded-full bg-zinc-950 p-1 transition-all hover:bg-zinc-700 hover:brightness-90 dark:bg-teal-200">
          <Badge className="bg-zinc-50 p-1 text-xs text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-950 dark:text-teal-200 lg:p-2">
            {t('home.introduction.badge')}
          </Badge>

          <p className="font-medium text-xs text-zinc-50 dark:text-zinc-950 lg:text-sm">
            {t('home.introduction.badgeLink')}
          </p>

          <ArrowRightIcon className="h-4 w-4 text-zinc-50 dark:text-zinc-950 lg:h-6 lg:w-6" />
        </div>
      </Link>

      <h1 className="text-center font-bold font-ppformula text-3xl lg:text-7xl">
        {t('home.introduction.title')}
      </h1>

      <p className="text-center font-medium text-sm lg:text-2xl">
        {t('home.introduction.subtitle')}
      </p>

      <section className="flex w-full flex-col items-center justify-center gap-2 md:flex-row lg:w-max">
        {children}
      </section>
    </div>
  )
}
