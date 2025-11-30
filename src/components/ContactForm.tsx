import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    squareMeters: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Anfrage gesendet!",
      description:
        "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      squareMeters: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Starten Sie Ihr Projekt.{" "}
              <span className="text-primary">Digital und einfach.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns innerhalb
              von 24 Stunden für eine erste digitale Einschätzung.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+4989123456789"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <div className="font-semibold">089 123 456 789</div>
                </div>
              </a>

              <a
                href="mailto:info@renovio.de"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-Mail</div>
                  <div className="font-semibold">info@renovio.de</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Standort</div>
                  <div className="font-semibold text-foreground">
                    München & ganz Deutschland
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-elevated p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ihr Name"
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="ihre@email.de"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefon (Optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+49 123 456789"
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Was möchten Sie sanieren? *
                  </label>
                  <Select
                    required
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Auswählen..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="komplett">Komplettwohnung</SelectItem>
                      <SelectItem value="bad">Bad</SelectItem>
                      <SelectItem value="kueche">Küche</SelectItem>
                      <SelectItem value="sonstiges">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="squareMeters"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Ungefähre Quadratmeterzahl
                </label>
                <Input
                  id="squareMeters"
                  type="text"
                  value={formData.squareMeters}
                  onChange={(e) =>
                    setFormData({ ...formData, squareMeters: e.target.value })
                  }
                  placeholder="z.B. 80 m²"
                  className="h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nachricht
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent w-full h-14 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Kostenlose Ersteinschätzung anfordern
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Ihre Daten werden vertraulich behandelt und nicht an Dritte
                weitergegeben.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
