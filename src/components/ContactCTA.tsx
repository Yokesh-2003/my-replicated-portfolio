const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-6">
          Let's Create Something Beautiful
        </h2>
        
        <p className="text-muted-foreground text-lg mb-10">
          Available for freelance projects and collaborations.
        </p>
        
        <a 
          href="mailto:contact@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium"
        >
          Get in Touch
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
