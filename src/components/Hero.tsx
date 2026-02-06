import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-forest-deep/85" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 animate-fade-in">
          <span className="text-foreground">Hi, I'm </span>
          <span className="italic text-primary">Thannushree Durairaj</span>
        </h1>
        
        <p className="text-sage-muted text-lg md:text-xl mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Visual Development Artist · Concept Artist · Freelancer
        </p>
        
        <p className="text-muted-foreground text-base md:text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Building visual stories through art, design, and creative exploration.
        </p>
        
        <a 
          href="#portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary/20 text-primary border border-primary/30 rounded-full hover:bg-primary/30 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          View Portfolio
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
