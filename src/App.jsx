import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Contact, Footer } from "./components/Contact";
import SEO from "./components/SEO";
import SkipLink from "./components/skipLink";
import Background from "./components/Background";
import Divider from "./components/Divider";
import About from "./components/About";
import HowIHelp from "./components/HowIHelp";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-blue-500/30 selection:text-blue-200">
      <SkipLink />
      <SEO
        title="Saravanak Kumar T A | Full-Stack & Mobile Developer"
        description="Portfolio of Saravanak Kumar T A, a Full-Stack & Mobile Developer specializing in React, Node.js, and building high-performance web applications."
        name="@saravanakumar"
        type="website"
      />

      <Background />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Skills />
          <Divider />
          <HowIHelp />
          <Divider /> 
          <Projects />
          <Divider />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
