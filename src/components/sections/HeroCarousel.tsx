import designWorkspace from "@/assets/design-workspace.jpg";
import actionMapping from "@/assets/action-mapping.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const HeroCarousel = () => {
  const images = [
    { src: designWorkspace, alt: "Design Workspace" },
    { src: actionMapping, alt: "Action Mapping" },
    { src: analyticsDashboard, alt: "Analytics Dashboard" },
  ];

  return (
    <section id="hero-carousel" className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6">
      {images.map((image, index) => (
        <div 
          key={index}
          className="flex-shrink-0 w-48 sm:w-56 md:w-64 aspect-[9/16] rounded-3xl shadow-soft overflow-hidden border border-border/50 snap-start surface-elevated"
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default HeroCarousel;