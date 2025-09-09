import { Building2, Home, GlassWater } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
  {
    icon: <Building2 className="h-12 w-12 text-secondary" />,
    title: 'Nettoyage de bureaux',
    description: 'Espaces de travail professionnels, sains et accueillants pour vos employés et clients.',
  },
  {
    icon: <Home className="h-12 w-12 text-secondary" />,
    title: 'Nettoyage de maisons',
    description: 'Un service de nettoyage résidentiel complet pour une maison étincelante de propreté.',
  },
  {
    icon: <GlassWater className="h-12 w-12 text-secondary" />,
    title: 'Entretien de vitrines',
    description: 'Des vitres et vitrines impeccables pour une première impression parfaite de votre commerce.',
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
        <div className="grid gap-8 md:grid-cols-3">
          {servicesData.map((service, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
