import { BR, ES, US } from 'country-flag-icons/react/3x2'
import { Languages } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function LanguageToggle() {
  const { i18n, t } = useTranslation()

  const [language, setLanguage] = useState(i18n.language)

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="default" className="space-x-2">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change Language</span>
          <span>{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLanguage('en')}>
          <US className="mr-2 h-[1.2rem] w-[1.2rem]" />
          {t('languages.en')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage('pt')}>
          <BR className="mr-2 h-[1.2rem] w-[1.2rem]" />
          {t('languages.pt')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage('es')}>
          <ES className="mr-2 h-[1.2rem] w-[1.2rem]" />
          {t('languages.es')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
