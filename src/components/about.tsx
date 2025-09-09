const About = () => {
  return (
    <section id="about" className="bg-secondary text-secondary-foreground py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <video
              src="https://videos.pexels.com/video-files/4692257/4692257-hd_1920_1080_25fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
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
