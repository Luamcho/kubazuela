import { useState } from "react";
import logo from "@/assets/logo";
import { useContent } from "@/lib/content";

const links = [
  { id: "menu", label: "Menú" },
  { id: "como-funciona", label: "Cómo pedir" },
  { id: "opiniones", label: "Opiniones" },
  { id: "pedir", label: "Ubicación" },
];

interface NavProps {
  onSection: (id: string) => void;
  onGallery: () => void;
}

export function Nav({ onSection, onGallery }: NavProps) {
  const [open, setOpen] = useState(false);
  const { contact } = useContent();
  const WHATSAPP_URL = contact.whatsappUrl;

  const goTo = (id: string) => {
    setOpen(false);
    onSection(id);
  };

  const goToGallery = () => {
    setOpen(false);
    onGallery();
  };

  return (
    <header className="sticky top-0 z-50 bg-bay-dark/95 backdrop-blur-sm border-b border-mango/20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between">
        <button type="button" onClick={() => goTo("top")} className="flex items-center gap-3 group">
          <img src={logo} alt="KubaZuela" className="h-10 w-auto" />
        </button>

        <nav className="hidden md:flex items-center gap-2 font-body text-sm">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className="rounded-full px-4 py-2 text-paper/80 transition-colors hover:bg-paper/10 hover:text-mango"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={goToGallery}
            className="rounded-full px-4 py-2 text-paper/80 transition-colors hover:bg-paper/10 hover:text-mango"
          >
            Galería
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mango hover:bg-mango-dark text-bay-dark font-body font-semibold text-sm px-4 py-2 transition-colors"
          >
            <span className="hidden sm:inline">Realizar pedido</span>
            <span className="sm:hidden">Pedir</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-paper/20 text-paper transition-colors hover:border-mango hover:text-mango md:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5]">
                <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5]">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-paper/10 bg-bay-dark px-5 py-3 font-body text-sm md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className="rounded-full px-4 py-2.5 text-left text-paper/80 transition-colors hover:bg-paper/10 hover:text-mango"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={goToGallery}
            className="rounded-full px-4 py-2.5 text-left text-paper/80 transition-colors hover:bg-paper/10 hover:text-mango"
          >
            Galería
          </button>
        </nav>
      )}
    </header>
  );
}
