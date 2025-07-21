import React from "react";
import { Route, Router } from "wouter";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Videos from "./Videos";
import Resources from "./Resources";
import Chat from "./Chat";
import Login from "./Login";
import Signup from "./Signup";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Route path="/" component={Home} />
        <Route path="/videos" component={Videos} />
        <Route path="/resources" component={Resources} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </AuthProvider>
    </Router>
  );
}
