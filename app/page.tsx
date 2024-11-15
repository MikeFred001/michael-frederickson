"use client";

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Divider from './components/common/Divider';
import FooterContacts from './components/FooterContacts';
import { useState, useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import { useActiveSection } from './hooks/useActiveSection';


export default function Home() {
  const { y } = useWindowScroll();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [hideFooter, setHideFooter] = useState(false);
  const [miniHeader, setMiniHeader] = useState(false);
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

  useEffect(() => {
    if (y < 425) {
      setMiniHeader(false);
    } else if (y > 425 && !miniHeader) {
      setMiniHeader(true);
    }
  }, [y, miniHeader]);

  return (
    <div className='HOME font-bebas'>
      <Header activeSection={activeSection} miniHeader={miniHeader} />

      <div id='home' ref={homeRef} className='h-screen flex flex-col justify-center gap-3 font-semibold text-[6rem]'>
        <Intro />
        <div className='h-[5px] -mt-3 bg-mred w-[90vw]' />
      </div>

      <Divider />

      <div id='about' ref={aboutRef} className='flex w-full justify-center bg-gray-200'>
        <About />
      </div>

      <Divider reversed />

      <div id='projects' ref={projectsRef} className='flex w-full py-10 px-[8rem]'>
        <Projects />
      </div>

      <Divider />

      <FooterContacts className={hideFooter ? 'opacity-0 pointer-events-none' : ''} />
    </div>
  );
}
