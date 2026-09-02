import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { HeaderMobile } from './header-mobile'
import { LanguageToggle } from './language-toggle'
import { Logo } from './logo'
import { Nav } from './nav'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  const { t } = useTranslation()

  // const navLinks = [
  //   { title: 'Home', to: '/' },
  //   { title: 'Sobre', to: '/quem-somos' },
  //   { title: 'Serviços', to: '/servicos' },
  //   { title: 'Contato', to: '/contato' },
  // ]

  const temporaryNavLinks = [
    // { title: 'Home', to: '#introduction' },
    { title: t('menu.about'), to: '#aboutUs' },
    { title: t('menu.services'), to: '#services' },
    { title: t('menu.products'), to: '#products' },
    { title: t('menu.contact'), to: '#contact' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 hidden  bg-zinc-50 dark:bg-zinc-950 lg:block">
        <div className="flex h-16 items-center justify-between gap-6 px-20 py-3">
          <Link to="/" className="h-full">
            <Logo />
          </Link>

          <Nav.Root className="space-x-4 lg:space-x-6">
            {temporaryNavLinks.map((link, index) => (
              // <Nav.Link key={index} to={link.to}>
              //   {link.title}
              // </Nav.Link>
              <Nav.Link key={index} to={link.to}>
                {link.title}
              </Nav.Link>
            ))}
          </Nav.Root>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <HeaderMobile navLinks={temporaryNavLinks} />
    </>
  )
}
