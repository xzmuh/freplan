import { Link } from 'react-router-dom';

export default function Footer() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <footer className="bg-surface-container-lowest w-full mt-auto border-t-4 border-surface-container-highest flex flex-col md:flex-row justify-between items-center px-margin py-lg gap-md relative overflow-hidden">
      <div className="absolute top-0 left-0 hazard-stripes-primary h-2 w-full"></div>
      <Link to="/" className="pt-4 transition-opacity hover:opacity-85" aria-label="Freplan - Home">
        <img
          className="h-16 w-auto max-w-[210px] object-contain md:h-20"
          src={`${assetBase}img/brand/freplan-logotipo.png`}
          alt="Freplan"
        />
      </Link>
      <div className="font-label-bold text-label-bold uppercase text-secondary text-center md:text-left pt-4 max-w-xl">
        Fabricando soluções industriais sob medida com precisão, confiabilidade e foco no desempenho operacional.
      </div>
      <div className="flex flex-wrap justify-center gap-md pt-4">
        <Link to="/" className="text-light-gray hover:text-secondary font-label-bold text-label-bold uppercase transition-colors">Home</Link>
        <Link to="/products" className="text-light-gray hover:text-secondary font-label-bold text-label-bold uppercase transition-colors">Soluções</Link>
        <Link to="/about" className="text-light-gray hover:text-secondary font-label-bold text-label-bold uppercase transition-colors">Sobre nós</Link>
        <Link to="/contact" className="text-light-gray hover:text-secondary font-label-bold text-label-bold uppercase transition-colors">Contato</Link>
      </div>
    </footer>
  );
}
