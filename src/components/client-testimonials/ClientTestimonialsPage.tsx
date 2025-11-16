
import { ClientTestimonials } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function ClientTestimonialsPage() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Words from Those I've Worked With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These testimonials reflect the impact and dedication I bring to every project, whether in education, administration, or literature.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {ClientTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <a 
            href="./contact-me.html"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:magical-glow transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
