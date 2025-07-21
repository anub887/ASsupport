import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Video } from "./video-library-section";

interface VideoModalProps {
  video: Video | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VideoModal({ video, open, onOpenChange }: VideoModalProps) {
  if (!video) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "exercise": return "bg-medical-blue text-white";
      case "nutrition": return "bg-healing-green text-white";
      case "stories": return "bg-accent-cyan text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "exercise": return "Exercise";
      case "nutrition": return "Nutrition";
      case "stories": return "Stories";
      default: return category;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Badge className={`text-xs px-2 py-1 ${getCategoryColor(video.category)}`}> {getCategoryName(video.category)} </Badge>
            <span className="text-text-gray text-sm">{video.duration}</span>
          </div>
          <DialogTitle className="text-2xl text-left">{video.title}</DialogTitle>
        </DialogHeader>
        <iframe
          width="100%" height="400" src={video.videoUrl}
          frameBorder="0" allowFullScreen className="rounded-lg"
        />
        <p className="mt-4 text-text-gray">{video.description}</p>
      </DialogContent>
    </Dialog>
  );
}
