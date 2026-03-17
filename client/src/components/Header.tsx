import { useState } from 'react';
import { Link } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container">
        {/* Top Bar - Info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(11) 98765-4321</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Entrega em 30-45 minutos</span>
            </div>
          </div>
          <div className="text-xs">Seg-Dom: 6h às 20h</div>
        </div>

        {/* Main Navigation */}
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-display text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              <span>Padaria & Lanchonete</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#menu" className="text-foreground hover:text-primary transition-colors font-medium">
              Cardápio
            </a>

            <a href="/#promocoes" className="text-foreground hover:text-primary transition-colors font-medium">
              Promoções
            </a>

            <a href="/#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </a>

            <a href="/rastrear" className="text-foreground hover:text-primary transition-colors font-medium">
              Rastrear
            </a>
            <a href="/#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <a className="relative">
                <button className="rustic-button flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="hidden sm:inline">Carrinho</span>
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </button>
              </a>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 animate-fade-in-up">
            <div className="flex flex-col gap-3 py-4">
              <Link href="/#menu">
                <a
                  className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cardápio
                </a>
              </Link>
              <Link href="/#promocoes">
                <a
                  className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Promoções
                </a>
              </Link>
              <Link href="/#sobre">
                <a
                  className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre
                </a>
              </Link>
              <Link href="/rastrear">
                <a
                  className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Rastrear Pedido
                </a>
              </Link>
              <Link href="/#contato">
                <a
                  className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </a>
              </Link>
              <div className="flex gap-2 pt-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">(11) 98765-4321</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
