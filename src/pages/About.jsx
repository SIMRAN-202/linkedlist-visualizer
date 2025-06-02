import React from 'react'

export const About = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-slate-800">
      <h1 className="text-4xl font-bold mb-6 text-center">About Linked List Visualizer</h1>

      <p className="text-lg mb-6">
        Understanding data structures is a cornerstone of mastering computer science — and among them, <strong>Linked Lists</strong> stand as a crucial building block. However, for many learners, grasping how linked lists operate just from books and diagrams can be confusing.
      </p>

      <p className="text-lg mb-6">
        That’s where <strong>Linked List Visualizer</strong> steps in. Our interactive, intuitive platform allows you to explore the behavior of <em>singly</em>, <em>doubly</em>, and <em>circular linked lists</em> through real-time animations and hands-on manipulation.
      </p>

      <p className="text-lg mb-6">
        Whether you're a beginner learning about pointers or a developer brushing up on DSA for interviews, our visualizer makes complex concepts feel simple. Insert nodes, delete them, and observe the changes in structure — all with the click of a button.
      </p>

      <p className="text-lg mb-6">
        Built with a love for clarity and education, this app is designed to empower learners through visual learning and active experimentation.
      </p>

      
<div className="my-10 max-w-3xl mx-auto text-center">
  <h3 className="text-xl font-semibold mb-2 text-slate-800">Our Mission</h3>
  <p className="text-slate-600 text-lg">
    We believe that learning data structures shouldn't be intimidating. Our mission is to simplify complex concepts through interactive visuals that make learning fun, fast, and effective.
  </p>
</div>

     


      <div className="my-10">
  <h3 className="text-xl font-semibold text-center text-slate-800 mb-6">How It Works</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
    <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
      <i className="bi bi-lightbulb text-3xl text-yellow-500 mb-3"></i>
      <h4 className="font-semibold text-slate-700">Pick a Visual</h4>
      <p className="text-slate-600">Choose a linked list operation to explore.</p>
    </div>
    <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
      <i className="bi bi-play-circle text-3xl text-green-500 mb-3"></i>
      <h4 className="font-semibold text-slate-700">Run & Observe</h4>
      <p className="text-slate-600">Watch real-time changes step-by-step.</p>
    </div>
    <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
      <i className="bi bi-check-circle text-3xl text-blue-500 mb-3"></i>
      <h4 className="font-semibold text-slate-700">Master It</h4>
      <p className="text-slate-600">Repeat, explore, and build confidence.</p>
    </div>
  </div>
</div>


 <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold mb-2">Let’s make DSA fun to learn, one link at a time!</h2>
        <p className="text-md text-slate-600">— The Developer</p>
      </div>
    </div>



  )
}
