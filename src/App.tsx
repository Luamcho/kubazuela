import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paper font-body">
      <Nav />
      <Hero />
      <About />
      <HowItWorks />
      <Menu />
      <Reviews />
      <OrderSection />
      <Footer />
    </div>
  );
}

export default App;
