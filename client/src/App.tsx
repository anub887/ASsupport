import React from "react";
import { Route } from "wouter";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Resources from "./pages/Resources";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Route path="/" component={Home} />
      <Route path="/videos" component={Videos} />
      <Route path="/resources" component={Resources} />
      <Route path="/chat" component={Chat} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </AuthProvider>
  );
}
