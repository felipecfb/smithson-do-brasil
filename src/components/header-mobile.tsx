import { Facebook, Instagram, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Logo } from './logo'
import { ThemeToggle } from './theme/theme-toggle'
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from './ui/drawer'
import { Separator } from './ui/separator'

type NavLink = {
  title: string
  to: string
}

interface NavLinks {
  navLinks: NavLink[]
}

export function HeaderMobile({ navLinks }: NavLinks) {
  const [open, setOpen] = useState(false)

  function handleClose() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background px-4 py-3 lg:hidden">
      <Drawer direction="left" open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="bg-transparent" onClick={() => setOpen(true)}>
          <Menu className="text-foreground dark:text-foreground" />
        </DrawerTrigger>
        <DrawerContent className="flex h-full w-[50%] flex-col">
          <DrawerHeader className="flex w-full items-center justify-start gap-2 p-4">
            <a href="https://facebook.com.br" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com.br" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
          </DrawerHeader>

          <Separator className="w-full bg-border" />

          <nav className="flex flex-col space-y-4 p-4 lg:space-y-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className="font-medium text-sm"
                onClick={handleClose}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </DrawerContent>
      </Drawer>

      <Link to="/">
        <Logo />
      </Link>

      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  )
}
