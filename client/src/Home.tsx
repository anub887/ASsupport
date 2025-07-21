import React from "react";
import VideoLibrarySection from "../components/video-library-section";
import RecipeLibrarySection from "../components/recipe-library-section";

export default function Home() {
  return (
    <>
      <VideoLibrarySection />
      <RecipeLibrarySection />
    </>
  );
}
