import { Link } from 'wouter';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="container text-center py-20">
        <div className="text-8xl mb-6">🥐</div>
        <h1 className="font-display text-5xl font-bold mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Página não encontrada
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          Desculpe, a página que você procura não existe. Que tal voltar para o cardápio?
        </p>
        <Link href="/">
          <a className="rustic-button inline-block">
            Voltar ao Cardápio
          </a>
        </Link>
      </div>
    </main>
  );
}
