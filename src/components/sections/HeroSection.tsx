import { Button } from "@/components/ui/button";
import { VideoModalTrigger } from "@/components/ui/video-modal";

const HeroSection = () => {
  return (
    <aside className="hidden md:flex flex-col justify-between w-1/3 p-8 border-r border-border sticky top-0 h-screen">
      <div className="flex flex-col gap-6">
        <img 
          src="https://res.cloudinary.com/dylxm9fqw/image/upload/v1748348396/android-chrome-512x512_btavah.png" 
          alt="Functional Logo" 
          className="w-8 h-8" 
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Design learning that improve performance
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-sm leading-relaxed">
          You start with performance gaps, leverage built-in frameworks and AI guidance, craft stories, and generate microlearning that gets stakeholders and SME endorsement.
        </p>
        <div className="flex flex-col gap-3">
          <a 
            href="https://theboringlearner.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            Try Functional
          </a>
          <VideoModalTrigger videoUrl="https://www.youtube.com/embed/SfI6FZhxF9I">
            <Button variant="secondary" className="w-full">
              See It in Action
            </Button>
          </VideoModalTrigger>
        </div>
      </div>
      <div className="mt-8 text-muted-foreground text-sm flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span>Trusted by</span>
          <div className="flex gap-4 items-center">
            <span className="font-semibold">EduCorp</span>
            <span className="font-semibold">Learnify</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HeroSection;