import { useState } from 'react';
import { Link } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, MapPin, Clock, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup'>('delivery');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const deliveryFee = 5.00;
  const finalTotal = deliveryOption === 'delivery' ? total + deliveryFee : total;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || (deliveryOption === 'delivery' && !address)) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    toast.success('Pedido realizado com sucesso! Você receberá um SMS com o rastreamento.');
    clearCart();
    setShowCheckout(false);
    setName('');
    setPhone('');
    setAddress('');
  };

  if (items.length === 0 && !showCheckout) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container py-12">
          <Link href="/">
            <a className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Cardápio
            </a>
          </Link>

          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="font-display text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-muted-foreground mb-8">
              Adicione alguns itens deliciosos ao seu carrinho
            </p>
            <Link href="/">
              <a className="rustic-button inline-block">
                Explorar Cardápio
              </a>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-8">
        <Link href="/">
          <a className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Cardápio
          </a>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-3xl font-bold mb-6">Seu Carrinho</h1>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rustic-card p-4 flex gap-4 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg mb-1">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold mb-3">
                      R$ {item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 bg-muted rounded">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold mb-3">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive/80 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => clearCart()}
              className="mt-6 text-destructive hover:text-destructive/80 font-medium transition-colors"
            >
              Limpar Carrinho
            </button>
          </div>

          {/* Checkout Sidebar */}
          <div className="lg:col-span-1">
            <div className="rustic-card p-6 sticky top-24">
              <h2 className="font-display text-2xl font-bold mb-6">Resumo do Pedido</h2>

              {!showCheckout ? (
                <>
                  {/* Summary */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-bold">R$ {total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Taxa de Entrega</span>
                      <span className="font-bold">
                        {deliveryOption === 'delivery' ? `R$ ${deliveryFee.toFixed(2)}` : 'Grátis'}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-primary">
                        R$ {finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Delivery Options */}
                  <div className="mb-6">
                    <label className="flex items-center gap-3 mb-3 cursor-pointer">
                      <input
                        type="radio"
                        value="delivery"
                        checked={deliveryOption === 'delivery'}
                        onChange={(e) =>
                          setDeliveryOption(e.target.value as 'delivery' | 'pickup')
                        }
                        className="w-4 h-4"
                      />
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Entrega
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        value="pickup"
                        checked={deliveryOption === 'pickup'}
                        onChange={(e) =>
                          setDeliveryOption(e.target.value as 'delivery' | 'pickup')
                        }
                        className="w-4 h-4"
                      />
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Retirada
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={() => setShowCheckout(true)}
                    className="rustic-button w-full"
                  >
                    Continuar para Checkout
                  </button>
                </>
              ) : (
                <>
                  {/* Checkout Form */}
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">Nome</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">Telefone</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    {deliveryOption === 'delivery' && (
                      <div>
                        <label className="block text-sm font-bold mb-2">Endereço</label>
                        <textarea
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          rows={3}
                          required
                        />
                      </div>
                    )}

                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Total</p>
                      <p className="font-display text-2xl font-bold text-primary">
                        R$ {finalTotal.toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="rustic-button w-full flex items-center justify-center gap-2"
                    >
                      <DollarSign className="w-5 h-5" />
                      Confirmar Pedido
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="rustic-button-outline w-full"
                    >
                      Voltar
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
