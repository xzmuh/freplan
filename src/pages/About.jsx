export default function About() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <>
      <main>
        <section className="relative py-xl flex items-center border-b border-graphite bg-surface-container-lowest">
          <div className="absolute inset-0 z-0">
            <img alt="Estrutura industrial" className="w-full h-full object-cover opacity-25 grayscale" src={`${assetBase}img/freplanLocal.jpeg`} />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/75 to-surface/20"></div>
          </div>
          <div className="relative z-10 px-margin max-w-7xl mx-auto w-full py-lg">
            <div className="border-l-4 border-primary pl-lg">
              <p className="font-label-bold text-label-bold text-primary tracking-widest uppercase mb-sm">Sobre nós</p>
              <h1 className="font-headline-xl text-headline-xl uppercase max-w-4xl leading-tight">Soluções industriais sob medida, desde 2000.</h1>
              <div className="mt-lg flex gap-md items-center">
                <div className="bg-graphite w-16 h-1"></div>
                <p className="font-body-lg text-body-lg max-w-xl text-light-gray">Uma trajetória construída na prática, com foco em precisão, confiabilidade e entendimento técnico das necessidades industriais.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl px-margin max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
            <div>
              <h2 className="font-headline-lg text-headline-lg uppercase mb-md text-white">A Freplan</h2>
              <div className="space-y-md text-light-gray font-body-lg text-body-lg">
                <p>A Freplan surgiu em 2000, iniciando sua trajetória com pai e filho trabalhando com apenas uma máquina e o objetivo de construir uma empresa reconhecida pela qualidade e confiabilidade no setor industrial.</p>
                <p>Com o tempo, a experiência prática e a necessidade do mercado por peças e soluções mais confiáveis impulsionaram o crescimento da empresa. Desde então, a Freplan passou a atuar no desenvolvimento e fabricação de soluções industriais sob medida, atendendo diferentes segmentos com foco em precisão, desempenho e entendimento técnico da aplicação de cada cliente.</p>
                <p>Hoje, a empresa atua ao lado de indústrias de diferentes setores, fornecendo peças, adaptações e soluções industriais fabricadas conforme a necessidade real de cada projeto.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="border border-graphite p-md bg-surface-container-low">
                <span className="text-primary font-headline-md text-4xl">2000</span>
                <p className="font-label-bold text-xs uppercase text-light-gray mt-sm">fundação e início da trajetória</p>
              </div>
              <div className="border border-graphite p-md bg-surface-container-low">
                <span className="text-primary font-headline-md text-4xl">SP</span>
                <p className="font-label-bold text-xs uppercase text-light-gray mt-sm">Agudos / região de Bauru</p>
              </div>
              <div className="border border-graphite p-md bg-surface-container-low">
                <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
                <p className="font-label-bold text-xs uppercase text-light-gray mt-sm">usinagem e tornearia</p>
              </div>
              <div className="border border-graphite p-md bg-surface-container-low">
                <span className="material-symbols-outlined text-primary text-4xl">construction</span>
                <p className="font-label-bold text-xs uppercase text-light-gray mt-sm">fabricação sob medida</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-xl border-y border-graphite">
          <div className="px-margin max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
              <div>
                <h2 className="font-headline-xl text-headline-lg uppercase mb-md">Construído na prática, evoluindo com a <span className="text-primary">indústria</span></h2>
                <p className="font-body-lg text-body-lg text-light-gray mb-md">Mais do que fabricar peças, a Freplan construiu sua trajetória baseada em relacionamento, confiança e entendimento técnico das necessidades industriais.</p>
                <p className="font-body-lg text-body-lg text-light-gray">O crescimento da empresa sempre esteve ligado à qualidade das soluções entregues e à confiança construída ao longo dos anos.</p>
              </div>
              <div className="relative aspect-video border border-graphite bg-surface overflow-hidden">
                <img alt="Ambiente industrial" className="w-full h-full object-cover grayscale opacity-60" src={`${assetBase}img/freplanLocal.jpeg`} />
                <div className="absolute bottom-0 right-0 bg-primary p-md">
                  <p className="font-headline-md text-headline-md text-white leading-none">20+</p>
                  <p className="font-label-bold text-label-bold text-white uppercase text-[10px]">anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl px-margin max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg uppercase text-white">Princípios que orientam cada entrega</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-sm"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
            {[
              ['Precisão', 'Fabricação com foco em qualidade dimensional, compatibilidade técnica e desempenho operacional.', 'verified'],
              ['Segurança', 'Soluções desenvolvidas para aplicações industriais que exigem confiabilidade e estabilidade operacional.', 'gpp_good'],
              ['Inovação', 'Evolução constante dos processos e desenvolvimento de soluções conforme os desafios de cada cliente.', 'lightbulb'],
            ].map(([title, text, icon]) => (
              <div key={title} className="p-md">
                <span className="material-symbols-outlined text-5xl text-primary mb-md">{icon}</span>
                <h4 className="font-headline-md text-headline-md uppercase mb-sm text-white">{title}</h4>
                <p className="font-body-md text-body-md text-light-gray">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary py-xl relative overflow-hidden">
          <div className="absolute inset-0 hazard-stripes opacity-5 pointer-events-none"></div>
          <div className="px-margin max-w-7xl mx-auto text-center relative z-10">
            <h2 className="font-headline-xl text-headline-xl text-white uppercase mb-md">Precisa de uma solução sob medida?</h2>
            <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto mb-lg">Conte com a Freplan para desenvolver peças, adaptações e soluções industriais compatíveis com a realidade operacional do seu projeto.</p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <button onClick={() => window.open('https://wa.me/5514998701514', '_blank')} className="bg-white text-primary font-label-bold text-label-bold uppercase px-xl py-sm border-2 border-white hover:bg-transparent hover:text-white transition-all">
                Entre em contato
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
