import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact-form';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-background pt-10 sm:pt-16">
      <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
      <div className="container mx-auto py-10 sm:py-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contactez-nous</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Prêt à transformer votre espace ? Demandez votre devis gratuit dès aujourd'hui.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-lg bg-card p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Formulaire de contact</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Nos coordonnées</h3>
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Téléphone</h4>
                  <a href="tel:0468524081" className="text-muted-foreground hover:text-primary transition-colors">0468 52 40 81</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:info@clairnet.be" className="text-muted-foreground hover:text-primary transition-colors">info@clairnet.be</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Adresse</h4>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Bd+Cuivre+et+Zinc+35%2C+4030+Li%C3%A8ge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Bd Cuivre et Zinc 35, 4030 Liège
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
