import { Mail, MapPin, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import { Form } from '@/components/form'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet title={t('contactPage.title')} />
      <div className="relative">
        <img
          src="/hero-contact.png"
          alt=""
          className="max-h-[800px] w-full object-cover lg:max-h-[536px]"
        />

        <div className="absolute left-6 top-2/4 -translate-y-2/4 transform space-y-4 md:left-10 lg:left-20">
          <Badge className="bg-[#2364AA] font-medium text-sm text-zinc-50 hover:bg-[#2364AA] hover:brightness-90 lg:text-base">
            {t('contactPage.badge')}
          </Badge>
          <h1 className="text-xl font-bold md:text-3xl lg:text-6xl">
            {t('contactPage.title')}
          </h1>
          <p className="font-medium text-sm md:text-base lg:text-lg">
            {t('contactPage.subtitle')}
          </p>
        </div>
      </div>
      <div className="container flex w-full flex-col items-center gap-12 py-12 lg:flex-row lg:gap-24 lg:py-24">
        <Form />

        <div className="space-y-6 rounded-lg bg-[#2364AA] p-8 lg:space-y-10 lg:p-16">
          <h3 className="text-2xl font-bold text-zinc-50">
            {t('contactPage.sideTitle')}
          </h3>

          <div className="space-y-2 text-sm">
            <p>
              <MapPin size={20} className="mr-2 inline-block text-zinc-50" />
              <a
                href="https://www.google.com.br/maps/place/Av.+dos+Mananciais,+1720+-+Taquara,+Rio+de+Janeiro+-+RJ,+22720-410/@-22.9176724,-43.3972183,17z/data=!3m1!4b1!4m6!3m5!1s0x9bd8c51ff89001:0xbb31f9d68514e08f!8m2!3d-22.9176774!4d-43.394638!16s%2Fg%2F11c2h0pvny?entry=ttu"
                className="text-zinc-50"
                target="_blank"
                rel="noreferrer"
              >
                Avenida dos Mananciais, 1720 - Taquara, Rio de Janeiro - RJ,
                22720-410
              </a>
            </p>

            <p>
              <Mail size={20} className="mr-2 inline-block text-zinc-50" />
              <a href="mailto:contato@smithson.com.br" className="text-zinc-50">
                contato@smithson.com.br
              </a>
            </p>

            <p>
              <Phone size={20} className="mr-2 inline-block text-zinc-50" />
              <a href="tel:+5521964430605" className="text-zinc-50">
                (21) 96443-0605
              </a>
            </p>
          </div>

          <Separator className="bg-zinc-200" />

          <div className="space-y-4 rounded-sm bg-zinc-50 p-6 text-zinc-950">
            <p className="font-medium text-base">
              {t('contactPage.testimonial')}
            </p>

            <p className="font-medium text-sm">
              <strong>{t('contactPage.testimonialName')}</strong>
              <br />
              {t('contactPage.testimonialRole')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
