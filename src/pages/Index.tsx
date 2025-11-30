import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyRenovio from "@/components/WhyRenovio";
import Services from "@/components/Services";
import FixedPriceModel from "@/components/FixedPriceModel";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Renovio – Sanierung ohne Kopfschmerzen | Festpreis & Digital</title>
        <meta
          name="description"
          content="Renovio bietet digitale Komplettsanierung zum Festpreis. Transparente Planung, garantierte Termintreue und meisterhafte Qualität für Ihr Sanierungsprojekt."
        />
        <meta
          name="keywords"
          content="Sanierung, Renovierung, Badsanierung, Komplettsanierung, Festpreis, München, Deutschland"
        />
        <link rel="canonical" href="https://www.renovio.de" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <WhyRenovio />
          <Services />
          <FixedPriceModel />
          <Testimonials />
          <Team />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
