import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <AuthProvider>
      <div style={{ padding: "2rem", fontSize: "1.2rem", color: "black" }}>
        ✅ NavBar + AuthProvider
        <NavBar />
      </div>
    </AuthProvider>
  );
}
