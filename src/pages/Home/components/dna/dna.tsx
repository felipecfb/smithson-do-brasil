import { DnaAnimate } from './dna-animate'
import { DnaItem } from './dna-item'

export function Dna() {
  return (
    <section className="relative flex flex-col items-end justify-center gap-8 lg:gap-20">
      <div className="container space-y-5 text-end">
        <h2 className="font-ppformula text-6xl font-bold italic">
          Nossa essência
        </h2>
        <p className="ml-auto w-2/4 text-xl font-medium">
          Acreditamos que a tecnologia deve ser uma aliada que simplifica a vida
          e impulsiona negócios, não o contrário.
        </p>
      </div>

      <div className="container z-10 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DnaItem
          icon="HeartHandshake"
          title="Entrega de Valor para Empresas e Pessoas"
          description="Na Smithson, nosso foco é entregar soluções que fazem a diferença. Trabalhamos para garantir que nossos clientes recebam o melhor!"
        />
        <DnaItem
          icon="BarChart4"
          title="Evolução do Negócio e Impacto Funcional"
          description="Nossa missão é acompanhar as tendências e aplicar inovações que geram o crescimento e melhoram a funcionalidade da operação."
        />
        <DnaItem
          icon="Wrench"
          title="Expertise Técnica e Excelência Operacional"
          description="Nossa equipe é composta por especialistas que dominam suas áreas e estão sempre prontos para enfrentar qualquer desafio tecnológico!"
        />
        <DnaItem
          icon="Wrench"
          title="Parceria e Confiança Duradoura"
          description="Valorizamos nossas relações de longo prazo construídas. A confiança que estabelecemos é fruto de um trabalho consistente e qualitativo!"
        />
      </div>

      <div className="absolute -left-20 top-2/4 -translate-y-2/4 transform">
        <DnaAnimate />
      </div>
    </section>
  )
}
