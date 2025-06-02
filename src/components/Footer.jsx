import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
            <div className='flex px-3'>
             <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-slate-100" 
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
          <h3 className="text-xl font-bold text-white mb-2 ml-3">LL Visualizer</h3>
          </div>
          <p className="text-sm">Learn data structures visually and intuitively.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/visualizer" className="hover:text-white">Visualizer</a></li>
            <li><a href="/learn" className="hover:text-white">Learn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex space-x-4">
        <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white"><i className="bi bi-github"></i></a>
            <a href="#" className="hover:text-white ml-4"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="hover:text-white ml-4"><i className="bi bi-linkedin"></i></a>
        </div>

          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-slate-500">
        &copy; {new Date().getFullYear()} Linked List Visualizer. All rights reserved.
      </div>
    </footer>
  )
}
