import { Building2, Home, GlassWater, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const servicesData = [
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: 'Nettoyage de bureaux et commerces',
    description: 'Espaces de travail professionnels, sains et accueillants pour vos employés et clients.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'office cleaning',
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Entretien d\'immeubles',
    description: 'Un service de nettoyage complet pour des parties communes impeccables.',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'building maintenance',
  },
  {
    icon: <GlassWater className="h-10 w-10 text-primary" />,
    title: 'Lavage de vitres',
    description: 'Des vitres et vitrines impeccables pour une première impression parfaite.',
    image: 'https://picsum.photos/1770/1180',
    aiHint: 'window cleaning',
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Nettoyage écologique',
    description: 'Des solutions respectueuses de l\'environnement pour un nettoyage efficace.',
    image: 'https://picsum.photos/1770/1179',
    aiHint: 'eco friendly',
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
            <Card key={index} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                  data-ai-hint={service.aiHint}
                />
              </div>
              <CardHeader className="items-center">
                 {service.icon}
                <CardTitle className="mt-4 text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
