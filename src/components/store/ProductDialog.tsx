import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Star, Truck, Shield, Zap } from "lucide-react";

interface ProductDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const reviews = [
  { name: "Алексей М.", rating: 5, text: "Отличное качество, превзошло ожидания! Рекомендую.", date: "2 дня назад" },
  { name: "Мария К.", rating: 4, text: "Хороший товар за свою цену. Доставка быстрая.", date: "1 неделю назад" },
  { name: "Дмитрий В.", rating: 5, text: "Пользуюсь каждый день, очень доволен покупкой.", date: "2 недели назад" },
];

const specs: Record<string, { label: string; value: string }[]> = {
  "Аудио": [
    { label: "Тип подключения", value: "Bluetooth 5.3" },
    { label: "Время работы", value: "до 30 часов" },
    { label: "Шумоподавление", value: "Активное (ANC)" },
    { label: "Вес", value: "250 г" },
  ],
  "Часы": [
    { label: "Дисплей", value: "AMOLED 1.9\"" },
    { label: "Водозащита", value: "IP68" },
    { label: "Батарея", value: "до 7 дней" },
    { label: "Датчики", value: "Пульс, SpO2, GPS" },
  ],
  "Смартфоны": [
    { label: "Камера", value: "200 МП" },
    { label: "Дисплей", value: "6.8\" AMOLED 120Hz" },
    { label: "Батарея", value: "5000 мАч" },
    { label: "Память", value: "256 ГБ" },
  ],
  "Аксессуары": [
    { label: "Мощность", value: "15W" },
    { label: "Совместимость", value: "Qi / MagSafe" },
    { label: "Вход", value: "USB-C" },
    { label: "Индикатор", value: "LED" },
  ],
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const ProductDialog = ({ product, open, onOpenChange }: ProductDialogProps) => {
  const { addItem } = useCart();

  if (!product) return null;

  const productSpecs = specs[product.category] || specs["Аксессуары"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl border-border/50">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="bg-secondary/50 p-8 flex items-center justify-center aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[280px] object-contain"
            />
          </div>

          {/* Info */}
          <div className="p-6 flex flex-col">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
              {product.category}
            </p>
            <h2 className="text-2xl font-display font-bold tracking-tight mb-1">
              {product.name}
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={5} />
              <span className="text-xs text-muted-foreground">(3 отзыва)</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {product.description}
            </p>

            <Tabs defaultValue="specs" className="flex-1">
              <TabsList className="w-full bg-secondary/60 h-9">
                <TabsTrigger value="specs" className="flex-1 text-xs">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1 text-xs">Отзывы</TabsTrigger>
              </TabsList>

              <TabsContent value="specs" className="mt-3 space-y-2.5">
                {productSpecs.map((spec) => (
                  <div key={spec.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="mt-3 space-y-3 max-h-[160px] overflow-y-auto pr-1">
                {reviews.map((review, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{review.name}</span>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-xs text-muted-foreground leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>

            {/* Bottom */}
            <div className="mt-auto pt-4 border-t border-border/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-display font-bold">${product.price}</span>
              </div>
              <Button
                className="w-full rounded-full h-11 font-medium"
                onClick={() => { addItem(product); onOpenChange(false); }}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                В корзину
              </Button>
              <div className="flex justify-center gap-4 mt-3">
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Truck className="w-3 h-3" /> Быстрая доставка
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Гарантия
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Zap className="w-3 h-3" /> В наличии
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
