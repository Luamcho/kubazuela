import { renderToString } from "react-dom/server";
import { ContentContext, type SiteContent } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";

// Static, no-op home page render used only for prerendering. Mirrors the
// "inicio" branch of <App/> but skips useHashPage() (which reads
// window.location at render time) since prerendering always targets the
// home route — the SPA takes over hash-based routing after hydration.
function StaticHome() {
  return (
    <div className="min-h-screen bg-paper font-body">
      <Nav onSection={() => {}} onGallery={() => {}} />
      <Hero />
      <About />
      <HowItWorks />
      <Menu onSeeAll={() => {}} />
      <Reviews />
      <OrderSection />
      <Footer />
    </div>
  );
}

export function renderApp(content: SiteContent): string {
  return renderToString(
    <ContentContext.Provider value={content}>
      <StaticHome />
    </ContentContext.Provider>
  );
}
