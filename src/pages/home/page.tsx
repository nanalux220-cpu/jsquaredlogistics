import useFilm from '@/hooks/useFilm';
import usePanels from '@/hooks/usePanels';
import Nav from './components/Nav';
import Chapter from './components/Chapter';
import Pillars from './components/Pillars';
import Featured from './components/Featured';
import OperatingArea from './components/OperatingArea';
import AboutStudio from './components/AboutStudio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useFilm();
  usePanels();
  return (
    <>
      <Nav />
      <main>
        <Chapter />
        <Pillars />
        <Featured />
        <OperatingArea />
        <AboutStudio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}