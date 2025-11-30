import { Home, Bath, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bathroomImage from "@/assets/bathroom-renovation.jpg";

const services = [
  {
    icon: Home,
    title: "Komplettsanierung",
    description:
      "Von der Entkernung bis zum letzten Pinselstrich. Wir koordinieren Elektrik, Sanitär, Boden und Wände – alles aus einer Hand.",
    features: ["Entkernung", "Elektrik & Sanitär", "Böden & Wände", "Finale Reinigung"],
  },
  {
    icon: Bath,
    title: "Badsanierung Digital",
    description:
      "Ihr neues Traumbad zum Festpreis. Wir planen in 3D und setzen schnell um – mit digitaler Präzision.",
    features: ["3D-Planung", "Festpreis", "7-14 Tage Umsetzung", "5 Jahre Garantie"],
    featured: true,
    image: bathroomImage,
  },
  {
    icon: Building2,
    title: "Wohnung & Immobilie",
    description:
      "Ideal für Kapitalanleger und Eigentümer, die eine Immobilie schnell wieder vermietbar machen wollen.",
    features: ["Schnelle Umsetzung", "Vermietungsoptimiert", "Wertsteigerung", "Rundum-Service"],
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ihr Projekt in <span className="text-primary">besten Händen.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir fokussieren uns auf Komplettlösungen, damit Sie nur einen Ansprechpartner
            für alles haben.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-elevated overflow-hidden group ${
                service.featured ? "lg:scale-105 ring-2 ring-accent" : ""
              }`}
            >
              {/* Image for featured service */}
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                {!service.image && (
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                )}

                {/* Featured Badge */}
                {service.featured && (
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Beliebt
                  </span>
                )}

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant={service.featured ? "default" : "outline"}
                  className={`w-full ${service.featured ? "btn-accent" : ""}`}
                >
                  <a href="#kontakt">
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
