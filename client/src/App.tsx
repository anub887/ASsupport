import React from "react";
import { Route, Router } from "wouter";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <div style={{ padding: "2rem", fontSize: "1.2rem", color: "black" }}>
          ✅ NavBar + Auth + Router
        </div>
        {/* No actual routes yet */}
      </AuthProvider>
    </Router>
  );
}
