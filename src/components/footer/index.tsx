import { SiInstagram, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Mail, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Form } from '../form'
import { Nav } from '../nav'
import { Separator } from '../ui/separator'
import { FooterIcon } from './footer-icon'
import { FooterMenu } from './footer-menu'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-background pt-16" id="contact">
      <section className="container relative flex flex-col-reverse overflow-hidden text-foreground lg:flex-row lg:items-end lg:justify-between lg:rounded-lg lg:bg-muted lg:px-0">
        <div className="w-full bg-muted px-4 py-8 text-center lg:w-2/4 lg:space-y-3 lg:bg-transparent lg:px-8 lg:py-12 lg:text-start">
          <FooterIcon />
          <h2 className="font-bold text-2xl lg:text-4xl">
            {t('footer.heroTitle')}
          </h2>
          <p className="text-base lg:text-xl">
            {t('footer.heroSubtitle')}
          </p>
        </div>

        <img src="/hero-image.png" alt="" className="m-0 h-full max-w-full" />
      </section>

      <section className="relative flex flex-col items-center justify-between gap-4 overflow-hidden bg-background px-8 py-8 text-foreground lg:flex-row lg:gap-0 lg:px-20 lg:py-24">
        <div className="w-full space-y-2 text-center lg:w-2/4 lg:space-y-5 lg:text-start">
          <h3 className="font-bold font-ppformula text-4xl text-foreground lg:text-6xl">
            {t('footer.contactTitle')}
          </h3>
          <p className="font-medium text-base text-foreground md:text-xl lg:max-w-80">
            {t('footer.contactSubtitle')}
          </p>
          <p className="font-medium text-base text-foreground lg:text-xl">
            {t('footer.contactSubtitle2')}
          </p>
        </div>

        <Form className="z-10 lg:w-2/4" />
      </section>

      <section className="bg-muted text-foreground">
        <div className="container flex flex-col justify-between gap-4 py-8 text-foreground lg:flex-row">
          <div className="space-y-2">
            <h3 className="font-bold text-2xl text-foreground">
              Smithson do Brasil
            </h3>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/smithson-do-brasil/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/smithsondobrasil/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SiInstagram size={20} />
              </a>
            </div>
          </div>

          <FooterMenu title={t('footer.menuInstitutional')}>
            <Nav.Root className="flex flex-col items-start gap-1">
              <Nav.Link to="/quem-somos">{t('footer.menuAboutUs')}</Nav.Link>
              <Nav.Link to="/contato">{t('footer.menuCareers')}</Nav.Link>
            </Nav.Root>
          </FooterMenu>

          <FooterMenu title={t('footer.menuServices')}>
            <Nav.Root className="flex flex-col items-start gap-1">
              {(t('footer.menuServicesItems', { returnObjects: true }) as string[]).map((item) => (
                <Nav.Link key={item} to="/servicos">{item}</Nav.Link>
              ))}
            </Nav.Root>
          </FooterMenu>

          <FooterMenu title={t('footer.menuContact')}>
            <Nav.Root className="flex flex-col items-start gap-1">
              <Nav.Link to="tel:+5521970452371">
                <Phone size={16} />
                (21) 97045-2371
              </Nav.Link>
              <Nav.Link to="mailto:contato@smithson.com.br">
                <Mail size={16} />
                contato@smithson.com.br
              </Nav.Link>
            </Nav.Root>
          </FooterMenu>
        </div>
      </section>

      <Separator className="bg-border" />

      <section className="bg-muted">
        <div className="container flex flex-col items-start justify-between gap-2 py-4 text-xs text-muted-foreground lg:flex-row lg:items-center lg:gap-0 lg:text-sm">
          <div className="flex flex-col gap-0.5 lg:flex-row lg:items-center lg:gap-4">
            <p>&copy; {new Date().getFullYear()} Smithson do Brasil Ltda.</p>
            <span className="hidden lg:inline text-muted-foreground/40">·</span>
            <p>CNPJ 00.460.978/0001-36</p>
          </div>

          <Link
            to="/politicas-de-privacidade-e-seguranca"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {t('footer.privacy')}
          </Link>
        </div>
      </section>
    </footer>
  )
}
