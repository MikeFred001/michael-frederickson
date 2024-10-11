import Image from 'next/image';
import Header from './components/Header';
import Intro from './components/Intro';
import Divider from './components/common/Divider';
import About from './components/About';

export default function Home() {
  return (
    <div className='HOME'>
      <Header />
      <Intro />
      <Divider reversed={false} />
      <About />
    </div>
  );
}
