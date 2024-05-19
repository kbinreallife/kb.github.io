'use client'

import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const DynamicHome = dynamic(() => import('./globals.css'), { ssr: false });

export { DynamicHome };

export default function Home() {
  const [showSection, setShowSection] = useState(null);
  const outsideClickListener = useRef(null);

  // Function to toggle the visibility of the section based on the link clicked
  const toggleSection = (section) => {
    setShowSection(showSection === section ? null : section);
  };

  // Function to hide all sections when clicking anywhere on the screen that is not a link
  const hideAllSections = () => {
    setShowSection(null);
  };

  // Effect to add a global click event listener to hide sections when clicking outside the links
  useEffect(() => {
    outsideClickListener.current = (event) => {
      if (!event.target.closest('.nav-link')) {
        hideAllSections();
      }
    };
    document.addEventListener('click', outsideClickListener.current);
    return () => {
      document.removeEventListener('click', outsideClickListener.current);
    };
  }, []);

  // Function to add click event listener to the links when they are clicked
  const handleClickLink = (section) => {
    return (event) => {
      event.stopPropagation();
      toggleSection(section);
    };
  };

  return (
    <div className="min-h-screen dark:bg-grey-100">
      <div className="max-w-md mx-auto py-8 text-center">
        <Head>
          <title>My Personal Website</title>
          <meta name="description" content="Welcome to my personal website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold text-blue-500">kb</h1>
          <p className="text-lg text-gray-700">Software Engineer</p>
        </header>

        {/* Blurb */}
        <section>
          <p className="text-lg text-gray-600">
            i come from space for your nachos
          </p>
        </section>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="flex space-x-4 justify-center">
            <li>
              <a href="#" className="text-blue-500 hover:underline nav-link" onClick={handleClickLink('about')}>
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline nav-link" onClick={handleClickLink('projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline nav-link" onClick={handleClickLink('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Sections */}
        <div className="mt-8">
          {/* About Me Section */}
          {showSection === 'about' && (
            <div className="rounded-md h-48">
              <h2 className="text-lg font-bold mb-2">About Me</h2>
              <p>
              I'm an incessently curious, tenacious, deliberate, and whimsical dude who likes to build the things that live in-between. Full stack Engineer in disciplina with a burining interest for the middleware, microservices, APIs and frameworks that empower developers.
              </p>
            </div>
          )}

          {/* Projects Section */}
          {showSection === 'projects' && (
            <div className="p-4 rounded-md h-48">
              <h2 className="text-lg font-bold mb-2">Projects</h2>
              <div className="space-y-2">
                <a href="https://github.com/kbinreallife/github-pages-next-tailwind-boilerplate" className="block text-blue-500">
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    Boilerplate project to make websites like this one
                  </div>
                </a>
                <a href="https://github.com/kbinreallife/github-pages-next-tailwind-boilerplate" className="block text-blue-500">
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    A Github Organization Activity Visualizer
                  </div>
                </a>
                <a href="https://comcode.org" className="block text-blue-500">
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    The Organization I Volunteer for
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {showSection === 'contact' && (
            <div className="p-4 rounded-md h-48">
              <h2 className="text-lg font-bold mb-2">Contact</h2>
              <p>
                Nam tristique justo et justo mattis, eu mollis ligula volutpat. Sed nec feugiat justo. Cras dapibus,
                sapien eget molestie tincidunt, elit augue fermentum purus, sit amet congue eros tortor a est.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
