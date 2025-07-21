import React from "react";
import { Video } from "./video-library-section";

interface VideoModalProps {
  video: Video | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VideoModal({ video, open, onOpenChange }: VideoModalProps) {
  if (!open || !video) return null;

  return (
    <div style={{
      position: "fixed",
      top: "10%",
      left: "10%",
      width: "80%",
      height: "80%",
      backgroundColor: "white",
      border: "2px solid #000",
      borderRadius: "10px",
      zIndex: 1000,
      padding: "20px",
      overflow: "auto"
    }}>
      <button onClick={() => onOpenChange(false)} style={{ float: "right" }}>Close</button>
      <h2>{video.title}</h2>
      <iframe
        width="100%" height="400"
        src={video.videoUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <p>{video.description}</p>
    </div>
  );
}
