const contactItems = [
  {
    icon: 'call',
    label: 'Telefone e WhatsApp',
    value: '(14) 99870-1514',
    href: 'https://wa.me/5514998701514',
  },
  {
    icon: 'mail',
    label: 'E-mail',
    value: 'freplanusinagem@hotmail.com',
    href: 'mailto:freplanusinagem@hotmail.com',
  },
  {
    icon: 'photo_camera',
    label: 'Instagram',
    value: '@freplanusinagem',
    href: 'https://www.instagram.com/freplanusinagem/',
  },
  {
    icon: 'location_on',
    label: 'Endereço',
    value: 'Av. Carlos Gomes, box 4 - Agudos, SP',
    href: 'https://www.google.com/maps/search/?api=1&query=Av.%20Carlos%20Gomes%20box%204%20Agudos%20SP',
  },
];

export default function Contact() {
  const assetBase = import.meta.env.BASE_URL;
  const mapQuery = encodeURIComponent('Av. Carlos Gomes box 4 Agudos SP');

  return (
    <>
      <header className="relative overflow-hidden border-b-2 border-surface-variant bg-surface-container-low px-margin py-xl md:bg-surface-container-lowest">
        <div className="absolute inset-0 contact-hero-grid opacity-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(255,54,0,0.24),transparent_30%),linear-gradient(145deg,rgba(18,20,20,0.38),rgba(18,20,20,0.68)_62%,rgba(13,14,15,0.86))]"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-container-lowest/95 to-transparent"></div>
        <img
          aria-hidden="true"
          className="absolute -right-14 top-6 w-48 object-contain opacity-[0.06] sm:right-4 sm:w-56 lg:right-6 lg:top-8 lg:w-[min(26vw,300px)] lg:opacity-[0.08]"
          src={`${assetBase}img/brand/freplan-simbolo.png`}
          alt=""
        />
        <div className="relative mx-auto grid w-full max-w-[calc(100vw-32px)] grid-cols-1 gap-xl md:max-w-7xl lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="min-w-0">
            <div className="hazard-stripes-primary mb-md h-1.5 w-24"></div>
            <p className="mb-sm font-label-bold text-label-bold uppercase tracking-widest text-primary">
              Contato
            </p>
            <h1 className="mb-md max-w-5xl break-words font-headline-xl text-[clamp(30px,8.4vw,36px)] uppercase text-secondary [overflow-wrap:anywhere] md:text-headline-xl">
              Fale com a Freplan para encontrar a melhor solução.
            </h1>
          </div>

          <div className="w-full min-w-0 max-w-[calc(100vw-32px)] overflow-hidden border-l-4 border-primary bg-surface/70 p-md md:max-w-full">
            <p className="max-w-[32ch] break-words font-body-lg text-base leading-relaxed text-on-surface-variant [overflow-wrap:anywhere] sm:max-w-full sm:text-body-lg">
              Atendimento para usinagem, tornearia, fabricação sob medida e manutenção industrial, com envio para todo o Brasil.
            </p>
            <div className="mt-lg grid w-full max-w-[32ch] grid-cols-1 gap-sm sm:max-w-full sm:grid-cols-2">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center bg-primary px-md py-sm text-center font-label-bold text-label-bold uppercase text-white transition-all hover:bg-white hover:text-primary active:scale-[0.98]"
                href="https://wa.me/5514998701514"
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <a
                className="inline-flex min-h-12 w-full items-center justify-center border-2 border-primary px-md py-sm text-center font-label-bold text-label-bold uppercase text-primary transition-all hover:bg-primary hover:text-white active:scale-[0.98]"
                href="mailto:freplanusinagem@hotmail.com"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="overflow-hidden px-margin py-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="grid min-w-0 grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item) => (
              <a
                key={item.label}
                className="group min-w-0 border border-surface-container-highest bg-surface-container-low p-md transition-colors hover:border-primary"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="material-symbols-outlined mb-md text-4xl text-primary">
                  {item.icon}
                </span>
                <p className="mb-xs font-label-bold text-label-bold uppercase tracking-widest text-light-gray">
                  {item.label}
                </p>
                <p className="break-words font-headline-md text-headline-md text-secondary group-hover:text-primary [overflow-wrap:anywhere]">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <div className="min-w-0 overflow-hidden border-2 border-surface-variant bg-surface-container-lowest">
            <div className="grid grid-cols-1 border-b border-surface-variant md:grid-cols-3">
              <div className="border-b border-surface-variant p-md md:border-b-0 md:border-r">
                <span className="font-label-bold text-label-bold uppercase text-primary">Horário</span>
                <p className="mt-sm font-headline-md text-headline-md uppercase text-secondary">
                  8h às 18h
                </p>
                <p className="mt-xs font-body-md text-body-md text-light-gray">
                  Segunda a sexta
                </p>
              </div>
              <div className="border-b border-surface-variant p-md md:border-b-0 md:border-r">
                <span className="font-label-bold text-label-bold uppercase text-primary">Envio</span>
                <p className="mt-sm font-headline-md text-headline-md uppercase text-secondary">
                  Todo Brasil
                </p>
                <p className="mt-xs font-body-md text-body-md text-light-gray">
                  Peças e soluções sob demanda
                </p>
              </div>
              <div className="p-md">
                <span className="font-label-bold text-label-bold uppercase text-primary">Local</span>
                <p className="mt-sm font-headline-md text-headline-md uppercase text-secondary">
                  Agudos, SP
                </p>
                <p className="mt-xs font-body-md text-body-md text-light-gray">
                  Av. Carlos Gomes, box 4
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] min-h-[360px] overflow-hidden bg-surface md:aspect-[16/9]">
              <iframe
                className="h-full w-full grayscale invert-[0.9] contrast-125"
                title="Mapa da Freplan em Agudos, SP"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-surface-container-lowest to-transparent"></div>
            </div>

            <div className="flex flex-col gap-sm border-t border-surface-variant p-md sm:flex-row sm:items-center sm:justify-between">
              <p className="font-body-md text-body-md text-light-gray">
                Av. Carlos Gomes, box 4 - Agudos, SP
              </p>
              <a
                className="inline-flex min-h-11 items-center justify-center bg-primary px-md py-sm font-label-bold text-label-bold uppercase text-white transition-all hover:bg-white hover:text-primary active:scale-[0.98]"
                href="https://www.google.com/maps/search/?api=1&query=Av.%20Carlos%20Gomes%20box%204%20Agudos%20SP"
                target="_blank"
                rel="noreferrer"
              >
                Abrir no mapa
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
