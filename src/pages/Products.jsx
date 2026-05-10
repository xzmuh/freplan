const whatsappNumber = '5514998701514';

function buildWhatsAppLink(productName) {
  const message = `Olá, tenho interesse em solicitar orçamento para ${productName}. Gostaria de conversar sobre medidas, material e aplicação da peça.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function buildStockWhatsAppLink(productName) {
  const message = `Olá, tenho interesse em solicitar ${productName} para pronta entrega.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function Products() {
  const assetBase = import.meta.env.BASE_URL;
  const productsHeroImage = `${assetBase}img/products-hero-image.png`;
  const scrollToStock = () => {
    document.getElementById('pronta-entrega')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const productHighlights = [
    {
      title: 'Engrenagens',
      shortTitle: 'Engrenagens',
      text: 'Engrenagens helicoidais e retas usinadas sob medida para reposição, manutenção e aplicações industriais específicas.',
      image: `${assetBase}img/produtos-engrenagem.jpeg`,
      alt: 'Engrenagem industrial usinada pela Freplan',
      tags: ['Sob medida', 'Reposição', 'Usinagem'],
      details: ['Dimensões sob projeto', 'Material conforme aplicação', 'Peça fabricada pela Freplan'],
      icon: 'settings',
    },
    {
      title: 'Eixos',
      shortTitle: 'Eixos',
      text: 'Eixos, roscas e componentes torneados com acabamento técnico para conjuntos mecânicos e máquinas industriais.',
      image: `${assetBase}img/produtos-eixos.png`,
      alt: 'Eixos metálicos torneados',
      tags: ['Tornearia', 'Roscas', 'Manutenção'],
      details: ['Torneamento técnico', 'Acabamento dimensional', 'Conversão por amostra ou desenho'],
      icon: 'straighten',
    },
    {
      title: 'Moldes e componentes especiais',
      shortTitle: 'Moldes',
      text: 'Peças técnicas fabricadas conforme desenho, amostra ou necessidade de adaptação do equipamento.',
      image: `${assetBase}img/produtos-moldes.png`,
      alt: 'Componente metálico especial usinado',
      tags: ['Projeto especial', 'Amostra', 'Adaptação'],
      details: ['Desenvolvimento sob demanda', 'Ajuste para aplicação real', 'Fabricação unitária ou por lote'],
      icon: 'architecture',
    },
    {
      title: 'Peças em inox',
      shortTitle: 'Inox',
      text: 'Soluções em inox para aplicações que pedem resistência, durabilidade e acabamento limpo.',
      image: `${assetBase}img/produtos-componentes-inox.jpeg`,
      alt: 'Peças circulares em inox com acabamento usinado',
      tags: ['Inox', 'Acabamento', 'Durabilidade'],
      details: ['Peças resistentes à corrosão', 'Acabamento técnico', 'Aplicações industriais e sanitárias'],
      icon: 'verified',
    },
    {
      title: 'Helicóide',
      shortTitle: 'Helicóide',
      text: 'Helicóides em aço inox para transporte contínuo de materiais, com alta resistência, durabilidade e acabamento sob medida.',
      image: `${assetBase}img/produtos-helicoide.jpeg`,
      alt: 'Helicóide em aço inox com acabamento usinado para transporte de materiais',
      tags: ['Transporte', 'Inox', 'Sob medida'],
      details: ['Passo conforme aplicação', 'Diâmetro sob consulta', 'Produção para sistemas industriais'],
      icon: 'sync_alt',
    },
    {
      title: 'Envase',
      shortTitle: 'Envase',
      text: 'Peças, bicos, conexões e componentes usinados para manutenção, reposição e adaptação de sistemas de envase industrial.',
      image: `${assetBase}img/produtos-envase.jpeg`,
      alt: 'Componentes usinados para sistema de envase industrial',
      tags: ['Envase', 'Reposição', 'Adaptação'],
      details: ['Componentes para linha industrial', 'Peças por desenho ou amostra', 'Ajustes para manutenção'],
      icon: 'precision_manufacturing',
    },
    {
      title: 'Roldanas de tração',
      shortTitle: 'Roldanas',
      text: 'Roldanas revestidas e usinadas para tração, movimentação e reposição em conjuntos mecânicos industriais.',
      image: `${assetBase}img/produtos-roldanas-tracao.jpeg`,
      alt: 'Roldanas de tração vermelhas com cubo metálico usinado',
      tags: ['Tração', 'Revestimento', 'Reposição'],
      details: ['Medidas conforme equipamento', 'Cubo metálico usinado', 'Revestimento conforme aplicação'],
      icon: 'motion_photos_auto',
    },
    {
      title: 'Rosqueadeiras',
      shortTitle: 'Rosqueadeiras',
      text: 'Conjuntos e componentes para rosqueamento, fabricados sob medida para aplicações técnicas e manutenção industrial.',
      image: `${assetBase}img/produtos-rosqueadeiras2.jpeg`,
      alt: 'Componentes metálicos para rosqueadeiras com anel amarelo',
      imagePosition: 'center bottom',
      tags: ['Roscas', 'Conjunto', 'Sob medida'],
      details: ['Peça por amostra ou desenho', 'Rosqueamento técnico', 'Ajuste conforme aplicação'],
      icon: 'build_circle',
    },
  ];
  const processSteps = [
    ['01', 'Escolha o tipo de peça', 'Use o catálogo para indicar a solução mais próxima da sua necessidade.'],
    ['02', 'Envie medidas e aplicação', 'Pelo WhatsApp, nossa equipe entende material, desenho, amostra e ambiente de uso.'],
    ['03', 'Receba a orientação técnica', 'Avaliamos viabilidade, processo de fabricação e próximos passos para orçamento.'],
  ];
  const stockItems = [
    {
      title: 'Rodas de tração',
      text: 'Item de estoque para reposição com medida padrão única.',
      image: `${assetBase}img/estoque-roda-tracao.jpeg`,
      alt: 'Roda de tração vermelha com cubo metálico',
      imagePosition: 'center center',
      specs: ['Medida padrão única'],
      icon: 'radio_button_checked',
    },
    {
      title: 'Roldanas de rosqueadeira automática',
      text: 'Roldanas para aplicação em rosqueadeira automática.',
      image: `${assetBase}img/estoque-roldana-rosqueadeira-automatica.jpeg`,
      alt: 'Roldanas vermelhas para rosqueadeira automática',
      imagePosition: 'center center',
      specs: ['Medida padrão única'],
      icon: 'motion_photos_auto',
    },
    {
      title: 'Ponteiras para rosqueadeira manual',
      text: 'Três tamanhos para atender diferentes faixas de trabalho.',
      image: `${assetBase}img/estoque-ponteiras-rosqueadeira-manual.jpeg`,
      alt: 'Ponteiras metálicas para rosqueadeira manual em três tamanhos',
      imagePosition: 'center center',
      specs: ['20mm a 60mm', '60mm a 100mm', '100mm a 140mm'],
      icon: 'build_circle',
    },
    {
      title: 'União TC',
      text: 'Peça de estoque com variação por faixa de medida.',
      image: `${assetBase}img/estoque-uniao-tc.jpeg`,
      alt: 'União TC em inox com acabamento usinado',
      imagePosition: 'center center',
      specs: ['Variações por faixa de medida'],
      icon: 'hub',
    },
    {
      title: 'Bicos de envase',
      text: 'Bicos com rosca padrão e variação no diâmetro ou comprimento.',
      image: `${assetBase}img/bicos2.jpeg`,
      alt: 'Bicos de envase metálicos em tamanhos diferentes',
      imagePosition: 'center center',
      mobileImagePosition: 'center 42%',
      specs: ['Rosca padrão', 'Diâmetro variável', 'Comprimento variável'],
      icon: 'precision_manufacturing',
    },
  ];

  return (
    <>
      <header className="relative w-full min-h-[64vh] flex items-center px-margin py-xl border-b-2 border-surface-variant overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Estrutura industrial"
            className="w-full h-full object-cover opacity-28 grayscale"
            src={productsHeroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/45"></div>
          <div className="absolute inset-0 technical-grid-soft opacity-80"></div>
        </div>
        <div className="relative z-10 grid w-full max-w-7xl mx-auto grid-cols-1 gap-lg lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-label-bold text-primary tracking-widest uppercase mb-sm block">Catálogo sob consulta</span>
            <h1 className="font-headline-xl text-4xl text-secondary mb-md uppercase md:text-headline-xl">
              Solicite peças industriais fabricadas sob medida pela Freplan
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-2xl uppercase tracking-wider">
              Escolha a categoria mais próxima da sua demanda de usinagem, tornearia ou manutenção industrial e fale com a Freplan pelo WhatsApp. Medidas, material e aplicação são alinhados no atendimento técnico.
            </p>
          </div>
          <div className="lg:col-span-5 border-l-4 border-primary bg-surface/80 p-md backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span className="font-label-bold text-label-bold text-primary uppercase mb-sm block">Como funciona</span>
            <div className="space-y-sm">
              {processSteps.map(([number, title, text]) => (
                <div key={number} className="grid grid-cols-[44px_1fr] gap-sm border-b border-outline-variant pb-sm last:border-b-0 last:pb-0">
                  <span className="font-headline-md text-primary">{number}</span>
                  <div>
                    <h2 className="font-label-bold text-label-bold text-secondary uppercase">{title}</h2>
                    <p className="font-body-md text-sm text-light-gray">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-outline-variant bg-surface-container-lowest px-margin py-md">
        <div className="max-w-7xl mx-auto">
          <div className="mb-sm flex items-center justify-between gap-md">
            <span className="font-label-bold text-label-bold text-primary uppercase tracking-widest">Algumas categorias</span>
            <button
              type="button"
              onClick={scrollToStock}
              className="hidden items-center gap-xs border border-primary px-sm py-xs font-label-bold text-[11px] uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white active:scale-[0.98] sm:inline-flex"
            >
              Ver pronta entrega
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </button>
          </div>
          <div className="flex gap-sm overflow-x-auto pb-sm snap-x">
            <button
              type="button"
              onClick={scrollToStock}
              className="snap-start shrink-0 border border-primary bg-primary/10 px-md py-sm font-label-bold text-label-bold text-primary uppercase transition-all hover:bg-primary hover:text-white active:scale-[0.98] sm:hidden"
            >
              Pronta entrega
            </button>
            {productHighlights.map((product) => (
              <span
                key={product.title}
                className="snap-start shrink-0 border border-outline-variant bg-surface-container px-md py-sm font-label-bold text-label-bold text-secondary uppercase transition-all hover:border-primary hover:text-primary active:scale-[0.98]"
                href={`#${product.shortTitle.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              >
                {product.shortTitle}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogo-produtos" className="px-margin py-xl md:px-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="md:col-span-7">
            <span className="font-label-bold text-primary tracking-widest uppercase mb-sm block">Produtos fabricados pela Freplan</span>
            <h2 className="font-headline-lg text-4xl text-secondary uppercase md:text-headline-lg">
              Catálogo consultivo para orçamento sob medida
            </h2>
          </div>
          <p className="font-body-md text-body-md text-light-gray md:col-span-5">
            As fotos mostram produtos fabricados pela nossa equipe. Cada item abaixo abre uma conversa já direcionada para a solução escolhida.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productHighlights.map((product, index) => (
            <article
              key={product.title}
              id={product.shortTitle.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
              className="group bg-surface-container border-2 border-surface-variant overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <a
                aria-label={`Solicitar orçamento para ${product.title}`}
                className="relative block aspect-[16/10] overflow-hidden bg-surface-container-highest"
                href={buildWhatsAppLink(product.title)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt={product.alt}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  src={product.image}
                  style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
                />
                <div className="absolute left-0 top-0 h-3 w-full bg-primary-container"></div>
                {/* <span className="absolute left-md top-md bg-surface/90 px-sm py-xs font-label-bold text-label-bold text-primary uppercase">
                  Fabricado pela Freplan
                </span> */}
                {/* <span className="absolute bottom-md left-md bg-primary px-sm py-xs font-label-bold text-label-bold text-white uppercase">
                  Item {String(index + 1).padStart(2, '0')}
                </span> */}
              </a>

              <div className="flex flex-1 flex-col p-sm md:p-md">
                <div className="mb-sm flex items-start justify-between gap-sm">
                  <h3 className="font-headline-md text-headline-md text-secondary uppercase">{product.title}</h3>
                  <span className="material-symbols-outlined text-primary text-2xl">{product.icon}</span>
                </div>
                <p className="mb-sm font-body-md text-sm leading-relaxed text-light-gray">{product.text}</p>

                <div className="mb-sm flex flex-wrap gap-xs">
                  {product.tags.map((tag) => (
                    <span key={tag} className="border border-outline-variant px-sm py-xs font-label-bold text-[11px] uppercase tracking-wider text-tertiary">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mb-md space-y-xs border-t border-outline-variant pt-sm">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex gap-xs font-body-md text-[13px] leading-snug text-light-gray">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-primary"></span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <a
                  className="mt-auto flex min-h-11 items-center justify-center gap-xs bg-primary px-md py-sm font-label-bold text-label-bold uppercase text-white transition-all hover:bg-white hover:text-black active:scale-[0.98]"
                  href={buildWhatsAppLink(product.title)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar orçamento
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pronta-entrega" className="scroll-mt-[88px] border-t border-outline-variant bg-surface-container-lowest px-margin py-lg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-md grid grid-cols-1 gap-sm border-l-4 border-primary pl-md md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="font-label-bold text-primary tracking-widest uppercase mb-xs block">Peças para pronta entrega</span>
              <h2 className="font-headline-md text-4xl text-secondary uppercase md:text-4xl">
                Itens de estoque para reposição rápida
              </h2>
            </div>
            <p className="font-body-md text-sm leading-relaxed text-light-gray md:col-span-5">
              Modelos com medidas padrão ou variações definidas para reposição direta.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-sm sm:grid-cols-1 lg:grid-cols-2">
            {stockItems.map((item) => (
              <article
                key={item.title}
                className="group grid grid-cols-1 overflow-hidden border border-outline-variant bg-surface-container transition-all hover:border-primary active:scale-[0.99] sm:grid-cols-[132px_1fr]"
              >
                <a
                  aria-label={`Solicitar ${item.title} para pronta entrega`}
                  className="relative block min-h-[112px] overflow-hidden bg-surface-container-highest sm:min-h-full"
                  href={buildStockWhatsAppLink(item.title)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover object-[var(--stock-mobile-position)] transition duration-500 group-hover:scale-[1.03] sm:object-[var(--stock-image-position)]"
                    src={item.image}
                    style={{
                      '--stock-mobile-position': item.mobileImagePosition || item.imagePosition || 'center center',
                      '--stock-image-position': item.imagePosition || 'center center',
                    }}
                  />
                  <div className="absolute left-0 top-0 h-1.5 w-full bg-primary"></div>
                </a>

                <div className="flex min-h-[142px] flex-col p-sm sm:min-h-[128px]">
                  <div className="mb-xs flex items-start justify-between gap-sm">
                    <div>
                      <span className="mb-xs block font-label-bold text-[10px] uppercase tracking-widest text-primary sm:text-[11px]">Pronta entrega</span>
                      <h3 className="font-headline-md text-lg uppercase leading-tight text-secondary sm:text-xl">{item.title}</h3>
                    </div>
                    <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                  </div>

                  <p className="mb-xs font-body-md text-xs leading-snug text-light-gray sm:text-[13px]">{item.text}</p>

                  <div className="mb-sm flex flex-wrap gap-xs">
                    {item.specs.map((spec) => (
                      <span key={spec} className="border border-outline-variant px-xs py-[3px] font-label-bold text-[9px] uppercase tracking-wider text-tertiary sm:text-[10px]">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <a
                    className="mt-auto inline-flex min-h-9 items-center justify-center gap-xs border border-primary px-sm py-xs font-label-bold text-[10px] uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white active:scale-[0.98] sm:w-fit sm:text-[11px]"
                    href={buildStockWhatsAppLink(item.title)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar peça
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest border-t-4 border-surface-container-highest px-margin py-xl w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-lg border-2 border-surface-variant p-lg relative overflow-hidden md:grid-cols-12 md:items-center">
          <div className="absolute top-0 left-0 hazard-stripes-primary w-2 h-full"></div>
          <div className="md:col-span-8">
            <span className="font-label-bold text-primary tracking-widest uppercase mb-sm block">Atendimento técnico</span>
            <h2 className="font-headline-lg text-4xl text-secondary uppercase mb-sm md:text-headline-lg">Não encontrou exatamente o que precisa?</h2>
            <p className="font-body-lg text-body-lg text-tertiary uppercase tracking-wide">
              Envie uma foto, desenho ou descrição da aplicação. A Freplan avalia a demanda e orienta o caminho para fabricar a peça correta.
            </p>
          </div>
          <div className="md:col-span-4">
            <a
              href={buildWhatsAppLink('uma peça sob medida')}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-14 w-full items-center justify-center bg-primary-container px-xl py-md font-label-bold text-label-bold uppercase text-on-primary-container transition-all hover:bg-white hover:text-black active:scale-[0.98]"
            >
              Falar com a Freplan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
