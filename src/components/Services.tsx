import { Palette, Layers, CalendarDays, BookOpen } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Concept Art",
    description: "Character and visual development for games and creative projects.",
  },
  {
    icon: Layers,
    title: "Branding & Graphic Design",
    description: "Visual identity systems, templates, and creative assets.",
  },
  {
    icon: CalendarDays,
    title: "Planner Management",
    description: "Creative planning systems for productivity and life organization.",
  },
  {
    icon: BookOpen,
    title: "Bullet Journal Planning",
    description: "Custom bullet journal spreads designed for clarity and growth.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I can do for you</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
