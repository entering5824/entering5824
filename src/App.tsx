import { useEffect, useSyncExternalStore } from 'react';
import { projects } from './projects';
import { ProjectIndex, ProjectDetail, About, Contact } from './components/Portfolio';
import './index.css';
const subscribe = (notify: () => void) => { window.addEventListener('hashchange', notify); return () => window.removeEventListener('hashchange', notify); };
const readHash = () => window.location.hash;
const navigation = [['Overview', '#overview'], ['Projects', '#work'], ['About', '#about'], ['Contact', '#contact']];
function App() {
  const hash = useSyncExternalStore(subscribe, readHash, () => '#overview');
  useEffect(() => {
    if (hash !== '#content') window.scrollTo(0, 0);
  }, [hash]);
  const selected = projects.find(project => hash === `#project-${project.id}`) ?? projects[0];
  const section = hash.startsWith('#project-') || hash === '#work' ? 'Projects' : ['#about', '#capabilities', '#experience'].includes(hash) ? 'About' : hash === '#contact' ? 'Contact' : 'Overview';
  return <div className="site-shell">
    <a className="skip-link" href="#content">Skip to content</a>
    <header className="topbar"><a className="brand" href="#overview" aria-label="Entering home">ENTERING</a><nav aria-label="Main navigation">{navigation.map(([label, href]) => <a key={label} href={href} aria-current={section === label ? 'page' : undefined}>{label}</a>)}</nav></header>
    <main id="content" tabIndex={-1} className={`workspace view-${section.toLowerCase()}`}>
      {section === 'Overview' ? <><section className="overview-copy" aria-labelledby="intro-title"><div className="intro"><h1 id="intro-title">Ideas into<br /><span>useful systems.</span></h1><p className="lede">I’m <strong>Phạm Nguyễn Minh Tú</strong>, an AI student building across machine learning, speech, computer vision, and product engineering.</p><div className="actions"><a className="button" href="#work">Explore projects <span aria-hidden="true">→</span></a><a className="text-link" href="#contact">Get in touch <span aria-hidden="true">→</span></a></div></div><div className="focus-areas" aria-label="Focus areas"><span>Applied AI</span><span>Product engineering</span><span>Local-first tools</span></div></section><ProjectIndex /></> : section === 'Projects' ? <><ProjectDetail project={selected} /><ProjectIndex selectedId={selected.id} /></> : section === 'About' ? <About /> : <Contact />}
    </main>
    <footer className="site-footer"><span>PHẠM NGUYỄN MINH TÚ</span><div><a href="https://github.com/entering5824" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="https://linkedin.com/in/entering5824" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></footer>
  </div>;
}
export default App;
