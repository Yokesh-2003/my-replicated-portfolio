import { ArrowRight } from "lucide-react";

const works = [
  {
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2819&auto=format&fit=crop",
    category: "Concept Art",
    title: "Fantasy Character Concept",
    description: "Character concepts and visual development explorations for games and storytelling.",
  },
  {
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop",
    category: "3D Modeling",
    title: "Sci-Fi Environment",
    description: "Game-ready and cinematic assets created during internships and academic projects.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop",
    category: "Graphic Design",
    title: "Eco Brand Identity",
    description: "Brand guidelines, social media templates, and visual identities for global clients.",
  },
];

const SelectedWorks = () => {
  return (
    <section id="portfolio" className="py-24 bg-forest-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="section-title">Selected Works</h2>
          <p className="section-subtitle">
            A glimpse into my creative journey involving concept art, 3D modeling, and design.
          </p>
        </div>
        
        <div className="text-center mb-12">
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div 
              key={work.title}
              className="group cursor-pointer card-hover"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                <img 
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                    {work.category}
                  </span>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </div>
              
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                View Project
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
