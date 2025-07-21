import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "wouter";
import VideoModal from "./video-modal";

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: "exercise" | "nutrition" | "stories";
}

const VIDEOS: Video[] = [
  {
    id: "1",
    title: "Morning Mobility Routine",
    description: "A gentle morning flow to wake up your spine and joints.",
    thumbnailUrl: "https://img.youtube.com/vi/8mZPpkGvQAc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/8mZPpkGvQAc",
    duration: "10:23",
    category: "exercise",
  },
  {
    id: "2",
    title: "AS Back Stretch Flow",
    description: "Targeted back stretches for Ankylosing Spondylitis relief.",
    thumbnailUrl: "https://img.youtube.com/vi/sjZLb3mYH6g/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/sjZLb3mYH6g",
    duration: "8:45",
    category: "exercise",
  },
  {
    id: "3",
    title: "Gentle Full Body Stretch",
    description: "Full body sequence to improve flexibility and reduce stiffness.",
    thumbnailUrl: "https://img.youtube.com/vi/nSjaXsEIBXE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/nSjaXsEIBXE",
    duration: "12:10",
    category: "exercise",
  },
];

export default function VideoLibrarySection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "exercise":
        return "bg-medical-blue text-white";
      case "nutrition":
        return "bg-healing-green text-white";
      case "stories":
        return "bg-accent-cyan text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "exercise":
        return "Exercise";
      case "nutrition":
        return "Nutrition";
      case "stories":
        return "Stories";
      default:
        return category;
    }
  };

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educational Video Library
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Learn from experts, hear patient stories, and discover new ways to
            manage your AS through our curated video content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-soft-gray rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleVideoClick(video)}
            >
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Badge
                    className={`text-xs px-2 py-1 ${getCategoryColor(
                      video.category
                    )}`}
                  >
                    {getCategoryName(video.category)}
                  </Badge>
                  <span className="text-text-gray text-sm ml-auto">
                    {video.duration}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-text-gray text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/videos">
            <Button className="bg-medical-blue text-white px-8 py-3 hover:bg-blue-700">
              View All Videos
            </Button>
          </Link>
        </div>
      </div>

      <VideoModal
        video={selectedVideo}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}
