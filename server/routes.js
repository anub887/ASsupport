const express = require("express");
const router = express.Router();

// Sample video & recipe endpoints
const VIDEOS = [
  { id: "1", title: "Morning Mobility Routine", thumbnailUrl: "https://img.youtube.com/vi/8mZPpkGvQAc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/8mZPpkGvQAc", duration: "10:23", category: "exercise", description: "Gentle morning flow." },
  { id: "2", title: "AS Back Stretch Flow", thumbnailUrl: "https://img.youtube.com/vi/sjZLb3mYH6g/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/sjZLb3mYH6g", duration: "8:45", category: "exercise", description: "Back stretches." }
];
const RECIPES = [
  { id: "1", title: "Turmeric Ginger Salmon", description: "Omega-3 rich salmon.", url: "https://www.eatingwell.com/recipe/279511/turmeric-ginger-salmon/" }
];

// Return lists
router.get("/videos", (_req, res) => res.json(VIDEOS));
router.get("/recipes", (_req, res) => res.json(RECIPES));

// Redirect chat to custom GPT
router.get("/chat", (_req, res) => {
  res.redirect("https://chat.openai.com/g/g-687d074ea6ac8191a3e15cc7c3465fb3-spondysupport");
});

module.exports = router;
