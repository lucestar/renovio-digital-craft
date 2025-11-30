import { Smartphone, Shield, Clock } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

const features = [
  {
    icon: Smartphone,
    title: "100% Digital & Transparent",
    description:
      "Vergessen Sie Zettelwirtschaft und verlorene E-Mails. Bei uns haben Sie ein digitales Kundenportal. Sehen Sie Baupläne, Zeitpläne und den aktuellen Status Ihres Projekts jederzeit live ein.",
  },
  {
    icon: Shield,
    title: "Festpreis-Garantie",
    description:
      "Keine bösen Überraschungen am Ende. Nach unserer digitalen Bestandsaufnahme erhalten Sie ein verbindliches Festpreisangebot. Der Preis steht, egal was passiert.",
  },
  {
    icon: Clock,
    title: "Effizient & Termintreu",
    description:
      "Durch digitale Prozessoptimierung vermeiden wir Leerlaufzeiten. Wir koordinieren alle Gewerke perfekt aufeinander abgestimmt und garantieren den Fertigstellungstermin.",
  },
];

const WhyRenovio = () => {
  return (
    <SectionReveal id="warum-renovio" className="section-padding bg-secondary">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Warum Renovio?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Handwerk neu gedacht.{" "}
            <span className="text-primary">Warum wir anders sind.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir lösen die größten Schmerzpunkte der klassischen Handwerkersuche – mit
            digitaler Präzision und handwerklicher Qualität.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="card-elevated p-8 text-center group h-full">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Bar */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border" staggerDelay={0.1}>
          {[
            { value: "15+", label: "Jahre Erfahrung" },
            { value: "500+", label: "Projekte abgeschlossen" },
            { value: "100%", label: "Festpreis-Garantie" },
            { value: "98%", label: "Termintreue" },
          ].map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
};

export default WhyRenovio;
