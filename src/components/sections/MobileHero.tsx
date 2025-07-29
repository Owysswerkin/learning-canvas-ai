import { Button } from "@/components/ui/button";
import { VideoModalTrigger } from "@/components/ui/video-modal";

const MobileHero = () => {
  return (
    <div className="md:hidden w-full surface-glass px-4 pt-4 pb-6 flex flex-col gap-4 rounded-lg">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug">
        Design training that drives real results
      </h1>
      <p className="text-muted-foreground text-base leading-relaxed">
        You start with performance gaps, leverage built-in frameworks and AI guidance, craft scenarios, and generate microlearning that gets SME endorsement and improves performance.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
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
  );
};

export default MobileHero;