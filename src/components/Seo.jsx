import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const baseTitle = 'Freplan';

const routeSeo = {
  '/': {
    title: 'Freplan | Peças Industriais Sob Medida para Todo o Brasil',
    description:
      'Freplan: tornearia, usinagem e fabricação de peças industriais sob medida para manutenção, reposição e projetos especiais em todo o Brasil.',
  },
  '/products': {
    title: 'Peças Industriais Sob Medida | Freplan Usinagem para Todo o Brasil',
    description:
      'Catálogo Freplan de engrenagens, eixos, roldanas, helicóides, moldes, peças em inox, bicos de envase e componentes industriais sob medida com envio nacional.',
  },
  '/about': {
    title: 'Sobre a Freplan | Usinagem, Tornearia e Soluções Industriais',
    description:
      'Conheça a Freplan, empresa que desde 2000 fabrica peças, adaptações e soluções industriais sob medida com precisão e confiabilidade.',
  },
  '/contact': {
    title: 'Contato Freplan | Orçamento de Usinagem e Peças Industriais',
    description:
      'Fale com a Freplan para orçamento de usinagem, tornearia, fabricação sob medida, manutenção industrial e peças de reposição em todo o Brasil.',
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
    const imageUrl = `${origin}${basePath}/img/brand/freplan-logomarca.png`;

    document.title = seo.title || baseTitle;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
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
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: pageUrl,
    });

    upsertJsonLd('freplan-website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Freplan',
      url: `${origin}${basePath}/`,
      inLanguage: 'pt-BR',
      description: routeSeo['/'].description,
      publisher: {
        '@type': 'Organization',
        name: 'Freplan',
        logo: {
          '@type': 'ImageObject',
          url: imageUrl,
        },
      },
    });
  }, [location.pathname]);

  return null;
}
