import { Link } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

const Header = () => {
  const { totalItems, setIsOpen } = useCart();
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          VOLT
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Каталог
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to={user ? "/account" : "/login"}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <User className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-secondary rounded-full transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background fade-in">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-2">
              Главная
            </Link>
            <Link to="/catalog" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-2">
              Каталог
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
