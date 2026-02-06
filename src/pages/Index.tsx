import NavHeader from "@/components/NavHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SelectedWorks from "@/components/SelectedWorks";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <Hero />
      <About />
      <Services />
      <SelectedWorks />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
