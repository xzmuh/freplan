import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full mt-auto border-t-4 border-surface-container-highest flex flex-col md:flex-row justify-between items-center px-margin py-lg gap-md relative">
      <div className="absolute top-0 left-0 hazard-stripes-primary h-2 w-full"></div>
      <div className="text-headline-md font-headline-md text-primary uppercase pt-4">
        FREPLAN
      </div>
      <div className="font-label-bold text-label-bold uppercase text-secondary text-center md:text-left pt-4 max-w-xl">
        Fabricando soluções industriais sob medida com precisão, confiabilidade e foco no desempenho operacional.
      </div>
      <div className="flex flex-wrap justify-center gap-md pt-4">
        <Link to="/" className="text-light-gray hover:text-secondary font-label-bold text-label-bold uppercase transition-colors">Home</Link>
        <Link to="/products" className="text-light-gray hover:text-secondary font-label-bold text-label-bold uppercase transition-colors">Soluções</Link>
        <Link to="/about" className="text-light-gray hover:text-secondary font-label-bold text-label-bold uppercase transition-colors">Sobre nós</Link>
      </div>
    </footer>
  );
}
