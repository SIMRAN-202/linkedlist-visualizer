import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="px-7 py-5 bg-gradient-to-r from-shadow-cyan-600 via-slate-700 to-slate-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-2">
        {/* Linked List SVG Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-slate-800" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <line x1="8.5" y1="12" x2="15" y2="6" />
          <line x1="8.5" y1="12" x2="15" y2="18" />
        </svg>
        <Link to="/" className="text-2xl font-semibold text-slate-800 hover:text-slate-600 transition duration-300">
         LL Visualizer
        </Link>
      </div>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-slate-500 transition duration-300">Home</Link>
        <Link to="/learn" className="hover:text-slate-500 transition duration-300">Learn</Link>
        <Link to="/visualizer" className="hover:text-slate-500 transition duration-300">Visualizer</Link>
        <Link to="/about" className="hover:text-slate-500 transition duration-300">About</Link>
      </div>
    </nav>
  )
}
