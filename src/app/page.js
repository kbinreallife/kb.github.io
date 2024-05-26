'use client'
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';

const DynamicHome = dynamic(() => import('./globals.css'), { ssr: false });

export { DynamicHome };

export default function Home() {
  const [showSection, setShowSection] = useState(null);
  const outsideClickListener = useRef(null);
  const toggleSection = (section) => {
    setShowSection(showSection === section ? null : section);
  };

  const hideAllSections = () => {
    setShowSection(null);
  };

  useEffect(() => {
    outsideClickListener.current = (event) => {
      if (!event.target.closest('.nav-link') && !event.target.closest('.section-content')) {
        hideAllSections();
      }
    };
    document.addEventListener('click', outsideClickListener.current);
    return () => {
      document.removeEventListener('click', outsideClickListener.current);
    };
  }, []);

  const handleClickLink = useCallback((section) => {
    return (event) => {
      event.stopPropagation();
      toggleSection(section);
    };
  }, []);

  const badges = [
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/104579180',
      linkUrl: 'https://www.credential.net/104579180',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/104554484',
      linkUrl: 'https://www.credential.net/104554484',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/104434982',
      linkUrl: 'https://www.credential.net/104434982',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/104338603',
      linkUrl: 'https://www.credential.net/104338603',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/104338603',
      linkUrl: 'https://www.credential.net/104338603',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/104066782',
      linkUrl: 'https://www.credential.net/104066782',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/104066782',
      linkUrl: 'https://www.credential.net/104066782',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/104024819',
      linkUrl: 'https://www.credential.net/104024819',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/103848058',
      linkUrl: 'https://www.credential.net/103848058',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/92312569',
      linkUrl: 'https://www.credential.net/92312569',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/84649053',
      linkUrl: 'https://www.credential.net/84649053',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/84040776',
      linkUrl: 'https://www.credential.net/84040776',
    },
    {
      imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/37169657',
      linkUrl: 'https://www.credential.net/37169657',
    },
  ];

  return (
    <div className="min-h-screen place-items-center dark:bg-grey-100">
      <div className="max-w-md mx-auto py-8 text-center">
        <Head>
          <title>thekbsareinsidethecomputer</title>
          <meta name="description" content="what is this, a website for ants?" />
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
              <a href="#" className="text-blue-500 hover:underline nav-link" onClick={handleClickLink('badges')}>
                Badges
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
            <div className="rounded-md h-48 section-content">
              <h2 className="text-lg font-bold mb-2">About Me</h2>
              <p>
                I&apos;m an incessantly curious, tenacious, deliberate, and whimsical dude who likes to build the things that live in-between. Full stack Engineer in disciplina with a burning interest for the middleware, microservices, APIs and frameworks that empower developers.
              </p>
            </div>
          )}

          {/* Projects Section */}
          {showSection === 'projects' && (
            <div className="p-4 rounded-md h-48 section-content">
              <h2 className="text-lg font-bold mb-2">Projects</h2>
              <div className="space-y-2">
                <a href="https://github.com/kbinreallife/github-pages-next-tailwind-boilerplate" className="block text-blue-500" onClick={(e) => e.stopPropagation()}>
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    Boilerplate project to make websites like this one
                  </div>
                </a>
                <a href="https://github.com/kbinreallife/kbinreallife-Github_Activity_Visualizer" className="block text-blue-500" onClick={(e) => e.stopPropagation()}>
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    A Github Organization Activity Visualizer
                  </div>
                </a>
                <a href="https://comcode.org" className="block text-blue-500" onClick={(e) => e.stopPropagation()}>
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    The Organization I Volunteer for
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Badges Section */}
          {showSection === 'badges' && (
          <div className="p-4 rounded-md h-auto section-content">
            <h2 className="text-lg font-bold mb-2">Badges</h2>
            <div className="grid gap-4 grid-container md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {badges.map((badge, index) => (
                <a href={badge.linkUrl} target="_blank" rel="noopener noreferrer" key={index} onClick={(e) => e.stopPropagation()} className="grid-item">
                <img
                    src={badge.imageUrl}
                    alt={`Badge ${index + 1}`}
                    width="200"
                    height="200"
                    className='max-w-none'
                />
                </a>
            ))}
            </div>
          </div>
          )}

          {/* Contact Section */}
          {showSection === 'contact' && (
            <div className="p-4 rounded-md h-48 section-content">
              <h2 className="text-lg font-bold mb-2">Contact</h2>
              <div className="flex flex-col space-y-4">
                {/* LinkedIn */}
                <div>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/kyle-butcher-67424040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
                {/* Bluesky */}
                <div>
                  <p>
                    <a
                      href="https://bsky.app/profile/kbinreallife.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Bluesky
                    </a>
                  </p>
                </div>
                {/* Discord */}
                <div>
                  <h3 className="text-lg font-semibold"></h3>
                  <p>
                    <span className="text-blue-500 hover:underline">
                      <a href="https://discordapp.com/users/233443821940113408" onClick={(e) => e.stopPropagation()}>Discord</a>
                    </span>
                  </p>
                </div>
                <p>
                  <a
                    href="https://discord.gg/hackmud"
                    className="text-blue-500 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    hackmud discord
                  </a>
                </p>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
