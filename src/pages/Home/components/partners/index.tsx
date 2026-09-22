import { useTranslation } from 'react-i18next'

import { Partners as PartnersData, PartnersItem } from './partners-item'

const PARTNERS_DATA: PartnersData[] = [
  { image: 'empresas-parceiras/bom-pastor.png', title: 'Bom Pastor', url: 'https://cvbp.com.br' },
  { image: 'empresas-parceiras/clinica-lis.png', title: 'Clínica Lis', url: 'https://www.lisclinica.com.br' },
  { image: 'empresas-parceiras/gendai.png', title: 'Gendai', url: 'https://www.gendai.com.br/home' },
  { image: 'empresas-parceiras/golden-cross.png', title: 'Golden Cross', url: 'https://www.goldencross.com.br' },
  { image: 'empresas-parceiras/ilaha.png', title: 'Ilaha', url: 'https://www.ilahaprodutosdelimpeza.com.br' },
  { image: 'empresas-parceiras/index-consult.png', title: 'Index Consult', url: 'https://www.indexconsult.com.br' },
  { image: 'empresas-parceiras/koni.png', title: 'Koni', url: 'https://www.koni.com.br/tabs/cardapioapp' },
  { image: 'empresas-parceiras/lebonton.png', title: 'LeBonTon', url: 'https://www.lebonton.com.br/tabs/cardapioapp' },
  { image: 'empresas-parceiras/luiz-mendes.png', title: 'Luiz Mendes Advocacia', url: 'https://luizmendesadv.com.br/' },
  { image: 'empresas-parceiras/micral.png', title: 'Micral', url: 'https://www.micral.com.br' },
  { image: 'empresas-parceiras/porto-real.png', title: 'Hotel Porto Real Resort', url: 'https://hotelportoreal.com.br' },
  { image: 'empresas-parceiras/recom-service.png', title: 'Recom Service', url: 'https://www.recomservice.com.br' },
  { image: 'empresas-parceiras/sampaio-metalis.png', title: 'Sampaio Metalis', url: 'https://sampaiometalis.com.br' },
  { image: 'empresas-parceiras/spoleto.png', title: 'Spoleto', url: 'https://www.spoleto.com.br' },
  { image: 'empresas-parceiras/viamia.png', title: 'Via Mia', url: 'https://www.viamia.com.br' },
  { image: 'empresas-parceiras/vlm.png', title: 'VLM Administração de Imóveis', url: 'https://www.vlmvimoveis.com' },
  { image: 'empresas-parceiras/wizard.png', title: 'Wizard', url: 'https://www.wizard.com.br' },
]

export function Partners() {
  const { t } = useTranslation()

  return (
    <section
      role="region"
      aria-label={t('partners.ariaLabel')}
      className="flex flex-col items-center justify-center gap-8 lg:gap-20"
    >
      <div className="container space-y-5 text-center">
        <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
          {t('partners.title')}
        </h2>
        <p className="w-full font-medium text-base lg:text-xl">
          {t('partners.description')}
        </p>
      </div>

      <PartnersItem data={PARTNERS_DATA} />
    </section>
  )
}
