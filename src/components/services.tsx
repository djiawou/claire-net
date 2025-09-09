import { Building2, Home, GlassWater, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const servicesData = [
  {
    icon: <Building2 className="h-12 w-12 text-primary" />,
    title: 'Nettoyage de bureaux et commerces',
    description: 'Espaces de travail professionnels, sains et accueillants pour vos employés et clients.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'commercial cleaning',
  },
  {
    icon: <Home className="h-12 w-12 text-primary" />,
    title: 'Entretien d\'immeubles',
    description: 'Un service de nettoyage complet pour des parties communes impeccables.',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'apartment building',
  },
  {
    icon: <GlassWater className="h-12 w-12 text-primary" />,
    title: 'Lavage de vitres',
    description: 'Des vitres et vitrines impeccables pour une première impression parfaite.',
    image: 'https://images.unsplash.com/photo-1596634430994-3d16a4a03a89?q=80&w=1887&auto=format&fit=crop',
    aiHint: 'window cleaning',
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: 'Nettoyage écologique',
    description: 'Des solutions respectueuses de l\'environnement pour un nettoyage efficace.',
    image: 'https://images.unsplash.com/photo-1590699268393-22521f201e7e?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'eco cleaning',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Des prestations de qualité adaptées à tous vos besoins en matière de propreté.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <Card key={index} className="relative text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={service.aiHint}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="relative h-full flex flex-col justify-center items-center text-white p-6">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/20 border-2 border-primary mb-4 group-hover:bg-accent/30 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{service.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
