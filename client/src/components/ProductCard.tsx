import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/products';
import { Plus, Minus, Star, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
    setQuantity(1);
  };

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="rustic-card overflow-hidden h-full flex flex-col animate-fade-in-up">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-48 sm:h-56">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.discount && (
          <div className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </div>
        )}
        {product.featured && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
            Destaque
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Title and Description */}
        <h3 className="font-display text-lg font-bold text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews} avaliações)
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          {product.discount ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                R$ {discountedPrice.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                R$ {product.price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-primary">
              R$ {product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex gap-2 mt-auto">
          <div className="flex items-center border border-border rounded-lg bg-card">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-muted transition-colors"
              aria-label="Diminuir quantidade"
            >
              <Minus className="w-4 h-4" />
            </button>

            <span className="px-3 py-2 text-center min-w-12">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-muted transition-colors"
              aria-label="Aumentar quantidade"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 rustic-button flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
