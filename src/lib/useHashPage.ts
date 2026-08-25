import { useEffect, useState } from "react";
import { scrollToId } from "@/lib/scroll";

// A visitor can land on /platillos.html directly (from a Google result, a
// shared link, etc.) as well as via the in-app "#galeria" hash. Treat both
// as the same page so the SPA behaves consistently either way.
function isGalleryPath() {
  return window.location.pathname.replace(/^.*\//, "") === "platillos.html";
}

export function useHashPage() {
  const [page, setPage] = useState(() =>
    window.location.hash === "#galeria" || isGalleryPath() ? "galeria" : "inicio"
  );

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash === "#galeria" ? "galeria" : "inicio");
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const goTo = (target: "inicio" | "galeria") => {
    window.location.hash = target === "galeria" ? "#galeria" : "";
    setPage(target);
    window.scrollTo({ top: 0 });
  };

  // Navigate to the home page and scroll to a specific section within it.
  // Used so the nav bar can jump straight to a section even from other pages.
  const goToSection = (id: string) => {
    if (id === "top") {
      goTo("inicio");
      return;
    }
    window.location.hash = "";
    setPage("inicio");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToId(id));
    });
  };

  return { page, goTo, goToSection };
}
