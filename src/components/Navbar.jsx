import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const assetBase = import.meta.env.BASE_URL;

  const getLinkClass = (path) => {
    const baseClass = 'font-headline-md text-headline-md uppercase transition-colors ';
    if (location.pathname === path) {
      return baseClass + 'text-primary border-b-4 border-primary pb-1';
    }
    return baseClass + 'text-secondary hover:text-primary';
  };

  const mobileLinkClass = (path) => {
    const baseClass = 'block border-b border-surface-container-highest py-sm font-headline-md text-headline-md uppercase transition-colors ';
    return location.pathname === path
      ? baseClass + 'text-primary'
      : baseClass + 'text-secondary hover:text-primary';
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b-4 border-surface-container-highest bg-surface/82 px-margin py-sm backdrop-blur-md">
      <div className="flex items-center justify-between gap-sm">
        <Link to="/" className="shrink-0 transition-opacity hover:opacity-85" aria-label="Freplan - Home">
          <img
            className="h-9 w-auto max-w-[160px] object-contain md:h-11 md:max-w-[210px]"
            src={`${assetBase}img/brand/freplan-logomarca.png`}
            alt="Freplan"
          />
        </Link>

        <div className="hidden md:flex gap-lg">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>Sobre nós</Link>
          <Link to="/products" className={getLinkClass('/products')}>Soluções</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contato</Link>
        </div>

        <button onClick={() => window.open('https://wa.me/5514998701514', '_blank')} className="hidden md:inline-flex bg-primary-container text-on-primary-container font-label-bold text-label-bold uppercase px-lg py-sm hover:bg-white hover:text-black transition-all duration-150 active:scale-95 border-b-4 border-primary">
          Solicitar orçamento
        </button>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden grid h-11 w-11 place-items-center border border-surface-container-highest text-secondary active:scale-95 transition-transform"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-current transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-current transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </span>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-sm pb-xs">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/')}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/about')}>Sobre nós</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/products')}>Soluções</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/contact')}>Contato</Link>
          <button
            onClick={() => window.open('https://wa.me/5514998701514', '_blank')}
            className="mt-sm w-full bg-primary-container text-on-primary-container font-label-bold text-label-bold uppercase px-md py-sm transition-all active:scale-[0.98] border-b-4 border-primary"
          >
            Solicitar orçamento
          </button>
        </div>
      </div>
    </nav>
  );
}
