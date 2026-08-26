import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useContent } from "@/lib/content";

interface GalleryProps {
  onSection: (id: string) => void;
  onGallery: () => void;
}

export function Gallery({ onSection, onGallery }: GalleryProps) {
  const { menu, contact } = useContent();
  const groups = menu.groups;
  const WHATSAPP_URL = contact.whatsappUrl;

  return (
    <div className="min-h-screen bg-paper font-body">
      <Nav onSection={onSection} onGallery={onGallery} />

      <section className="bg-bay-dark">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center md:px-8 md:py-16">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSection("top");
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 font-body text-sm text-paper transition-colors hover:border-mango hover:text-mango"
          >
            ← Volver al inicio
          </a>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-mango">
              Nuestros platillos
            </span>
            <h1 className="mt-2 font-display text-4xl uppercase text-paper md:text-5xl">
              Todos nuestros platillos
            </h1>
            <p className="mx-auto mt-3 max-w-xl font-body text-sm text-paper/70">
              Fotos reales de nuestros platillos, tal como aparecen en nuestro
              perfil de Google. Toca "Realizar pedido" para pedir cualquiera
              por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16 space-y-14">
        {groups.map((group) => (
          <div key={group.id}>
            <h2 className="mb-6 border-b border-ink/10 pb-3 font-display text-2xl uppercase text-bay md:text-3xl">
              {group.label}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm"
                >
                  <div className="aspect-square w-full overflow-hidden bg-ink/5">
                    {item.photo ? (
                      <img
                        src={item.photo}
                        alt={`${item.name} — KubaZuela, comida venezolana y cubana en Riverview FL`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-widest text-ink/30">
                        Sin foto
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-body font-semibold text-ink">
                        {item.name}
                      </h3>
                      <span className="whitespace-nowrap font-mono text-sm text-bay">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-1 font-body text-xs text-ink/60">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="bg-bay-dark">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center md:px-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mango px-6 py-3 font-body font-semibold text-bay-dark transition-colors hover:bg-paper"
          >
            Realizar pedido
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
