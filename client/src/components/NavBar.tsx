import React, { useContext } from "react";
import { Link } from "wouter";
import { AuthContext } from "../contexts/AuthContext";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="/"><a className="font-bold">SpondySupport</a></Link>
          <Link href="/videos"><a>Videos</a></Link>
          <Link href="/resources"><a>Recipes</a></Link>
          <a href="https://chat.openai.com/g/g-687d074ea6ac8191a3e15cc7c3465fb3-spondysupport" target="_blank" rel="noopener noreferrer">
            Chat
          </a>
        </div>
        <div>
          {user ? (
            <button onClick={logout} className="text-red-600">Logout</button>
          ) : (
            <>
              <Link href="/login"><a className="mr-4">Login</a></Link>
              <Link href="/signup"><a>Sign Up</a></Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
