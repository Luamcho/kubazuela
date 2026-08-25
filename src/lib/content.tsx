import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  photo?: string;
}

export interface MenuGroup {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
}

export interface SiteContent {
  hero: { ratingBadge: string; subtitle: string };
  about: { titleLine1: string; titleLine2: string; body: string };
  contact: { phoneDisplay: string; whatsappUrl: string; address: string };
  hours: { weekday: string; weekend: string };
  reviews: { rating: string; countLabel: string };
  menu: { groups: MenuGroup[] };
}

export const ContentContext = createContext<SiteContent | null>(null);

// Fallback content used only if content.json fails to load (network issue, etc.)
const FALLBACK: SiteContent = {
  hero: {
    ratingBadge: "5.0 · 8 reseñas en Google",
    subtitle:
      "Sabor latino auténtico en cada bocado, preparado por encargo. Operamos exclusivamente con Delivery y Pick-up.",
  },
  about: {
    titleLine1: "Dos países,",
    titleLine2: "una sola mesa",
    body: "Auténtico sabor latino en cada bocado, por Delivery y Pick-up.",
  },
  contact: {
    phoneDisplay: "(786) 307-7229",
    whatsappUrl: "https://wa.me/17863077229",
    address: "10341 Avelar Ridge Dr, Riverview, FL 33578",
  },
  hours: {
    weekday: "Lunes a viernes · 4:00 pm – 10:00 pm",
    weekend: "Sábado y domingo · 10:00 am – 10:00 pm",
  },
  reviews: { rating: "5.0", countLabel: "8 reseñas en Google" },
  menu: { groups: [] },
};

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    fetch(`${base}data/content.json?t=${Date.now()}`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar content.json");
        return res.json();
      })
      .then((data: SiteContent) => setContent(data))
      .catch(() => setContent(FALLBACK));
  }, []);

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bay-dark">
        <div className="font-mono text-xs uppercase tracking-widest text-mango">
          Cargando…
        </div>
      </div>
    );
  }

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent(): SiteContent {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent debe usarse dentro de <ContentProvider>");
  }
  return ctx;
}
