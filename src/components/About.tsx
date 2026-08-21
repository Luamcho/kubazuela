export function About() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-plantain">
              Nuestra cocina
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-ink md:text-5xl">
              Dos países,
              <br />
              <span className="text-bay">una sola mesa</span>
            </h2>
            <p className="mt-5 max-w-lg font-body text-ink/70">
              Auténtico sabor latino en cada bocado. Te llevamos a casa lo
              mejor de la cocina venezolana y cubana por encargo, o lo pasas a
              recoger tú mismo. Operamos exclusivamente con servicio de
              Delivery y Pick-up para garantizar que tu comida llegue siempre
              fresca y deliciosa.
            </p>
            <p className="mt-4 max-w-lg font-body text-sm text-ink/60">
              Authentic Latin flavor in every bite. Enjoy the best of
              Venezuelan and Cuban cuisine by order — delivered straight to
              your door, or ready for you to swing by and pick up.
            </p>
          </div>

          <div className="mx-auto flex aspect-square w-48 rotate-[-4deg] flex-col items-center justify-center gap-2 rounded-full border-4 border-mango bg-bay text-center shadow-lg ring-2 ring-mango/30 ring-offset-4 ring-offset-paper md:w-56">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-none stroke-mango stroke-[1.6]"
            >
              <rect x="3" y="8" width="14" height="10" rx="1.5" />
              <path d="M17 11h2.5L21 14v4h-4" />
              <circle cx="7.5" cy="19" r="1.6" fill="#023047" />
              <circle cx="17.5" cy="19" r="1.6" fill="#023047" />
              <path d="M3 8V5h9v3" />
            </svg>
            <span className="font-display text-3xl leading-none text-paper">
              100%
            </span>
            <span className="max-w-[8rem] font-mono text-[10px] uppercase leading-tight tracking-widest text-mango">
              Delivery &amp; Pick-up
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
