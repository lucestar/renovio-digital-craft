import teamImage from "@/assets/team-construction.jpg";

const teamMembers = [
  {
    name: "Max Schneider",
    role: "Gründer & Bauingenieur",
    quote: "Mein Ziel ist die perfekt getaktete Baustelle.",
    image: teamImage,
  },
  {
    name: "Lisa Wagner",
    role: "Digitale Planung",
    quote: "Ich sorge dafür, dass Sie Ihren Bauplan auf dem Handy verstehen.",
    initial: "LW",
  },
  {
    name: "Thomas Müller",
    role: "Bauleitung",
    quote: "Qualität bedeutet für mich: beim ersten Mal richtig.",
    initial: "TM",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Über Uns
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Digitale Tools,{" "}
              <span className="text-primary">echte Meister.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Wir lieben das Handwerk, aber wir hassten die Ineffizienz. Renovio
              wurde gegründet, um die Qualität traditioneller Handwerkskunst mit
              der Geschwindigkeit und Transparenz der digitalen Welt zu verbinden.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wir sind keine anonyme Plattform, sondern ein Team aus erfahrenen
              Bauleitern, Architekten und geprüften Meisterbetrieben, die
              Technologie nutzen, um besser zu arbeiten.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { value: "100%", label: "Meisterbetriebe" },
                { value: "15+", label: "Jahre Erfahrung" },
                { value: "24h", label: "Antwortzeit" },
              ].map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Team Cards */}
          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="card-elevated p-6 flex items-center gap-6"
              >
                {/* Avatar */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">
                      {member.initial}
                    </span>
                  </div>
                )}

                {/* Info */}
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
