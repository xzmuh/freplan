export default function Home() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <>
      <section className="relative min-h-[calc(100dvh-72px)] md:min-h-[calc(100dvh-88px)] flex items-center overflow-hidden py-[clamp(40px,8dvh,88px)]">
        <div className="absolute inset-0 z-0">
          <img alt="Estrutura industrial" className="w-full h-full object-cover opacity-25 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdS8igT5JKuY4hS_btBXUW9yBxnKOqfIPBhg0TOeYHq30dMfQZYbGOxinj7A8b9tha4Of8MHpkQuqrCdFXquFMORXEEgYxH0vgLkKk23MTz8ZGAFvsttS78j9BtRo5i3pa-GDh_rnBF44IZu_Z_MTtHxJ6sR9aoskLOL0xXig_XncFIBFEHfHVmOUvVkky_BjEKMViOrCskY8KOdne9oZCFd4HddtWNDqtR1sHx6VsTrVMlJXISuzAZr3PYLok2X42F_qpSXPG-3QL" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/75 to-surface/20"></div>
          <img
            aria-hidden="true"
            className="absolute right-[max(32px,8vw)] top-1/2 hidden w-[min(30vw,360px)] -translate-y-1/2 object-contain opacity-[0.09] lg:block"
            src={`${assetBase}img/brand/freplan-simbolo.png`}
            alt=""
          />
        </div>
        <div className="relative z-10 px-margin w-full max-w-7xl mx-auto">
          <div className="hazard-stripes-primary h-1.5 w-20 md:w-24 mb-sm md:mb-md"></div>
          <h1 className="font-headline-xl text-headline-xl text-secondary uppercase mb-md max-w-5xl">
            Soluções sob medida para operações que <span className="text-primary">não podem parar</span>.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg md:mb-xl max-w-2xl border-l border-primary pl-md md:pl-lg">
            Tornearia, usinagem e fabricação de componentes com precisão, qualidade e foco na necessidade real de cada aplicação.
          </p>
          <div className="grid grid-cols-1 sm:flex sm:flex-row gap-sm max-w-xl">
            <button onClick={() => window.open(`${assetBase}#/products`, '_blank')} className="w-full sm:w-auto min-h-12 bg-primary text-secondary font-label-bold text-label-bold uppercase px-md py-sm text-md hover:bg-white hover:text-black transition-all">
              Conheça nossas soluções
            </button>
            <button onClick={() => window.open('https://wa.me/5514998701514', '_blank')} className="w-full sm:w-auto min-h-12 border-2 border-primary text-primary font-label-bold text-label-bold uppercase px-md py-sm text-md hover:bg-primary hover:text-white transition-all">
              Falar com a Freplan
            </button>
          </div>
        </div>
      </section>

      <section className="py-xl px-margin bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div>
            <span className="font-label-bold text-primary tracking-widest uppercase mb-sm block">Desde 2000</span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-secondary mb-md">Especializada em fabricação sob medida</h2>
            <p className="font-body-lg text-on-surface-variant mb-md">
              A Freplan atua no desenvolvimento e fabricação de peças e soluções industriais para diferentes segmentos da indústria. Com experiência prática e foco em qualidade, trabalha lado a lado com seus clientes para entregar soluções funcionais, confiáveis e compatíveis com a realidade operacional de cada projeto.
              <br />
              Além da fabricação, a empresa busca compreender as necessidades específicas de cada cliente, oferecendo suporte técnico, precisão nos processos e compromisso em transformar demandas industriais em soluções eficientes, duráveis e aplicáveis no dia a dia da operação.            </p>
            <div className="grid grid-cols-2 gap-lg border-t border-outline pt-md mt-lg">
              <div>
                <div className="text-primary font-headline-md text-4xl mb-1">2000</div>
                <div className="font-label-bold uppercase text-xs tracking-widest text-secondary/60">início da trajetória</div>
              </div>
              <div>
                <div className="text-primary font-headline-md text-4xl mb-1">Agudos</div>
                <div className="font-label-bold uppercase text-xs tracking-widest text-secondary/60">região de Bauru-SP</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
              <img alt="Detalhe de fabricação industrial" className="w-full h-full object-cover grayscale" src={`${assetBase}img/torno.png`} />
              <div className="absolute inset-0 border-[14px] border-surface/50 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-md hidden md:block">
              <span className="font-label-bold text-secondary text-xs uppercase">Usinagem, tornearia e plaina</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl px-margin border-t border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-xl gap-sm">
            <span className="font-label-bold text-primary tracking-widest uppercase">Serviços</span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-secondary">Capacidade de atender desafios de diferentes escalas</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl">Da peça unitária à fabricação sob demanda, com precisão e confiabilidade industrial.</p>
          </div>
          <div className="space-y-sm">
            {[
              ['01', 'Usinagem de precisão', 'Peças e componentes fabricados sob medida para aplicações industriais que exigem alto padrão dimensional e confiabilidade operacional.', 'precision_manufacturing'],
              ['02', 'Fabricação sob medida', 'Desenvolvimento de soluções industriais personalizadas conforme necessidade técnica, aplicação e ambiente operacional do cliente.', 'construction'],
              ['03', 'Adaptações industriais', 'Produção e adaptação de peças e componentes para manutenção, melhoria e continuidade operacional de equipamentos industriais.', 'engineering'],
            ].map(([number, title, text, icon]) => (
              <div key={number} className="group flex flex-col md:flex-row items-start md:items-center justify-between border-b border-outline py-lg hover:bg-surface-container/20 transition-colors px-4">
                <div className="flex items-center gap-md mb-sm md:mb-0">
                  <span className="font-headline-xl text-headline-lg md:text-headline-xl text-outline/50 group-hover:text-primary transition-colors">{number}</span>
                  <h3 className="font-headline-xl text-3xl md:text-5xl uppercase text-secondary">{title}</h3>
                </div>
                <div className="md:max-w-md">
                  <p className="font-body-md text-on-surface-variant mb-3">{text}</p>
                  <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[150px] px-margin bg-surface-container/20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-xl gap-sm items-center text-center">
            <span className="font-label-bold text-primary tracking-widest uppercase">Processo</span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-secondary">Do entendimento à aplicação final</h2>
          </div>
          <div className="relative pt-md">
            <div className="hidden md:block absolute top-[52px] left-0 w-full h-0.5 bg-outline"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-md md:gap-0">
              {[
                ['01', 'Entendimento da necessidade', 'Analisamos a aplicação, o ambiente operacional e as especificações técnicas.'],
                ['02', 'Desenvolvimento da solução', 'Definimos materiais, processos e viabilidade técnica para garantir durabilidade.'],
                ['03', 'Fabricação e controle', 'Produzimos com foco em precisão dimensional, qualidade e compatibilidade operacional.'],
                ['04', 'Entrega e acompanhamento', 'Acompanhamos o projeto buscando confiabilidade e eficiência na aplicação final.'],
              ].map(([number, title, text]) => (
                <div key={number} className="relative flex flex-col items-center md:items-start group">
                  <div className="relative z-10 w-12 h-12 bg-surface border-2 border-primary text-primary flex items-center justify-center font-headline-md mb-md group-hover:bg-primary group-hover:text-secondary transition-colors">{number}</div>
                  <div className="md:pr-md text-center md:text-left">
                    <h4 className="font-label-bold uppercase text-secondary mb-2">{title}</h4>
                    <p className="text-sm text-on-surface-variant">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl px-margin border-y border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-xl">
            <div className="max-w-2xl">
              <span className="font-label-bold text-primary tracking-widest uppercase mb-sm block">Diferenciais</span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-secondary">Compromisso com qualidade, precisão e confiabilidade</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-sm">
              Mais do que fabricar peças, a Freplan desenvolve soluções compatíveis com a realidade operacional de cada projeto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-center">
            <div className="md:col-span-8 bg-[#4D4D4D] p-lg border-l-8 border-primary flex flex-col md:flex-row gap-lg items-center">
              <div className="shrink-0">
                <span className="material-symbols-outlined text-primary text-6xl">precision_manufacturing</span>
              </div>
              <div>
                <h4 className="font-headline-md text-2xl uppercase text-secondary mb-sm">Precisão</h4>
                <p className="font-body-md text-light-gray">Processos focados em qualidade dimensional, compatibilidade técnica e alto padrão de fabricação para diferentes aplicações industriais.</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-container-high p-md border-t-4 border-primary self-stretch flex flex-col justify-center">
              <div className="mb-md">
                <span className="material-symbols-outlined text-primary text-4xl">gpp_good</span>
              </div>
              <h4 className="font-headline-md text-xl uppercase text-secondary mb-sm">Segurança</h4>
              <p className="font-body-md text-light-gray">Soluções desenvolvidas para garantir confiabilidade operacional e desempenho consistente.</p>
            </div>

            <div className="md:col-span-4 bg-surface-container-high p-md border-b-4 border-primary order-4 md:order-3 self-stretch flex flex-col justify-center">
              <div className="mb-md">
                <span className="material-symbols-outlined text-primary text-4xl">lightbulb</span>
              </div>
              <h4 className="font-headline-md text-xl uppercase text-secondary mb-sm">Inovação</h4>
              <p className="font-body-md text-light-gray">Desenvolvimento contínuo de soluções sob medida conforme a necessidade real de cada cliente.</p>
            </div>

            <div className="md:col-span-8 bg-[#4D4D4D] p-lg border-r-8 border-primary flex flex-col md:flex-row-reverse gap-lg items-center order-3 md:order-4">
              <div className="shrink-0">
                <span className="material-symbols-outlined text-primary text-6xl">engineering</span>
              </div>
              <div className="text-left md:text-right">
                <h4 className="font-headline-md text-2xl uppercase text-secondary mb-sm">Fabricação sob medida</h4>
                <p className="font-body-md text-light-gray">Peças, adaptações e componentes fabricados de acordo com a aplicação, o ambiente operacional e os requisitos técnicos do projeto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl px-margin">
        <div className="max-w-7xl mx-auto text-center py-xl border-y border-outline">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-md">
            Tem uma demanda industrial específica?
          </h2>

          <p className="font-body-lg text-on-surface-variant mb-lg max-w-2xl mx-auto">
            Fale com a Freplan e apresente sua necessidade. Nossa equipe avalia o projeto
            e orienta o melhor caminho para desenvolver a solução adequada.
          </p>

          <button
            onClick={() => window.open('https://wa.me/5514998701514', '_blank')}
            className="bg-primary text-secondary font-label-bold text-label-bold uppercase px-xl py-md text-lg hover:bg-white hover:text-black transition-all"
          >
            Falar com a Freplan
          </button>
        </div>
      </section>
    </>
  );
}
