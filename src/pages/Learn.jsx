import React, { useState } from 'react'

export const Learn = () => {
  const [openOperation, setOpenOperation] = useState(null)

  const toggleOperation = (op) => {
    setOpenOperation(openOperation === op ? null : op)
  }

const quizData = [
  {
    question: "True or False: A singly linked list allows traversal in both directions.",
    answer: "False",
  },
  {
    question: "What type of linked list has the last node pointing back to the first?",
    answer: "Circular linked list",
  },
  {
    question: "Which operation changes the direction of pointers in a linked list?",
    answer: "Reversing",
  },
  {
    question: "Name one advantage of linked lists over arrays.",
    answer: "Dynamic size / Efficient insertion/deletion",
  },
  {
    question: "What is the 'head' of a linked list?",
    answer: "The first node in the list",
  },
  {
    question: "What is a tail node in a linked list?",
    answer: "The last node which points to null",
  },
  {
    question: "Which type of linked list allows traversal in both directions?",
    answer: "Doubly linked list",
  },
  {
    question: "Can a linked list be circular and doubly at the same time?",
    answer: "Yes",
  },
  {
    question: "Which data structure is used in undo functionality of editors?",
    answer: "Linked list",
  },
  {
    question: "Which pointer in a doubly linked list points backward?",
    answer: "Previous pointer",
  },
  {
    question: "What does the next pointer of the last node point to in a singly linked list?",
    answer: "Null",
  },
  {
    question: "Is random access possible in linked lists?",
    answer: "No",
  },
];

const QuizSection = () => {
  const [showAnswers, setShowAnswers] = useState(Array(quizData.length).fill(false));

  const toggleAnswer = (index) => {
    const newAnswers = [...showAnswers];
    newAnswers[index] = !newAnswers[index];
    setShowAnswers(newAnswers);
  }}

  const [showAnswers, setShowAnswers] = useState(Array(quizData.length).fill(false));

const toggleAnswer = (index) => {
  const newAnswers = [...showAnswers];
  newAnswers[index] = !newAnswers[index];
  setShowAnswers(newAnswers);
};

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-slate-900">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Learn About Linked Lists
      </h1>

      <p className="text-center mb-12 text-slate-500 italic">⏱️ 8 min read</p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-3">What is a Linked List?</h2>
        <p className="mb-4 leading-relaxed">
          A <strong>linked list</strong> is a linear data structure where each individual element—called a <strong>node</strong>—contains two parts: the actual data and a reference (or pointer) to the next node in the sequence.
  <br /><br />
  You can think of it like a train, where each train car holds some cargo (the data) and has a connector to the next car. This connection forms a chain that lets you move from one node to the next, one step at a time.

        </p>

        <div className="bg-slate-100 rounded-xl p-6 shadow-inner text-center text-slate-600 italic select-none">
          <img
    src="/images/linkedList.png"
    alt="Singly Linked List Diagram"
    className="mx-auto rounded shadow-md w-full max-w-xl"
  />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Types of Linked Lists</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border border-slate-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Singly Linked List</h3>
            <p className="mb-3 text-slate-700">
              Each node points to the next node. Traversal is only in one direction.
            </p>
            <div className="bg-slate-100 p-4 rounded-md text-center text-slate-500 italic select-none mb-2">
              <img
    src="/images/linkedList.png"
    alt="Singly Linked List Diagram"
    className="mx-auto rounded shadow-md w-full max-w-xl"
  />
            </div>
            <p className="text-sm text-slate-600">
              Used when simple sequential access is enough and memory is limited.
            </p>
          </div>

          <div className="border border-slate-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Doubly Linked List</h3>
            <p className="mb-3 text-slate-700">
              Each node points to both previous and next nodes. Allows bi-directional traversal.
            </p>
            <div className="bg-slate-100 p-4 rounded-md text-center text-slate-500 italic select-none mb-2">
              <img
    src="/images/doubly-linkedList.png"
    alt="Singly Linked List Diagram"
    className="mx-auto rounded shadow-md w-full max-w-xl"
  />
            </div>
            <p className="text-sm text-slate-600">
              Useful for navigation systems and undo/redo operations.
            </p>
          </div>

          <div className="border border-slate-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Circular Linked List</h3>
            <p className="mb-3 text-slate-700">
              The last node points back to the first node, forming a circle.
            </p>
            <div className="bg-slate-100 p-4 rounded-md text-center text-slate-500 italic select-none mb-2">
              <img
    src="/images/circular-linkedList.png"
    alt="Singly Linked List Diagram"
    className="mx-auto rounded shadow-md w-full max-w-xl"
  />
            </div>
            <p className="text-sm text-slate-600">
              Great for cyclic tasks and round-robin scheduling.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-3">Basic Terminology</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-700">
          <li className="bg-slate-100 rounded-lg p-4 shadow-sm">
            <strong>Node:</strong> A single element containing data and a pointer.
          </li>
          <li className="bg-slate-100 rounded-lg p-4 shadow-sm">
            <strong>Head:</strong> The first node in the list.
          </li>
          <li className="bg-slate-100 rounded-lg p-4 shadow-sm">
            <strong>Tail:</strong> The last node, which points to null or head.
          </li>
          <li className="bg-slate-100 rounded-lg p-4 shadow-sm">
            <strong>Pointer:</strong> Reference to another node.
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Common Operations</h2>

        {[
          {
            id: 'insert',
            title: 'Insertion',
            description: (
              <>
                Adding a new node to the list — at the beginning, end, or a specific position.
                <br />
                Example: To insert at the beginning, you create a new node and set its pointer to the current head.
              </>
            ),
          },
          {
            id: 'delete',
            title: 'Deletion',
            description: (
              <>
                Removing a node from the list — from beginning, end, or by value.
                <br />
                Example: To delete the head node, set the head pointer to the next node.
              </>
            ),
          },
          {
            id: 'traverse',
            title: 'Traversal',
            description: (
              <>
                Visiting each node sequentially, usually to print or search for data.
                <br />
                You start at the head and follow the pointers until you reach the end.
              </>
            ),
          },
          {
            id: 'search',
            title: 'Searching',
            description: (
              <>
                Finding a node containing a specific value.
                <br />
                Typically involves traversing the list and comparing node data.
              </>
            ),
          },
          {
            id: 'reverse',
            title: 'Reversing',
            description: (
              <>
                Changing the direction of pointers so the list is reversed.
                <br />
                This involves reassigning each node’s pointer to its previous node.
              </>
            ),
          },
        ].map(({ id, title, description }) => (
          <div key={id} className="mb-4 border border-slate-300 rounded-xl">
            <button
              onClick={() => toggleOperation(id)}
              className="w-full text-left px-6 py-4 font-semibold bg-slate-100 hover:bg-slate-200 rounded-t-xl focus:outline-none"
            >
              {title}
              <span className="float-right">{openOperation === id ? '−' : '+'}</span>
            </button>
            {openOperation === id && (
              <div className="px-6 py-4 bg-white text-slate-700 border-t border-slate-300 rounded-b-xl">
                {description}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">When & Why to Use Linked Lists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700">
          <div>
            <h3 className="font-semibold mb-2">Advantages</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Dynamic size — can grow or shrink easily</li>
              <li>Efficient insertions/deletions without shifting elements</li>
              <li>Memory usage can be optimized for unpredictable sizes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Disadvantages</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>No direct/random access (unlike arrays)</li>
              <li>More memory usage for storing pointers</li>
              <li>Traversal can be slower</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Real-Life Use Cases</h2>
        <ul className="list-disc list-inside space-y-3 text-slate-700  mx-auto grid grid-cols-2">
          <li>Music playlist management, where songs are played sequentially</li>
          <li>Undo/Redo feature in editors and apps</li>
          <li>Browser navigation history</li>
          <li>Implementation of HashMaps using chaining</li>
        </ul>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to visualize?</h2>
        <p className="mb-6 text-slate-700 max-w-md mx-auto">
          Now that you understand how linked lists work, try the visualizer to see these concepts in action!
        </p>
        <a
          href="/visualizer"
          className="self-start mb-12 px-6 py-3 mt-16 font-bold bg-slate-700 text-white rounded-4xl shadow-md border-2 border-transparent hover:bg-white hover:text-slate-700 hover:border-slate-900 transition"
        >
          Go to Visualizer
        </a>
      </section>

      <section className="mb-20 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Quick Quiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-800">
        {quizData.map((item, index) => (
          <div key={index} className="p-4 bg-slate-100 rounded-lg shadow-md">
            <p className="mb-2">{index + 1}. {item.question}</p>
            <button
              onClick={() => toggleAnswer(index)}
              className="self-start mb-1 px-3 py-1 font-bold bg-slate-700 text-white rounded-4xl shadow-md border-2 border-transparent hover:bg-white hover:text-slate-700 hover:border-slate-900 transition"
            >
              {showAnswers[index] ? "Hide Answer" : "Show Answer"}
            </button>
            {showAnswers[index] && (
              <p className="mt-2 text-green-700 font-semibold">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
