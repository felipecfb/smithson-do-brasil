import { ServicesItem } from './services-item'

export function ServicesWrapper() {
  return (
    <section className="container space-y-10 pb-16 lg:space-y-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServicesItem
          icon="Code"
          title="Desenvolvimento de Sites"
          description="Equipe qualificada pronta para entregar projetos de qualidade, incluindo sites institucionais, e-commerce, blogs e landing pages."
        />
        <ServicesItem
          icon="Cctv"
          title="CFTV"
          description="Serviço realizado por profissionais capacitados, com tecnologia e segurança de ponta. Instalação estratégica para garantir a segurança do local."
        />
        <ServicesItem
          icon="PcCase"
          title="Reparo em Hardware"
          description="Especialistas prontos para reparar computadores pessoais e empresariais. Soluções rápidas e confiáveis para o funcionamento ideal dos dispositivos."
        />
        <ServicesItem
          icon="Grid2x2"
          title="Microsoft 365"
          description="Soluções de consultoria e implementação de Microsoft 365 para sua empresa, incluindo Aplicações Empresariais, Plataformas de Comunicação e Infraestrutura."
        />
        <ServicesItem
          icon="Megaphone"
          title="Tráfego Pago"
          description="Maximize a visibilidade online da sua empresa com o tráfego pago. Direcionamos o público certo para o seu site, aumentando a exposição e impulsionando as conversões."
        />
        <ServicesItem
          icon="ShoppingCart"
          title="Venda de Computadores"
          description="Ampla seleção de computadores de qualidade, incluindo modelos empresariais e pessoais, para impulsionar a produtividade e segurança do seu negócio."
        />
      </div>
    </section>
  )
}
