import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex h-[calc(100vh-4rem)] min-h-[500px] max-h-[800px] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Propreté garantie!
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-secondary-foreground/80 md:text-xl">
          Des solutions de nettoyage impeccables pour les entreprises et les particuliers.
          Votre satisfaction est notre priorité.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="text-lg font-bold">
            <Link href="#contact">Demandez votre devis gratuit!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
