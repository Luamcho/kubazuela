import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/pages/Gallery";
import { useHashPage } from "@/lib/useHashPage";

function App() {
  const { page, goTo } = useHashPage();

  if (page === "galeria") {
    return <Gallery onBack={() => goTo("inicio")} />;
  }

  return (
    <div className="min-h-screen bg-paper font-body">
      <Nav onGallery={() => goTo("galeria")} />
      <Hero />
      <About />
      <HowItWorks />
      <Menu onSeeAll={() => goTo("galeria")} />
      <Reviews />
      <OrderSection />
      <Footer />
    </div>
  );
}

export default App;
