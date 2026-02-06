const About = () => {
  return (
    <section id="about" className="py-24 bg-forest-dark">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center mb-6">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <p className="text-foreground/90 text-lg leading-relaxed">
              I'm a recent B.Sc. Animation graduate from Manipal Academy of Higher Education (2025) with a strong foundation in 3D modeling and visual development.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I have completed two internships in VFX and game studios and actively freelance in graphic design and branding.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My interests lie in game character concept art, environment assets, and overall visual development. I aspire to work as a Visual Concept Developer and eventually build my own creative business.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
                alt="Creative Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
