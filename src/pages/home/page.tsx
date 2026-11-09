import useReveal from '@/hooks/useReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Aerial from './components/Aerial';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <Services />
        <Aerial />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
