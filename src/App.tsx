import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { FeaturedProject } from './components/FeaturedProject';
import { Experience } from './components/Experience';
import { LessonsLearned } from './components/LessonsLearned';
import { Philosophy } from './components/Philosophy';
import { PersonalEdge } from './components/PersonalEdge';
import { Contact } from './components/Contact';
import GradualBlur from './components/GradualBlur';
import SplashCursor from './components/SplashCursor';
import './index.css';

function App() {
  return (
    <>
      <SplashCursor />
      <main className="page" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <div style={{ height: '100%', overflowY: 'auto', padding: '0' }}>
          <Hero />
          <About />
          <WhatIDo />
          <FeaturedProject />
          <Experience />
          <LessonsLearned />
          <Philosophy />
          <PersonalEdge />
          <Contact />
        </div>
        <GradualBlur
          target="parent"
          position="bottom"
          height="7rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </main>
    </>
  );
}

export default App;
