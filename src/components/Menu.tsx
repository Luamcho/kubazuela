import { useContent } from "@/lib/content";

export function Menu({ onSeeAll }: { onSeeAll?: () => void }) {
  const { menu } = useContent();
  const groups = menu.groups;
  return (
    <section id="menu" className="bg-bay">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-3 border-b border-paper/15 pb-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-mango">
              Nuestro menú
            </span>
            <h2 className="mt-2 font-display text-4xl uppercase text-paper md:text-5xl">
              Lo que se antoja
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm text-paper/60">
            Combos familiares y por unidad. Pregunta por especiales del día
            por WhatsApp.
          </p>
        </div>

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="mb-4 flex items-baseline gap-3">
                <h3 className="font-display text-2xl uppercase text-mango md:text-3xl">
                  {group.label}
                </h3>
                {group.note && (
                  <span className="font-mono text-xs uppercase tracking-widest text-paper/40">
                    {group.note}
                  </span>
                )}
              </div>

              <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-body font-semibold text-paper">
                        {item.name}
                      </span>
                      <span className="flex-1 translate-y-[-3px] border-b border-dashed border-paper/25" />
                      <span className="font-mono text-sm text-mango whitespace-nowrap">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-0.5 font-body text-xs text-paper/50">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {onSeeAll && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={onSeeAll}
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 font-body font-semibold text-paper transition-colors hover:border-mango hover:text-mango"
            >
              Ver galería completa con fotos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
