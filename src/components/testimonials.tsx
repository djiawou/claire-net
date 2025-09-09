import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonialsData = [
  {
    name: 'Jean Dupont',
    company: 'Tech Solutions Inc.',
    quote: 'Le service de Clair&Net est exceptionnel. Nos bureaux n\'ont jamais été aussi propres. Une équipe professionnelle et discrète.',
    rating: 5,
    avatar: 'JD',
  },
  {
    name: 'Marie Martin',
    company: 'Particulier',
    quote: 'Un grand merci à l\'équipe pour leur travail méticuleux à mon domicile. Je recommande vivement leurs services.',
    rating: 5,
    avatar: 'MM',
  },
  {
    name: 'Paul Bernard',
    company: 'Boutique Chic',
    quote: 'Nos vitrines sont toujours impeccables grâce à Clair&Net. Cela fait une énorme différence pour notre image de marque.',
    rating: 5,
    avatar: 'PB',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ce que disent nos clients</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            La confiance et la satisfaction de nos clients sont notre meilleure publicité.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4 pb-4">
                 <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.name}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`}
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
