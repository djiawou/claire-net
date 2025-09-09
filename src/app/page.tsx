import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
