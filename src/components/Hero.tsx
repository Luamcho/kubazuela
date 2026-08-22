import logo from "@/assets/logo";
import { WaveDivider } from "./WaveDivider";
import { scrollToId } from "@/lib/scroll";
import { useContent } from "@/lib/content";

export function Hero() {
  const { hero, contact } = useContent();
  const WHATSAPP_URL = contact.whatsappUrl;
  return (
    <section id="top" className="relative overflow-hidden bg-bay-dark">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 30%, rgba(255,183,3,0.16), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center md:px-8 md:py-28">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-mango/40 bg-bay-dark/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-mango">
          <span className="text-mango">★★★★★</span>
          {hero.ratingBadge}
        </div>

        <img
          src={logo}
          alt="KubaZuela"
          className="w-[68vw] max-w-[360px] drop-shadow-xl md:w-[380px]"
        />

        <p className="mt-6 max-w-xl font-body text-base text-paper/90 md:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mango px-6 py-3 font-body font-semibold text-bay-dark transition-colors hover:bg-paper"
          >
            Realizar pedido
          </a>
          <button
            type="button"
            onClick={() => scrollToId("menu")}
            className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3 font-body font-semibold text-paper transition-colors hover:border-mango hover:text-mango"
          >
            Ver el menú
          </button>
        </div>
      </div>

      <WaveDivider fromColor="#011E2D" toColor="#FBF6EA" />
    </section>
  );
}
