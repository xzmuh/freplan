import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteName = 'Freplan';
const baseTitle = siteName;

const routeSeo = {
  '/': {
    title: 'Freplan | Usinagem de Peças Sob Medida',
    description:
      'Freplan: usinagem de peças sob medida em Agudos, região de Bauru/SP. Tornearia, fabricação de peças industriais, engrenagens, eixos, roldanas e inox.',
  },
  '/products': {
    title: 'Freplan | Peças Industriais Sob Medida',
    description:
      'Catálogo Freplan de usinagem de peças sob medida: engrenagens, eixos, roldanas, helicóides, moldes, peças em inox, bicos de envase e componentes industriais.',
  },
  '/about': {
    title: 'Freplan | Usinagem, Tornearia e Soluções Industriais',
    description:
      'Conheça a Freplan em Agudos/SP, empresa que desde 2000 atua com usinagem de peças sob medida, tornearia e soluções industriais para a região de Bauru/SP.',
  },
  '/contact': {
    title: 'Freplan | Orçamento de Usinagem de Peças Sob Medida',
    description:
      'Fale com a Freplan para orçamento de usinagem de peças sob medida, tornearia, fabricação industrial, manutenção e peças de reposição em Agudos, Bauru/SP e todo o Brasil.',
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertJsonLd(id, data) {
  let element = document.head.querySelector(`#${id}`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.id = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const seo = routeSeo[location.pathname] || routeSeo['/'];
    const origin = window.location.origin;
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    const routePath = location.pathname === '/' ? '' : location.pathname;
    const pageUrl = `${origin}${basePath}/#${routePath || '/'}`;
    const imageUrl = `${origin}${basePath}/img/card-social.jpg`;
    const logoUrl = `${origin}${basePath}/img/brand/freplan-logomarca.png`;

    document.title = seo.title || baseTitle;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: siteName,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: pageUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:secure_url"]', {
      property: 'og:image:secure_url',
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:type"]', {
      property: 'og:image:type',
      content: 'image/jpeg',
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: 'og:image:width',
      content: '1200',
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: 'og:image:height',
      content: '720',
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: siteName,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: 'twitter:image:alt',
      content: siteName,
    });
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: pageUrl,
    });

    upsertJsonLd('freplan-website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      alternateName: ['Freplan Usinagem', 'Freplan Soluções Industriais', 'Freplan Usinagem Agudos'],
      url: `${origin}${basePath}/`,
      inLanguage: 'pt-BR',
      description: routeSeo['/'].description,
      publisher: {
        '@type': 'Organization',
        name: siteName,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
        },
      },
    });
  }, [location.pathname]);

  return null;
}
