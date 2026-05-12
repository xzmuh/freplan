import { useEffect, useRef } from 'react';

export default function Home() {
  const categoryScrollerRef = useRef(null);
  const categoryAutoScrollRef = useRef(0);
  const categoryDragRef = useRef({
    isDragging: false,
    moved: false,
    pauseUntil: 0,
    scrollLeft: 0,
    startX: 0,
  });
  const assetBase = import.meta.env.BASE_URL;
  const categoryRail = [
    {
      title: 'Engrenagens',
      text: 'Rodas dentadas e reposição sob medida',
      image: `${assetBase}img/optimized/produtos-engrenagem.jpg`,
      icon: 'settings',
    },
    {
      title: 'Eixos',
      text: 'Peças torneadas para máquinas e conjuntos',
      image: `${assetBase}img/optimized/produtos-eixos.jpg`,
      icon: 'straighten',
    },
    {
      title: 'Moldes',
      text: 'Componentes especiais por amostra ou desenho',
      image: `${assetBase}img/optimized/produtos-moldes.jpg`,
      icon: 'architecture',
    },
    {
      title: 'Peças em inox',
      text: 'Soluções resistentes para uso industrial',
      image: `${assetBase}img/optimized/produtos-componentes-inox.jpg`,
      icon: 'verified',
    },
    {
      title: 'Helicóide',
      text: 'Transporte contínuo de materiais',
      image: `${assetBase}img/optimized/produtos-helicoide.jpg`,
      icon: 'sync_alt',
    },
    {
      title: 'Envase',
      text: 'Bicos, conexões e peças de reposição',
      image: `${assetBase}img/optimized/produtos-envase.jpg`,
      icon: 'precision_manufacturing',
    },
    {
      title: 'Roldanas de tração',
      text: 'Roldanas revestidas e cubos usinados',
      image: `${assetBase}img/optimized/produtos-roldanas-tracao.jpg`,
      icon: 'motion_photos_auto',
    },
    {
      title: 'Rosqueadeiras',
      text: 'Componentes para rosqueamento técnico',
      image: `${assetBase}img/optimized/produtos-rosqueadeiras2.jpg`,
      imagePosition: 'center bottom',
      icon: 'build_circle',
    },
  ];
  const categoryRailLoop = [...categoryRail, ...categoryRail];

  useEffect(() => {
    const scroller = categoryScrollerRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!scroller || prefersReducedMotion) return undefined;

    let animationFrame = 0;
    let lastTime = performance.now();
    categoryAutoScrollRef.current = scroller.scrollLeft;

    const tick = (time) => {
      const drag = categoryDragRef.current;
      const delta = time - lastTime;
      const loopPoint = scroller.scrollWidth / 2;

      if (!drag.isDragging && time > drag.pauseUntil && loopPoint > 0) {
        categoryAutoScrollRef.current += delta * 0.06;

        if (categoryAutoScrollRef.current >= loopPoint) {
          categoryAutoScrollRef.current -= loopPoint;
        }

        scroller.scrollLeft = categoryAutoScrollRef.current;
      }

      lastTime = time;
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleCategoryPointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;

    const scroller = categoryScrollerRef.current;
    if (!scroller) return;

    categoryDragRef.current = {
      isDragging: true,
      moved: false,
      pauseUntil: Number.POSITIVE_INFINITY,
      scrollLeft: scroller.scrollLeft,
      startX: event.clientX,
    };

    scroller.classList.add('is-dragging');
  };

  const handleCategoryPointerMove = (event) => {
    const scroller = categoryScrollerRef.current;
    const drag = categoryDragRef.current;

    if (!scroller || !drag.isDragging) return;

    const distance = event.clientX - drag.startX;

    if (Math.abs(distance) > 4) {
      drag.moved = true;
    }

    const loopPoint = scroller.scrollWidth / 2;
    let nextScrollLeft = drag.scrollLeft - distance;

    if (loopPoint > 0) {
      if (nextScrollLeft >= loopPoint) {
        nextScrollLeft -= loopPoint;
        drag.scrollLeft -= loopPoint;
      } else if (nextScrollLeft < 0) {
        nextScrollLeft += loopPoint;
        drag.scrollLeft += loopPoint;
      }
    }

    scroller.scrollLeft = nextScrollLeft;
    categoryAutoScrollRef.current = nextScrollLeft;
  };

  const handleCategoryPointerUp = (event) => {
    const scroller = categoryScrollerRef.current;
    const drag = categoryDragRef.current;

    if (!scroller || !drag.isDragging) return;

    drag.isDragging = false;
    drag.pauseUntil = performance.now() + 700;
    categoryAutoScrollRef.current = scroller.scrollLeft;
    scroller.classList.remove('is-dragging');
  };

  const handleCategoryClick = (event) => {
    if (categoryDragRef.current.moved) {
      event.preventDefault();
      categoryDragRef.current.moved = false;
    }
  };

  return (
    <>
      <section className="relative min-h-[calc(100dvh-72px)] md:min-h-[calc(100dvh-88px)] flex items-center overflow-hidden py-[clamp(40px,8dvh,88px)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 technical-grid-soft opacity-60"></div>
          <img
            alt="Estrutura industrial"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-32 grayscale"
            src={`${assetBase}img/optimized/hero.jpg`}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/94 via-surface/72 to-surface/34"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-surface/22 via-transparent to-surface/58"></div>
          <img
            aria-hidden="true"
            className="absolute left-[max(32px,8vw)] top-1/2 hidden w-[min(30vw,360px)] -translate-y-1/2 object-contain opacity-[0.09] lg:block"
            src={`${assetBase}img/brand/freplan-simbolo.png`}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative z-10 px-margin w-full max-w-7xl mx-auto">
          <div className="hazard-stripes-primary h-1.5 w-20 md:w-24 mb-sm md:mb-md"></div>
          <div className="mb-sm flex flex-wrap gap-xs md:hidden">
            <span className="border border-primary/80 bg-primary/10 px-sm py-xs font-label-bold text-[11px] uppercase tracking-widest text-primary">
              Peças sob medida
            </span>
            <span className="border border-outline-variant bg-surface/70 px-sm py-xs font-label-bold text-[11px] uppercase tracking-widest text-secondary">
              Envio Brasil
            </span>
          </div>
          <h1 className="font-headline-xl text-[clamp(34px,10.5vw,48px)] leading-[0.95] text-secondary uppercase mb-md max-w-5xl md:text-headline-xl md:leading-none">
            <span className="md:hidden">Peças sob medida para sua linha <span className="text-primary">não parar</span>.</span>
            <span className="hidden md:inline">Soluções sob medida para operações que <span className="text-primary">não podem parar</span>.</span>
          </h1>

          <p className="font-body-lg text-base leading-relaxed text-on-surface-variant mb-md max-w-2xl border-l border-primary pl-md md:mb-xl md:text-body-lg md:pl-lg">
            <span className="md:hidden">Usinagem, tornearia e componentes industriais com atendimento técnico para todo o Brasil.</span>
            <span className="hidden md:inline">Tornearia, usinagem e fabricação de componentes industriais sob medida para empresas de todo o Brasil, com precisão, qualidade e foco na necessidade real de cada aplicação.</span>
          </p>

          <div className="mb-md grid grid-cols-[1.15fr_0.85fr] gap-xs md:hidden">
            <a
              href={`${assetBase}#/products`}
              className="group relative min-h-[164px] overflow-hidden border-2 border-primary bg-surface-container active:scale-[0.99]"
              aria-label="Conheça as soluções industriais da Freplan"
            >
              <img
                alt="Eixos industriais usinados pela Freplan"
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-active:scale-[1.03]"
                src={`${assetBase}img/optimized/produtos-eixos.jpg`}
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-x-0 top-0 h-2 bg-primary"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface/88 via-transparent bg-surface/10"></div>
              <div className="absolute bottom-sm left-sm right-sm">
                <span className="font-label-bold text-[12px] uppercase tracking-widest text-primary">Usinagem</span>
                {/* <p className="font-headline-md text-2xl uppercase leading-none text-secondary">Eixos e componentes</p> */}
              </div>
            </a>
            <div className="grid gap-xs">
              <a
                href={`${assetBase}#/products`}
                className="relative min-h-[78px] overflow-hidden border border-outline-variant bg-surface-container active:scale-[0.99]"
                aria-label="Ver engrenagens industriais"
              >
                <img
                  alt="Engrenagem industrial usinada pela Freplan"
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                  src={`${assetBase}img/optimized/produtos-engrenagem.jpg`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-surface/50"></div>
                <span className="absolute bottom-xs left-xs font-label-bold text-[10px] uppercase tracking-widest text-secondary">Engrenagens</span>
              </a>
              <a
                href={`${assetBase}#/products`}
                className="relative min-h-[78px] overflow-hidden border border-outline-variant bg-surface-container active:scale-[0.99]"
                aria-label="Ver peças em inox"
              >
                <img
                  alt="Peças em inox usinadas pela Freplan"
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                  src={`${assetBase}img/optimized/produtos-componentes-inox.jpg`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-surface/45"></div>
                <span className="absolute bottom-xs left-xs font-label-bold text-[10px] uppercase tracking-widest text-secondary">Inox</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-sm max-w-xl sm:flex sm:flex-row">
            <button onClick={() => window.open(`${assetBase}#/products`, '_blank')} className="group flex min-h-14 w-full items-center justify-center gap-xs bg-primary px-md py-sm font-label-bold text-label-bold uppercase text-white transition-all hover:bg-white hover:text-black active:scale-[0.98] sm:w-auto md:min-h-12 md:text-secondary">
              Conheça nossas soluções
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button onClick={() => window.open('https://wa.me/5514998701514', '_blank')} className="w-full sm:w-auto min-h-12 border-2 border-primary text-primary font-label-bold text-label-bold uppercase px-md py-sm text-md hover:bg-primary hover:text-white transition-all active:scale-[0.98]">
              Falar com a Freplan
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-outline-variant bg-surface-container-lowest">
        <div className="absolute inset-0 technical-grid-soft opacity-55 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto py-md">
          <div className="grid grid-cols-1 gap-md lg:grid-cols-[280px_1fr_180px] lg:items-center">
            <div className="px-margin lg:px-0">
              <span className="font-label-bold text-label-bold text-primary uppercase tracking-widest block mb-xs">O que fabricamos</span>
              <h2 className="font-headline-md text-2xl uppercase text-secondary">Categorias para identificar sua demanda</h2>
            </div>

            <div
              ref={categoryScrollerRef}
              className="category-scroller relative -mx-margin overflow-x-auto lg:mx-0"
              onPointerDown={handleCategoryPointerDown}
              onPointerMove={handleCategoryPointerMove}
              onPointerUp={handleCategoryPointerUp}
              onPointerCancel={handleCategoryPointerUp}
              onPointerLeave={handleCategoryPointerUp}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-surface-container-lowest to-transparent md:block"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-surface-container-lowest to-transparent md:block"></div>
              <div className="category-marquee flex w-max gap-sm px-margin lg:px-0">
                {categoryRailLoop.map((category, index) => (
                  <a
                    key={`${category.title}-${index}`}
                    href={`${assetBase}#/products`}
                    className="group grid w-[250px] shrink-0 grid-cols-[82px_1fr] overflow-hidden border border-outline-variant bg-surface-container transition-all hover:border-primary active:scale-[0.98]"
                    aria-label={`Ver produtos de ${category.title}`}
                    onClick={handleCategoryClick}
                  >
                    <div className="relative h-full min-h-[92px] bg-surface-container-high">
                      <img
                        alt={category.title}
                        src={category.image}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover  transition duration-500  group-hover:scale-[1.04]"
                        style={category.imagePosition ? { objectPosition: category.imagePosition } : undefined}
                      />
                      <div className="absolute inset-x-0 top-0 h-1 bg-primary"></div>
                    </div>
                    <div className="flex min-h-[92px] flex-col justify-between p-sm">
                      <div>
                        <span className="font-headline-md text-xl uppercase text-secondary block leading-none">{category.title}</span>
                        <span className="mt-xs block font-body-md text-sm leading-snug text-light-gray">{category.text}</span>
                      </div>
                      <span className="material-symbols-outlined text-primary text-2xl self-end">{category.icon}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a
              href={`${assetBase}#/products`}
              className="mx-margin flex min-h-12 items-center justify-center gap-xs border-2 border-primary px-md py-sm font-label-bold text-label-bold uppercase text-primary transition-all hover:bg-primary hover:text-white active:scale-[0.98] lg:mx-0"
            >
              Ver produtos
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-xl px-margin bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div>
            <span className="font-label-bold text-primary tracking-widest uppercase mb-sm block">Desde 2000</span>
            <h2 className="font-headline-lg text-4xl uppercase text-secondary mb-md md:text-headline-lg">Especializada em fabricação sob medida</h2>
            <p className="font-body-lg text-on-surface-variant mb-md">
              A Freplan atua no desenvolvimento e fabricação de peças e soluções industriais para diferentes segmentos da indústria, atendendo demandas de manutenção, reposição e projetos especiais em todo o Brasil. Com experiência prática e foco em qualidade, trabalha lado a lado com seus clientes para entregar soluções funcionais, confiáveis e compatíveis com a realidade operacional de cada projeto.
              <br />
              Além da fabricação, a empresa busca compreender as necessidades específicas de cada cliente, oferecendo suporte técnico, precisão nos processos e compromisso em transformar demandas industriais em soluções eficientes, duráveis e aplicáveis no dia a dia da operação.            </p>
            <div className="grid grid-cols-2 gap-lg border-t border-outline pt-md mt-lg">
              <div>
                <div className="text-primary font-headline-md text-4xl mb-1">2000</div>
                <div className="font-label-bold uppercase text-xs tracking-widest text-secondary/60">início da trajetória</div>
              </div>
              <div>
                <div className="text-primary font-headline-md text-4xl mb-1">Brasil</div>
                <div className="font-label-bold uppercase text-xs tracking-widest text-secondary/60">envio nacional</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
              <img
                alt="Lote de peças industriais fabricadas pela Freplan"
                className="w-full h-full object-cover grayscale"
                src={`${assetBase}img/optimized/home-lote-pecas.jpg`}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 border-[14px] border-surface/50 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-md hidden md:block">
              <span className="font-label-bold text-secondary text-xs uppercase">Usinagem, tornearia e plaina</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-xl px-margin border-t border-outline technical-grid-soft">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col mb-xl gap-sm">
            <span className="font-label-bold text-primary tracking-widest uppercase">Serviços</span>
            <h2 className="font-headline-lg text-4xl uppercase text-secondary md:text-headline-lg">Capacidade de atender desafios de diferentes escalas</h2>
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
                  <span className="font-headline-xl text-4xl md:text-headline-xl text-outline/50 group-hover:text-primary transition-colors">{number}</span>
                  <h3 className="font-headline-xl text-4xl md:text-5xl uppercase text-secondary">{title}</h3>
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

      <section className="relative py-[150px] px-margin bg-surface-container/20 overflow-hidden machined-lines-soft">
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-transparent to-surface/95 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col mb-xl gap-sm items-center text-center">
            <span className="font-label-bold text-primary tracking-widest uppercase">Processo</span>
            <h2 className="font-headline-lg text-4xl uppercase text-secondary md:text-headline-lg">Do entendimento à aplicação final</h2>
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
              <h2 className="font-headline-lg text-4xl uppercase text-secondary md:text-headline-lg">Compromisso com qualidade, precisão e confiabilidade</h2>
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
        <div className="relative max-w-7xl mx-auto text-center py-xl border-y border-outline overflow-hidden technical-grid-soft">
          <div className="absolute inset-0 bg-surface/88 pointer-events-none"></div>
          <div className="relative px-md">
            <h2 className="font-headline-lg text-4xl uppercase mb-md md:text-headline-lg">
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
        </div>
      </section>
    </>
  );
}
