import { Link } from 'react-router-dom';

const navGroups = [
  {
    title: 'Navegação',
    links: [
      ['Home', '/'],
      ['Produtos', '/products'],
      ['Sobre nós', '/about'],
      ['Contato', '/contact'],
    ],
  },
  {
    title: 'Soluções',
    links: [
      ['Usinagem', '/products'],
      ['Tornearia', '/products'],
      ['Fresagem', '/products'],
      ['Eixos', '/products'],
      ['Engrenagens', '/products'],
      ['Peças sob medida', '/products'],
    ],
  },
  {
    title: 'Atendimento',
    links: [
      ['Orçamento técnico', '/contact'],
      ['Fabricação sob medida', '/products'],
      ['Manutenção industrial', '/products'],
      ['Projetos por amostra', '/products'],
    ],
  },
];

export default function Footer() {
  const assetBase = import.meta.env.BASE_URL;
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-outline-variant bg-surface-container-lowest">
      <div className="absolute inset-0 technical-grid-soft opacity-45"></div>
      <img
        aria-hidden="true"
        className="absolute bottom-[-38px] left-[-24px] w-[92vw] opacity-[0.035] grayscale sm:bottom-[-90px] sm:left-[-42px] sm:w-[min(72vw,760px)] sm:opacity-[0.075]"
        src={`${assetBase}img/brand/freplan-logotipo.png`}
        alt=""
      />
      {/* <img
        aria-hidden="true"
        className="absolute right-[max(24px,8vw)] top-1/2 hidden w-[min(24vw,320px)] -translate-y-1/2 opacity-[0.08] lg:block"
        src={`${assetBase}img/brand/freplan-simbolo.png`}
        alt=""
      /> */}

      <div className="relative mx-auto max-w-7xl px-margin py-xl md:px-0">
        <div className="hazard-stripes-primary mb-lg h-2 w-full"></div>

        <div className="grid grid-cols-1 gap-lg lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex transition-opacity hover:opacity-85" aria-label="Freplan - Home">
              <img
                className="h-16 w-auto max-w-[220px] object-contain md:h-20"
                src={`${assetBase}img/brand/freplan-logotipo.png`}
                alt="Freplan"
              />
            </Link>

            <h2 className="mt-lg max-w-xl font-headline-lg text-headline-lg uppercase text-secondary">
              Peças industriais sob medida, fabricadas para operação real.
            </h2>
            <p className="mt-md max-w-xl font-body-md text-body-md text-light-gray">
              Tornearia, usinagem e desenvolvimento de componentes para manutenção, reposição e melhoria de equipamentos industriais.
            </p>

            <div className="mt-lg grid grid-cols-1 gap-sm sm:grid-cols-2">
              <a
                className="flex min-h-12 items-center justify-center bg-primary px-md py-sm font-label-bold text-label-bold uppercase text-white transition-all hover:bg-white hover:text-black active:scale-[0.98]"
                href="https://wa.me/5514998701514?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico%20com%20a%20Freplan."
                target="_blank"
                rel="noreferrer"
              >
                Solicitar orçamento
              </a>
              <Link
                className="flex min-h-12 items-center justify-center border-2 border-primary px-md py-sm font-label-bold text-label-bold uppercase text-primary transition-all hover:bg-primary hover:text-white active:scale-[0.98]"
                to="/products"
              >
                Ver catálogo
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-md md:grid-cols-3">
              {navGroups.map((group) => (
                <div key={group.title} className="border-t border-outline-variant pt-md">
                  <div className="mb-sm flex items-center gap-sm">
                    <span className="h-1.5 w-1.5 bg-primary"></span>
                    <h3 className="font-label-bold text-label-bold uppercase tracking-widest text-primary">{group.title}</h3>
                  </div>
                  <nav className="flex flex-col gap-sm">
                    {group.links.map(([label, to]) => (
                      <Link
                        key={label}
                        className="font-label-bold text-label-bold uppercase text-light-gray transition-colors hover:text-secondary"
                        to={to}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>

            <div className="mt-lg grid grid-cols-1 gap-md border-y border-outline-variant py-md md:grid-cols-3">
              <div>
                <span className="font-label-bold text-[11px] uppercase tracking-widest text-primary">Localização</span>
                <p className="mt-xs font-body-md text-sm text-light-gray">Av. Carlos Gomes, box 4 - Agudos, SP</p>
              </div>
              <div>
                <span className="font-label-bold text-[11px] uppercase tracking-widest text-primary">Contato</span>
                <a className="mt-xs block font-body-md text-sm text-light-gray transition-colors hover:text-secondary" href="https://wa.me/5514998701514" target="_blank" rel="noreferrer">
                  (14) 99870-1514
                </a>
                <a className="mt-xs block font-body-md text-sm text-light-gray transition-colors hover:text-secondary" href="mailto:[EMAIL_ADDRESS]" target="_blank" rel="noreferrer">
                  freplanusinagem@hotmail.com
                </a>
              </div>
              <div>
                <span className="font-label-bold text-[11px] uppercase tracking-widest text-primary">Atuação</span>
                <p className="mt-xs font-body-md text-sm text-light-gray">Desde 2000 fabricando soluções industriais.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-xl flex flex-col gap-sm border-t border-outline-variant pt-md md:flex-row md:items-center md:justify-between">
          <p className="font-body-md text-sm text-light-gray">© {year} Freplan. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-sm font-label-bold text-[11px] uppercase tracking-widest text-light-gray">
            <span>Tornearia</span>
            <span className="text-primary">/</span>
            <span>Usinagem</span>
            <span className="text-primary">/</span>
            <span>Fabricação sob medida</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
