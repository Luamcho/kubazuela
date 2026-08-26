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

    // If we landed on the real home page with a section hash (e.g. someone
    // followed a "/#menu" link from platillos.html), scroll to it once the
    // page has laid out. "#galeria" is handled separately above.
    const initialHash = window.location.hash;
    if (!isGalleryPath() && initialHash && initialHash !== "#galeria") {
      const id = initialHash.slice(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToId(id));
      });
    }

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const goTo = (target: "inicio" | "galeria") => {
    // Already on the real /platillos.html page — no hash to add, just make
    // sure we're scrolled up (avoids URLs like "platillos.html#galeria").
    if (target === "galeria" && isGalleryPath()) {
      setPage("galeria");
      window.scrollTo({ top: 0 });
      return;
    }
    // Going "home" from the real /platillos.html page needs an actual
    // navigation back to "/" — there is no home content to reveal in place.
    if (target === "inicio" && isGalleryPath()) {
      window.location.href = "/";
      return;
    }
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
    // From the real /platillos.html page there's no home content mounted to
    // scroll within — do a real navigation to "/#<section>" instead.
    if (isGalleryPath()) {
      window.location.href = "/#" + id;
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
