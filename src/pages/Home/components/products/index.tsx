import { ProductsItem } from './products-item'

export function Products() {
  return (
    <section
      role="region"
      aria-label="Produtos Smithson"
      className="container space-y-10 lg:space-y-20"
      id="products"
    >
      <div className="space-y-5 text-center">
        <h2 className="font-bold font-ppformula text-4xl italic lg:text-6xl">
          Nossos produtos
        </h2>
        <p className="w-full font-medium text-base lg:text-xl">
          Além de serviços, também criamos nossas próprias soluções digitais.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProductsItem
          icon="Users"
          title="Conecta"
          description="Sistema de gestão de demandas para gabinetes políticos. Ajuda políticos e assessores a registrar, acompanhar e resolver as solicitações da população em um só lugar."
          url="https://conecta.smithson.com.br"
        />
        <ProductsItem
          icon="Home"
          title="Casinha"
          description="Aplicativo de gerenciamento doméstico colaborativo. Os moradores da casa organizam juntos itens, listas de compras e membros da casa."
          url="https://casinha.smithson.com.br"
        />
      </div>
    </section>
  )
}
