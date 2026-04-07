import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LipsTransition from './components/LipsTransition';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <main className="relative bg-[#f8f8f8] text-[#1a1a1a] transition-colors duration-700">
        <Navbar />
        <Hero />
        <LipsTransition />
        <ProductShowcase />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
