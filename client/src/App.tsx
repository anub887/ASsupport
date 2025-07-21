import React from "react";
import { Route, Router } from "wouter";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import Home from "./Home"; // 👈 Adding this back

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <div style={{ padding: "2rem", fontSize: "1.2rem", color: "black" }}>
          ✅ Testing Home route below
        </div>
        <Route path="/" component={Home} />
      </AuthProvider>
    </Router>
  );
}
