import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-display text-xl font-bold">Padaria & Lanchonete</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Pães, bolos e salgados artesanais feitos com ingredientes naturais e muito amor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#menu">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Cardápio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#promocoes">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Promoções
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#sobre">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/rastrear">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Rastrear Pedido
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contato">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+5511987654321"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (11) 98765-4321
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:contato@padaria.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@padaria.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  Rua das Flores, 123<br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold mb-4">Redes Sociais</h4>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <p>
              &copy; 2026 Padaria & Lanchonete. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
