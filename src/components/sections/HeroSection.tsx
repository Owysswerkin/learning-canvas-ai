import { Button } from "@/components/ui/button";
import { VideoModalTrigger } from "@/components/ui/video-modal";

const HeroSection = () => {
  return (
    <aside className="hidden md:flex flex-col justify-between w-1/3 p-8 border-r border-border sticky top-0 h-screen">
      <div className="flex flex-col gap-6">
        <img 
          src="/lovable-uploads/8d195fae-d1c7-4033-8512-c2f88a5d6d21.png" 
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
          <VideoModalTrigger videoUrl="https://www.youtube.com/embed/oQFHEbNC7zI">
            <Button variant="secondary" className="w-full">
              See It in Action
            </Button>
          </VideoModalTrigger>
        </div>
      </div>
      <div className="mt-8 text-muted-foreground text-sm">
        <p>
          Functional is an instructional system design tool developed by{" "}
          <a 
            href="https://www.linkedin.com/in/trustinneo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Trustin
          </a>
        </p>
      </div>
    </aside>
  );
};

export default HeroSection;