import { useTranslation } from 'react-i18next'

import { ProductsItem } from './products-item'

export function Products() {
  const { t } = useTranslation()

  return (
    <section
      role="region"
      aria-label="Produtos Smithson"
      className="container space-y-10 lg:space-y-20"
      id="products"
    >
      <div className="space-y-5 text-center">
        <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
          {t('home.products.title')}
        </h2>
        <p className="w-full font-medium text-base lg:text-xl">
          {t('home.products.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProductsItem
          icon="Users"
          title="Conecta"
          description={t('home.products.conectaDesc')}
          url="https://conecta.smithson.com.br"
        />
        <ProductsItem
          icon="Home"
          title="Casinha"
          description={t('home.products.casinhaDesc')}
          url="https://casinha.smithson.com.br"
        />
      </div>
    </section>
  )
}
