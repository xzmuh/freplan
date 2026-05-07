import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="bg-surface top-0 z-50 border-b-4 border-surface-container-highest w-full px-margin py-sm mx-auto sticky">
      <div className="flex items-center justify-between gap-sm">
        <Link to="/" className="font-headline-lg text-[32px] md:text-headline-lg leading-none font-bold text-secondary">
          FREPLAN
        </Link>

        <div className="hidden md:flex gap-lg">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>Sobre nós</Link>
          <Link to="/products" className={getLinkClass('/products')}>Soluções</Link>
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
