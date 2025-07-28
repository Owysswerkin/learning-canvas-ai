interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-10 w-full md:w-max ml-auto mb-8 surface-glass p-4 rounded-3xl shadow-md flex justify-around md:justify-start gap-8 ${className}`}>
      <a 
        href="#benefits" 
        onClick={(e) => handleSmoothScroll(e, 'benefits')}
        className="text-foreground hover:text-primary transition-colors cursor-pointer"
      >
        Benefits
      </a>
      <a 
        href="#pricing" 
        onClick={(e) => handleSmoothScroll(e, 'pricing')}
        className="text-foreground hover:text-primary transition-colors cursor-pointer"
      >
        Pricing
      </a>
      <a 
        href="#about" 
        onClick={(e) => handleSmoothScroll(e, 'about')}
        className="text-foreground hover:text-primary transition-colors cursor-pointer"
      >
        About
      </a>
    </nav>
  );
};

export default Navigation;