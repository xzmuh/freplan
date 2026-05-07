export default function Products() {
  const productsHeroImage = "/img/products-hero-image.png";

  return (
    <>
      <header className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-margin py-xl border-b-2 border-surface-variant overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Estrutura industrial"
            className="w-full h-full object-cover opacity-30 grayscale"
            src={productsHeroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/75 to-surface/95"></div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <h1 className="font-headline-xl text-headline-xl text-secondary mb-md uppercase">
            Conheça algumas de nossas soluções já fabricadas
          </h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto uppercase tracking-wider">
            Soluções sob medida para fabricação, manutenção e melhoria de processos industriais.
          </p>
          <div className="mt-lg">
            <button className="bg-primary text-white text-headline-md uppercase px-md py-sm text-sm hover:bg-black hover:text-primary border-2 border-primary transition-all active:scale-95">
              Explorar catálogo
            </button>
          </div>
        </div>
      </header>

      <section className="px-margin py-xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[
            ['Usinagem de precisão', 'Fabricação de peças e componentes sob medida para aplicações que exigem alto padrão dimensional.', 'precision_manufacturing'],
            ['Tornearia industrial', 'Produção e acabamento de componentes para manutenção, reposição e melhoria de equipamentos industriais.', 'settings'],
            ['Solda e montagem', 'Soluções soldadas e conjuntos industriais com foco em resistência, confiabilidade e compatibilidade técnica.', 'construction'],
            ['Adaptações industriais', 'Adequação de peças e componentes para continuidade operacional e melhoria de desempenho.', 'engineering'],
            ['Soluções em inox', 'Produção sob medida em inox para aplicações que demandam acabamento, resistência e durabilidade.', 'architecture'],
            ['Projetos sob demanda', 'Desenvolvimento conforme necessidade técnica, aplicação e ambiente operacional do cliente.', 'inventory_2'],
          ].map(([title, text, icon], index) => (
            <div key={title} className="bg-surface-container border-2 border-surface-variant flex flex-col">
              <div className={index % 2 === 0 ? "h-3 bg-primary-container" : "h-3 bg-graphite"}></div>
              <div className="p-md flex flex-col flex-grow">
                <div className="w-full h-48 bg-surface-container-highest mb-md border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-headline-xl text-primary">{icon}</span>
                </div>
                <span className="font-label-bold text-label-bold text-primary uppercase mb-xs">Solução {String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-headline-md text-headline-md text-secondary uppercase mb-sm">{title}</h3>
                <p className="font-body-md text-body-md text-light-gray mb-md flex-grow">{text}</p>
                <a className="font-label-bold text-label-bold text-primary uppercase flex items-center gap-xs hover:underline decoration-2 underline-offset-4" href="#">
                  Ver detalhes <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest border-t-4 border-surface-container-highest px-margin py-xl w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-lg border-2 border-surface-variant p-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 hazard-stripes-primary w-2 h-full"></div>
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg text-secondary uppercase mb-sm">Fabricação sob medida para a realidade do seu projeto</h2>
            <p className="font-body-lg text-body-lg text-tertiary uppercase tracking-wide">Nossa equipe técnica avalia a aplicação, o ambiente operacional e os requisitos de cada demanda para desenvolver uma solução funcional e confiável.</p>
          </div>
          <div className="flex flex-col gap-sm shrink-0">
            <button onClick={() => window.open('https://wa.me/5514998701514', '_blank')} className="bg-primary-container text-on-primary-container font-label-bold text-label-bold uppercase px-xl py-md hover:bg-white hover:text-black transition-all">
              Entre em contato
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
