import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-secondary text-secondary-foreground py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/800/600"
              alt="Équipe de nettoyage Clair&Net"
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint="cleaning staff"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Clair&Net est une entreprise de nettoyage de premier plan, dédiée à fournir des environnements propres, sûrs et sains. Notre équipe de professionnels formés et fiables utilise des produits écologiques et les dernières technologies pour dépasser vos attentes.
            </p>
            <p className="text-lg text-secondary-foreground/80">
              Notre engagement envers l'excellence et la satisfaction client est au cœur de tout ce que nous faisons. Nous sommes fiers de construire des relations durables basées sur la confiance et la qualité de service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
