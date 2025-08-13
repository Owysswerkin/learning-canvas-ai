import { Button } from "@/components/ui/button";
import { VideoModalTrigger } from "@/components/ui/video-modal";

const MobileHero = () => {
  return (
    <div className="md:hidden w-full relative overflow-hidden">
      {/* Large background icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0">
        <img 
          src="/lovable-uploads/8d195fae-d1c7-4033-8512-c2f88a5d6d21.png" 
          alt="" 
          className="w-96 h-96"
        />
      </div>
      <div className="relative z-10 surface-glass px-4 pt-4 pb-6 flex flex-col gap-4 rounded-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug relative z-20">
        Design training that drives real results
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed relative z-20">
        You start with performance gaps, leverage built-in frameworks and AI guidance, craft scenarios, and generate microlearning that gets SME endorsement and improves performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full relative z-20">
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
    </div>
  );
};

export default MobileHero;