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
    <div style={{ padding: "1rem" }}>
      <h2>✅ Video Thumbnails</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "300px",
              cursor: "pointer",
              background: "#f9f9f9"
            }}
          >
            <iframe
              width="100%"
              height="180"
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p><strong>Duration:</strong> {video.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

