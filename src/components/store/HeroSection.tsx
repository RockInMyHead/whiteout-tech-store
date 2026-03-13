import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-headphones.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Новая коллекция
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight mb-6">
              Звук<br />нового<br />поколения
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Откройте мир премиальной электроники. Минимализм в дизайне, максимум в технологиях.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="px-8 h-12 text-sm font-medium tracking-wide">
                <Link to="/catalog">Смотреть каталог</Link>
              </Button>
            </div>
          </div>
          <div className="fade-in relative">
            <img
              src={heroImage}
              alt="Premium headphones"
              className="w-full max-w-lg mx-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
