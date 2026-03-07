import { useState } from 'react';
import { Link } from 'wouter';
import { products, categories } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { Clock, Truck, Award, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const featuredProducts = products.filter((p) => p.featured);
  const promotionProducts = products.filter((p) => p.category === 'promocoes');

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Obrigado por se inscrever!');
      setEmail('');
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/ahwD2ddPqsnE4wP56Q3ptx/hero-padaria-2a3UHStXVwCDSVHPqA8wLa.webp"
          alt="Padaria Artesanal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl animate-slide-in-left">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
                Padaria & Lanchonete
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Pães, bolos e salgados artesanais feitos com ingredientes naturais e muito amor. Entrega rápida para sua casa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#menu">
                  <a className="rustic-button inline-block text-center">
                    Ver Cardápio
                  </a>
                </Link>
                <a
                  href="tel:+5511987654321"
                  className="rustic-button-outline inline-block text-center text-white border-white hover:bg-white/10"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">Rápido</h3>
              <p className="text-sm text-muted-foreground">
                Entrega em 30-45 minutos
              </p>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <Truck className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">Entrega</h3>
              <p className="text-sm text-muted-foreground">
                Entregamos em toda a região
              </p>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">Qualidade</h3>
              <p className="text-sm text-muted-foreground">
                Ingredientes naturais e frescos
              </p>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">Amor</h3>
              <p className="text-sm text-muted-foreground">
                Feito com dedicação e carinho
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl font-bold mb-3">Destaques</h2>
            <p className="text-muted-foreground text-lg">
              Nossos produtos mais populares e amados pelos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12 md:py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl font-bold mb-3">Cardápio Completo</h2>
            <p className="text-muted-foreground text-lg">
              Explore todas as nossas deliciosas opções
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? 'rustic-button'
                  : 'rustic-button-outline'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'rustic-button'
                    : 'rustic-button-outline'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promocoes" className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl font-bold mb-3">Promoções Especiais</h2>
            <p className="text-muted-foreground text-lg">
              Combos incríveis com descontos imperdíveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-12 md:py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/ahwD2ddPqsnE4wP56Q3ptx/cafe-lanchonete-TjxHHQe8bkxM3NcJzJnEC6.webp"
                alt="Nossa Padaria"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="font-display text-4xl font-bold mb-4">Sobre Nós</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Há mais de 15 anos, nossa padaria e lanchonete vem servindo a comunidade com produtos artesanais de qualidade superior. Cada pão, bolo e salgado é feito com ingredientes naturais e muito cuidado.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Acreditamos que a qualidade não é negociável. Por isso, acordamos cedo todos os dias para preparar o melhor para você e sua família.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span>Prêmio Melhor Padaria 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span>Certificado de Qualidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span>Ingredientes 100% Naturais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Receba Nossas Promoções
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Inscreva-se em nossa newsletter e receba ofertas exclusivas e receitas especiais
            </p>
            <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-secondary text-white rounded-lg font-bold hover:bg-secondary/90 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-12 md:py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl font-bold mb-3">Entre em Contato</h2>
            <p className="text-muted-foreground text-lg">
              Estamos aqui para atender você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <Phone className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Telefone</h3>
              <a
                href="tel:+5511987654321"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                (11) 98765-4321
              </a>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Endereço</h3>
              <p className="text-muted-foreground">
                Rua das Flores, 123<br />
                São Paulo - SP
              </p>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:contato@padaria.com.br"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                contato@padaria.com.br
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-12 text-center">
            <h3 className="font-display text-2xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-background p-4 rounded-lg">
                <p className="font-bold">Segunda a Sexta</p>
                <p className="text-muted-foreground">6:00 - 20:00</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-bold">Sábado e Domingo</p>
                <p className="text-muted-foreground">7:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
