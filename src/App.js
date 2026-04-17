import React from 'react';

import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 text-[#33ff33] font-mono bg-black">
      {/* Terminal Header */}
      <header className="retro-border bg-black p-4 mb-8">
        <h1 className="text-3xl crt-glow uppercase tracking-tighter">
          &gt; SYSTEM_OPERATOR: VILLANUEVA_PORTFOLIO_V1.0
        </h1>
        <p className="opacity-70 mt-2">LAST_LOGIN: {new Date().toLocaleDateString()} ON TTY0</p>
      </header>

      {/* Main Terminal Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="retro-border p-6 bg-black/50">
          <Aboutme />
        </div>
        
        <div className="retro-border p-6 bg-black/50">
          <Skills />
        </div>

        <div className="retro-border p-6 bg-black/50">
          <Experience />
        </div>

        <div className="retro-border p-6 bg-black/50">
          <Education />
        </div>

        <div className="retro-border p-6 bg-black/50 md:col-span-2">
          <Projects />
        </div>

        <div className="retro-border p-6 bg-black/50 md:col-span-2">
          <Contact />
        </div>

      </main>

      <footer className="mt-12 text-center opacity-50 animate-pulse">
        [ END OF TRANSMISSION - PRESS ANY KEY TO CONTINUE ]
      </footer>
    </div>
  );
}

export default App;