import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Plus } from "lucide-react";
import ProductDialog from "./ProductDialog";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className="group cursor-pointer" onClick={() => setDialogOpen(true)}>
        <div className="aspect-square bg-secondary rounded-lg overflow-hidden mb-4 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <button
            onClick={(e) => { e.stopPropagation(); addItem(product); }}
            className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
          <h3 className="font-display font-semibold text-base">{product.name}</h3>
          <p className="text-sm text-muted-foreground">${product.price}</p>
        </div>
      </div>
      <ProductDialog product={product} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default ProductCard;
