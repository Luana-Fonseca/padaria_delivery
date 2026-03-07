import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Package, Truck, CheckCircle, Clock } from 'lucide-react';

interface Order {
  id: string;
  status: 'preparing' | 'ready' | 'delivery' | 'delivered';
  items: number;
  total: number;
  estimatedTime: string;
  address: string;
}

export default function OrderTracking() {
  const [trackingCode, setTrackingCode] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);

    // Simular busca de pedido
    if (trackingCode.length > 0) {
      setOrder({
        id: trackingCode,
        status: 'delivery',
        items: 5,
        total: 45.90,
        estimatedTime: '15 minutos',
        address: 'Rua das Flores, 123 - São Paulo, SP',
      });
    } else {
      setOrder(null);
    }
  };

  const statusSteps = [
    { key: 'preparing', label: 'Preparando', icon: Package },
    { key: 'ready', label: 'Pronto', icon: CheckCircle },
    { key: 'delivery', label: 'Em Entrega', icon: Truck },
    { key: 'delivered', label: 'Entregue', icon: CheckCircle },
  ];

  const currentStatusIndex = order
    ? statusSteps.findIndex((s) => s.key === order.status)
    : -1;

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-8">
        <Link href="/">
          <a className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </a>
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl font-bold mb-8 text-center">
            Rastrear Pedido
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-12">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Digite o código do pedido"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="rustic-button"
              >
                Rastrear
              </button>
            </div>
          </form>

          {/* Results */}
          {searched && !order && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-muted-foreground text-lg">
                Pedido não encontrado. Verifique o código e tente novamente.
              </p>
            </div>
          )}

          {order && (
            <div className="space-y-8 animate-fade-in-up">
              {/* Order Info */}
              <div className="rustic-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4">
                  Pedido #{order.id}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Itens</p>
                    <p className="font-bold text-lg">{order.items}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="font-bold text-lg text-primary">
                      R$ {order.total.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tempo Est.</p>
                    <p className="font-bold text-lg">{order.estimatedTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-bold text-lg capitalize">
                      {order.status === 'preparing' && 'Preparando'}
                      {order.status === 'ready' && 'Pronto'}
                      {order.status === 'delivery' && 'Em Entrega'}
                      {order.status === 'delivered' && 'Entregue'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="rustic-card p-6">
                <h3 className="font-display font-bold mb-6">Status do Pedido</h3>
                <div className="space-y-4">
                  {statusSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isCompleted = index <= currentStatusIndex;
                    const isCurrent = index === currentStatusIndex;

                    return (
                      <div key={step.key} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                              isCompleted
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground'
                            } ${isCurrent ? 'ring-4 ring-primary/30' : ''}`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          {index < statusSteps.length - 1 && (
                            <div
                              className={`w-1 h-12 mt-2 ${
                                isCompleted ? 'bg-primary' : 'bg-muted'
                              }`}
                            />
                          )}
                        </div>
                        <div className="pt-2">
                          <p
                            className={`font-bold ${
                              isCompleted
                                ? 'text-foreground'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {step.label}
                          </p>
                          {isCurrent && (
                            <p className="text-sm text-primary">
                              Seu pedido está aqui agora
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Address */}
              {order.status !== 'delivered' && (
                <div className="rustic-card p-6">
                  <h3 className="font-display font-bold mb-3">Endereço de Entrega</h3>
                  <p className="text-muted-foreground">{order.address}</p>
                </div>
              )}

              {/* Delivered Message */}
              {order.status === 'delivered' && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                  <div className="text-5xl mb-3">✅</div>
                  <p className="font-display font-bold text-lg mb-2">
                    Pedido Entregue!
                  </p>
                  <p className="text-muted-foreground">
                    Obrigado por sua compra. Esperamos vê-lo novamente em breve!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
