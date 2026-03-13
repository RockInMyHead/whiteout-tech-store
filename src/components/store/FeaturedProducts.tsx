import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Избранное
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              Популярные товары
            </h2>
          </div>
          <Link
            to="/catalog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:block"
          >
            Все товары →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
