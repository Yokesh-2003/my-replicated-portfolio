
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
