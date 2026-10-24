import { SiInstagram, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

import { LanguageToggle } from './language-toggle'
import { Logo } from './logo'
import { ThemeToggle } from './theme/theme-toggle'
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer'

type NavLinkItem = {
  title: string
  to: string
}

interface NavLinks {
  navLinks: NavLinkItem[]
}

export function HeaderMobile({ navLinks }: NavLinks) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  function handleClose() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-zinc-50 px-4 py-3 dark:bg-zinc-950 lg:hidden">
      <Drawer direction="left" open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="bg-transparent" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6 text-zinc-950 dark:text-zinc-50" />
        </DrawerTrigger>

        <DrawerContent className="flex h-full w-[75%] flex-col gap-0 rounded-none p-0">
          <div className="flex items-center justify-between px-5 py-4">
            <Link to="/" onClick={handleClose}>
              <Logo />
            </Link>
            <button onClick={handleClose}>
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>

          <nav className="flex flex-col px-5 py-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className="border-b border-muted py-4 font-medium text-base text-foreground transition-colors hover:text-teal-600 dark:hover:text-teal-300"
                onClick={handleClose}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 px-5 py-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {t('languages.pt')} / {t('languages.en')} / {t('languages.es')}
            </p>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 border-t border-muted px-5 py-4">
            <a
              href="https://www.linkedin.com/company/smithson-do-brasil/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground transition-opacity hover:opacity-70"
            >
              <SiLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/smithsondobrasil/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground transition-opacity hover:opacity-70"
            >
              <SiInstagram size={18} />
            </a>
          </div>
        </DrawerContent>
      </Drawer>

      <Link to="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-1">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
