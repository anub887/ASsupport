import React from "react";

export default function Chat() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Talk to SpondySupport</h1>
      <a
        href="https://chat.openai.com/g/g-687d074ea6ac8191a3e15cc7c3465fb3-spondysupport"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Open Chat
      </a>
    </div>
  );
}
