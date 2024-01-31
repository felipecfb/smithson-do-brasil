import { Computer, Facebook, Instagram, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { NavLink } from '../nav-link'
import { ThemeToggle } from '../theme/theme-toggle'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

export function Mobile() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-4 lg:hidden">
      <Drawer direction="left">
        <DrawerTrigger>
          <Button className="bg-transparent">
            <Menu className="text-zinc-950 dark:text-zinc-50" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex h-full w-[40%] flex-col gap-5">
          <DrawerHeader className="flex w-full items-center justify-start gap-2">
            <a href="https://facebook.com.br" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com.br" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
          </DrawerHeader>

          <Separator className="w-full bg-zinc-950 dark:bg-zinc-50" />

          <nav className="flex flex-col space-y-4 p-4 lg:space-y-6">
            <NavLink to="/about-us" className="text-lg font-medium">
              Sobre nós
            </NavLink>
            <NavLink to="/services" className="text-lg font-medium">
              Nossos serviços
            </NavLink>
            <NavLink to="/contact" className="text-lg font-medium">
              Contato
            </NavLink>
          </nav>
        </DrawerContent>
      </Drawer>

      <Link to="/">
        <Computer className="text-md font-bold text-foreground" />
      </Link>

      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </div>
  )
}
