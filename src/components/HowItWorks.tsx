const steps = [
  {
    n: "01",
    title: "Envía tu pedido",
    body: "Escríbenos por texto o WhatsApp al (786) 307-7229 con lo que se te antoja del menú.",
  },
  {
    n: "02",
    title: "Lo preparamos fresco",
    body: "Cocinamos tu pedido al momento — nada de bandejas esperando bajo lámparas de calor.",
  },
  {
    n: "03",
    title: "Recoge o te lo llevamos",
    body: "Pasas por el local en Riverview, o lo llevamos hasta tu puerta. Tú eliges.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
        <div className="mb-10 flex items-end justify-between border-b border-ink/10 pb-4">
          <h2 className="font-display text-3xl uppercase text-ink md:text-4xl">
            Cómo pedir
          </h2>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-ink/40 md:block">
            Sin dine-in · Solo texto y WhatsApp
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="relative pl-1">
              <span className="font-display text-6xl text-bay/15 md:text-7xl">
                {step.n}
              </span>
              <h3 className="mt-1 font-display text-xl uppercase text-bay">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm text-ink/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
