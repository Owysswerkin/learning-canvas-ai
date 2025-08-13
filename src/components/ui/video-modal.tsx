import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[10000]">
      <div className="surface-elevated rounded-lg overflow-hidden max-w-2xl w-full mx-4 relative">
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute top-2 right-3 text-muted-foreground hover:text-foreground text-xl z-10"
          aria-label="Close video modal"
        >
          ×
        </Button>
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Product demo video"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

interface VideoModalTriggerProps {
  videoUrl: string;
  children: React.ReactNode;
  className?: string;
}

export const VideoModalTrigger = ({ videoUrl, children, className }: VideoModalTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className={className}>
        {children}
      </div>
      <VideoModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        videoUrl={videoUrl} 
      />
    </>
  );
};

export default VideoModal;