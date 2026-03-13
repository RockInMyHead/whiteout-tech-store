import { products } from "@/data/products";
import ProductCard from "@/components/store/ProductCard";
import Footer from "@/components/store/Footer";
import { useState } from "react";

const categories = ["Все", ...new Set(products.map((p) => p.category))];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Каталог</h1>
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pb-24">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Catalog;
