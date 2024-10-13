"use client";

import Image from 'next/image';
import Header from './components/Header';
import Intro from './components/Intro';
import Divider from './components/common/Divider';
import About from './components/About';
import FooterContacts from './components/FooterContacts';
import { useState, useEffect } from 'react';
import { useScroll, useWindowScroll } from 'react-use';

export default function Home() {
  const { y } = useWindowScroll();
  const [hideFooter, setHideFooter] = useState(false);

  useEffect(() => {
    if (y === 0) {
      setHideFooter(false);
    } else if (y > 0 && !hideFooter) {
      setHideFooter(true);
    }
  }, [y, hideFooter]);

  return (
    <div className='HOME'>
      <Header />
      <Intro />
      <Divider />
      <About />
      <Divider reversed />
      <FooterContacts className={hideFooter ? 'opacity-0 pointer-events-none' : ''} />
    </div>
  );
}
