import { Star, Quote } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    name: "Markus S.",
    location: "München",
    project: "Altbauwohnung Sanierung",
    rating: 5,
    text: "Ich hatte Angst vor einer Sanierung aus der Ferne. Mit dem digitalen Dashboard von Renovio wusste ich aber immer genau, was passiert. Der Preis wurde auf den Cent eingehalten.",
    highlight: "Preis auf den Cent eingehalten",
  },
  {
    name: "Sandra K.",
    location: "Hamburg",
    project: "Komplette Badsanierung",
    rating: 5,
    text: "Nach drei schlechten Erfahrungen mit Handwerkern war ich skeptisch. Renovio hat alles verändert – pünktlich, sauber, zum vereinbarten Preis. So muss das sein!",
    highlight: "Pünktlich, sauber, zum vereinbarten Preis",
  },
  {
    name: "Thomas M.",
    location: "Berlin",
    project: "Mietwohnung Renovierung",
    rating: 5,
    text: "Als Vermieter brauche ich schnelle, zuverlässige Lösungen. Renovio hat meine Wohnung in Rekordzeit wieder vermietbar gemacht – und ich konnte alles am Tablet verfolgen.",
    highlight: "In Rekordzeit wieder vermietbar",
  },
];

const Testimonials = () => {
  return (
    <SectionReveal id="referenzen" className="section-padding bg-secondary">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ergebnisse, die{" "}
            <span className="text-primary">für sich sprechen.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Über 500 zufriedene Kunden vertrauen auf unsere digitale Sanierungsmethode.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="card-elevated p-8 relative group h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Highlight */}
                <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-6">
                  {testimonial.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.project} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Social Proof Bar */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Über 500 erfolgreiche Projekte in ganz Deutschland
          </p>
          <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 opacity-60" staggerDelay={0.05}>
            {["München", "Berlin", "Hamburg", "Frankfurt", "Köln", "Stuttgart"].map(
              (city) => (
                <StaggerItem key={city}>
                  <span className="text-foreground font-semibold text-lg">
                    {city}
                  </span>
                </StaggerItem>
              )
            )}
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </SectionReveal>
  );
};

export default Testimonials;
