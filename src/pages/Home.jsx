import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import linkedListGif from '../assets/linkedlist.gif'
import { useNavigate } from 'react-router-dom';
import alanTuringImage from '../assets/alan-turing.jpg'

export const Home = () => {

    const navigate = useNavigate();

    

  const listTypes = [
    {
      id: 'singly',
      title: 'Singly Linked List',
      desc: 'A linear collection where each node points to the next node. Easy to traverse in one direction.',
    },
    {
      id: 'doubly',
      title: 'Doubly Linked List',
      desc: 'Each node points to both the previous and next node, allowing two-way traversal.',
    },
    {
      id: 'circular',
      title: 'Circular Linked List',
      desc: 'The last node points back to the first node, forming a circle, useful for cyclic processes.',
    },
  ];




  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 gap-8">
      
    <div className="md:w-1/2 px-6 w-full flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-bold text-slate-900">Welcome to Linked List Visualizer</h1>
        <p className="text-lg text-gray-500">
          Linked Lists are fundamental data structures used in computer science to organize items sequentially. 
          They are dynamic, allowing efficient insertion and deletion of elements.
        </p>
        <Link 
          to="/learn" 
          className="self-start px-6 py-3 font-bold bg-slate-700 text-white rounded-4xl shadow-md border-2 border-transparent hover:bg-white hover:text-slate-700 hover:border-slate-900 transition"

        >
          Learn More 
        </Link>
      </div>

      <div className="md:w-1/2 px-6 w-full">
        <img 
          src={linkedListGif} 
          alt="Linked List Visualizer Gif" 
          className="max-w-full h-auto"
        />
      </div>

      
    </div>

<div className="mb-12 px-6 mx-auto text-center">
  <h2 className="text-3xl font-semibold text-slate-800 mb-4">About Linked List Visualizer</h2>
  <p className="text-slate-700 mb-12">
     Linked lists are one of the foundational data structures in computer science, widely used to efficiently organize and manage data in many applications. However, understanding how linked lists work can sometimes be challenging when learning through text alone. This Linked List Visualizer bridges that gap by providing an interactive platform where users can visually explore different types of linked lists — including singly, doubly, and circular lists.  
  Through intuitive animations and real-time interaction, learners can see how nodes are connected, how insertion and deletion operations affect the list, and how traversal works in different scenarios. Whether you are a beginner just starting out or someone revisiting data structures, this tool makes grasping linked lists easier and more engaging.  
  We believe that visual learning accelerates comprehension, and by combining theory with hands-on practice, our visualizer empowers you to build a strong foundation in linked lists — a critical step for mastering more advanced data structures and algorithms.
  </p>
  <Link
    to="/about"
    className="self-start mb-12 px-6 py-3 font-bold bg-slate-700 text-white rounded-4xl shadow-md border-2 border-transparent hover:bg-white hover:text-slate-700 hover:border-slate-900 transition"
  >
    Learn More
  </Link>
</div>

<div className="my-16 px-6 max-w-3xl mx-auto text-center">
  <blockquote className="text-xl italic text-slate-700 mb-4">
    "I created this visualizer to make data structures fun, not frightening."
  </blockquote>
  <cite className="font-semibold text-slate-800">— The Developer</cite>
</div>

     <div className="mt-0.5 px-6 w-full py-6">
      <h2 className="mb-10 text-3xl font-semibold text-slate-800 text-center">Types of Linked Lists</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {listTypes.map(({ id, title, desc }) => (
          <div
            key={id}
            className="relative bg-slate-200 rounded-4xl p-6 shadow hover:shadow-xl cursor-pointer group text-center"
            onClick={() => navigate(`/learn#${id}`)}
          >
            <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
            <p className="text-slate-700 text-sm transition-all duration-300 overflow-hidden max-h-20 group-hover:max-h-0 group-hover:opacity-0">{desc}</p>

            {/* Hidden button that appears on hover */}
            <button
              onClick={e => {
                e.stopPropagation(); // Prevent the outer div's onClick
                navigate(`/learn#${id}`);
              }}
              className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition 
                         absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 
                         text-white py-2 px-5 rounded-3xl font-semibold shadow-lg hover:bg-slate-700"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>


    <div className="bg-gradient-to-r from-shadow-cyan-600 via-slate-700 to-slate-900 flex flex-col md:flex-row items-center justify-center gap-10 my-16 px-6  mx-auto p-8">
      
      <div className="md:w-1/3 flex justify-center">
        <img 
          src={alanTuringImage} 
          alt="Alan Turing" 
          className="rounded-3xl shadow-lg max-h-64 object-cover"
        />
      </div>

      <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <blockquote className="text-lg italic text-white">
          “Linked lists teach us that every element counts, and even when connections change, the sequence endures” 
        </blockquote>
        <cite className="font-semibold text-slate-900">— Alan Turing</cite>

        <Link
          to="/visualizer"
          className="self-center md:self-start px-8 py-3 font-bold bg-white text-slate-800 rounded-4xl shadow-md border-2 border-transparent hover:bg-white hover:text-slate-700 hover:border-slate-900 transition" style={{ backgroundAttachment: 'fixed' }}
        >
          Try It
        </Link>
      </div>

    </div>

    <div className="my-12 px-6 grid grid-cols-1 md:grid-cols-4 text-center gap-6 max-w-6xl mx-auto">
  <div>
    <h4 className="text-3xl font-bold text-slate-800">500+</h4>
    <p className="text-slate-600">Visualizations Run</p>
  </div>
  <div>
    <h4 className="text-3xl font-bold text-slate-800">300+</h4>
    <p className="text-slate-600">Happy Learners</p>
  </div>
  <div>
    <h4 className="text-3xl font-bold text-slate-800">24/7</h4>
    <p className="text-slate-600">Learning Support</p>
  </div>
  <div>
    <h4 className="text-3xl font-bold text-slate-800">100%</h4>
    <p className="text-slate-600">Beginner Friendly</p>
  </div>
</div>

<div className="mt-16 px-6 text-center mb-12">
  <h3 className="text-2xl font-bold text-slate-800 mb-4">Stay Updated!</h3>
  <p className="text-slate-600 mb-4">Subscribe for updates, tips & new features.</p>
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
  />
  <button className="self-start mb-12 px-6 py-2 font-bold bg-slate-700 text-white rounded-r-4xl shadow-md border-2 border-transparent hover:bg-white hover:text-slate-700 hover:border-slate-900 transition">
    Subscribe
  </button>
</div>

    </>
  )
}
