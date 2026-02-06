const Blog = () => {
    return (
      <section id="blog" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-12 text-center">
            My Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for blog posts */}
            <div className="bg-forest-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Blog Post 1</h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
            <div className="bg-forest-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Blog Post 2</h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
            <div className="bg-forest-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Blog Post 3</h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Blog;
  