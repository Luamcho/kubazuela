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

          <div className="mx-auto flex aspect-square w-48 rotate-[-6deg] items-center justify-center rounded-full border-[3px] border-dashed border-guava text-center md:w-56">
            <span className="font-display text-lg uppercase leading-tight text-guava">
              100%
              <br />
              Delivery
              <br />
              &amp; Pick-up
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
