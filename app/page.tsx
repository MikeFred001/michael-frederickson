"use client";

import Header from './components/Header';
import Intro from './components/Intro';
import Divider from './components/common/Divider';
import About from './components/About';
import FooterContacts from './components/FooterContacts';
import { useState, useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import { useActiveSection } from './hooks/useActiveSection';


export default function Home() {
  const { y } = useWindowScroll();
  const [hideFooter, setHideFooter] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [refs, setRefs] = useState<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setRefs([
      homeRef.current,
      aboutRef.current,
      projectsRef.current,
      contactRef.current
    ]);
  }, []);

  const activeSection = useActiveSection(refs);

  useEffect(() => {
    if (y === 0) {
      setHideFooter(false);
    } else if (y > 0 && !hideFooter) {
      setHideFooter(true);
    }
  }, [y, hideFooter]);

  return (
    <div className='HOME font-bebas'>
      <Header activeSection={activeSection} />
      <div id='home' ref={homeRef}>
        <Intro />
      </div>
      <Divider />
      <div id='about' ref={aboutRef}>
        <About />
      </div>
      <Divider reversed />
      <FooterContacts className={hideFooter ? 'opacity-0 pointer-events-none' : ''} />
    </div>
  );
}
