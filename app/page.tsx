"use client";

import { useState } from "react";

const announcements = [
  "WE ARE RECOMMENDED BY IIT BOMBAY",
  "CHECK IT OUT",
  "BUILD SOMETHING AMAZING",
  "JOIN OUR COMMUNITY",
];

const projects = [
  {
    label: "PROJECT OF THE MONTH",
    title: "Building a better tomorrow",
    author: "COMMUNITY",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
    className: "project-card",
  },
  {
    label: "MAKER MONDAY",
    title: "Ideas become reality",
    author: "MEET OUR MAKER",
    image:
      "vinay_pic.png",
    className: "maker-card",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="announcement" aria-label="Announcements">
        <div className="announcement-track">
          {[0, 1, 2, 3].map((copy) => (
            <div className="announcement-group" key={copy}>
              {announcements.map((item, index) => (
                <span className="announcement-item" key={item}>
                  {index % 2 === 1 ? (
                    <a href="#community">{item}</a>
                  ) : (
                    item
                  )}
                  <span className="star">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="Dream and Reality home">
          T/H
        </a>

        <button
          className="index-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          {menuOpen ? "CLOSE ×" : "TECHVRUK"}
        </button>

        {menuOpen && (
          <nav className="menu-panel" id="site-menu">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              01 — Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              02 — About us
            </a>
            <a href="#community" onClick={() => setMenuOpen(false)}>
              03 — Community
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              04 — Contact
            </a>
          </nav>
        )}
      </header>

      <section className="hero" id="home">
        <div className="decoration square square-one" />
        <div className="decoration square square-two" />
        <div className="decoration square square-three" />
        <div className="decoration square square-four" />
        <div className="decoration square square-five" />

        <article className="floating-card left-card">
          <span className="pin" />
          <p className="card-eyebrow">{projects[0].label}</p>
          <h3>{projects[0].title}</h3>
          <p className="card-author">{projects[0].author}</p>
          <div className="image-orbit purple-orbit">
            <img src={projects[0].image} alt="Creative workspace" />
          </div>
          <span className="card-number">001 / IDEAS</span>
        </article>

        <article className="floating-card right-card">
          <span className="pin" />
          <p className="card-eyebrow">MAKER MONDAY</p>
          <h3>Maker<br />Monday</h3>
          <p className="card-author">MEET THE COMMUNITY</p>
          <div className="image-orbit green-orbit">
            <img src={projects[1].image} alt="Community of makers" />
          </div>
          <span className="card-number">002 / PEOPLE</span>
        </article>

        <div className="hero-content" id="about">
          <p className="eyebrow">THE SPACE BETWEEN</p>

          <h1 className="hero-title">
            <span className="title-line">DREAM</span>
            <span className="title-line second-line">
              REALITY
              <span className="ampersand" aria-label="and">
                &amp;
              </span>
            </span>
          </h1>

          <p className="hero-description">
            TechVruk is a community of technologists, makers &amp;
            students — working towards mapping and empowering people who
            share a passion to innovate.
          </p>

          <p className="legal-note">
            Registered as a OPC (One Person Company) under the Companies Act, 2013. CIN: U74999KA2020NPL141168
          </p>

          <a className="discover-link" href="#community">
            DISCOVER OUR WORLD <span>↘</span>
          </a>
        </div>
      </section>

      <section className="community-section" id="community">
        <p className="eyebrow">GOOD IDEAS GROW TOGETHER</p>
        <h2>Make room for the impossible.</h2>
        <p>
          A community for curious minds, creative experiments, and
          the people who turn imagination into action.
        </p>
        <a className="community-link" href="#contact">
          FIND YOUR PEOPLE ↗
        </a>
      </section>

      <footer className="footer" id="contact">
        <span>TECHVRUK</span>
        <span>Looking for footer? 😉 It's 2026</span>
        <a href="mailto:hello@techvruk.org">SAY HELLO ↗</a>
      </footer>
    </main>
  );
}