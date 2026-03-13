const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display font-bold text-lg tracking-tight">VOLT</p>
          <p className="text-xs text-muted-foreground">
            © 2026 VOLT Electronics. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
