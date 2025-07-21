import React, { useState } from "react";
import VideoModal from "./video-modal";

export interface Video {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Morning Stretch Routine",
    description: "A gentle 10-minute morning stretch to reduce stiffness.",
    category: "exercise",
    duration: "10:00",
    videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE",
  },
  {
    id: "2",
    title: "Anti-Inflammatory Meal Plan",
    description: "Learn what to eat to reduce inflammation.",
    category: "nutrition",
    duration: "8:45",
    videoUrl: "https://www.youtube.com/embed/dBnniua6-oM",
  },
];

export default function VideoLibrarySection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div>
      <h2>✅ Loaded videos array successfully</h2>
    </div>
  );
}
