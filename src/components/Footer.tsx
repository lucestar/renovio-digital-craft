import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-foreground text-primary-foreground section-padding py-16"
    >
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">Renovio</span>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Sanierung ohne Kopfschmerzen. Digital geplant, meisterhaft gebaut.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Social Media Link"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Warum Renovio", "Leistungen", "Festpreis", "Referenzen", "Team"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {[
                "Komplettsanierung",
                "Badsanierung",
                "Wohnungssanierung",
                "Gewerbesanierung",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#leistungen"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a
                  href="tel:+4989123456789"
                  className="hover:text-primary-foreground transition-colors"
                >
                  089 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@renovio.de"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@renovio.de
                </a>
              </li>
              <li>München & ganz Deutschland</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Renovio. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              AGB
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
