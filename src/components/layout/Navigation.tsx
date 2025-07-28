interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  return (
    <nav className={`sticky top-0 z-10 w-full md:w-max ml-auto mb-8 surface-glass p-4 rounded-3xl shadow-md flex justify-around md:justify-start gap-8 ${className}`}>
      <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
        Benefits
      </a>
      <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
        Pricing
      </a>
      <a href="#about" className="text-foreground hover:text-primary transition-colors">
        About
      </a>
    </nav>
  );
};

export default Navigation;