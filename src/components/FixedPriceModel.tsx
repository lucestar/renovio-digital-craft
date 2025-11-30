import { Video, Calculator, FileCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Video,
    number: "01",
    title: "Digitaler Check",
    description:
      "Sie senden uns Fotos und Infos oder wir machen einen Video-Call. Für größere Projekte kommen wir mit digitalem Aufmaß vor Ort.",
  },
  {
    icon: Calculator,
    number: "02",
    title: "Präzise Kalkulation",
    description:
      "Unsere Software kalkuliert Material und Arbeitszeit auf Basis von Erfahrungsdaten aus hunderten Projekten – präzise und fair.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Das Festpreis-Angebot",
    description:
      "Sie erhalten ein verbindliches Angebot mit einem Preis, der sich nicht mehr ändert. Punkt. Keine versteckten Kosten, keine Nachträge.",
  },
];

const FixedPriceModel = () => {
  return (
    <section id="festpreis" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-accent/20 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            Der Gamechanger
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Schluss mit versteckten Kosten.{" "}
            <span className="text-accent">Unser Fixpreis-Versprechen.</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Im traditionellen Handwerk sind Angebote oft nur Schätzungen. Bei Renovio
            nutzen wir Daten und digitale Aufmaße, um präzise zu kalkulieren.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-accent/30" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold mb-6 relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-24 -right-4 w-8 h-8 bg-accent rounded-full items-center justify-center z-20">
                  <svg
                    className="w-4 h-4 text-accent-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee Box */}
        <div className="mt-16 bg-accent/10 rounded-2xl p-8 md:p-12 border border-accent/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-10 h-10 text-accent-foreground" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Unsere Garantie</h3>
              <p className="text-primary-foreground/80 text-lg">
                Sollte der finale Preis über dem Angebot liegen, übernehmen wir die Differenz.
                100% Festpreis bedeutet 100% Planungssicherheit für Sie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedPriceModel;
