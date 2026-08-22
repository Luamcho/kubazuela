import { useEffect, useState } from "react";

export function useHashPage() {
  const [page, setPage] = useState(() =>
    window.location.hash === "#galeria" ? "galeria" : "inicio"
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

  return { page, goTo };
}
