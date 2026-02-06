import SelectedWorks from "./SelectedWorks";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-12 text-center">
          My Portfolio
        </h2>
        <SelectedWorks />
      </div>
    </section>
  );
};

export default Portfolio;
