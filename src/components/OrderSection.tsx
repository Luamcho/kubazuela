import { WaveDivider } from "./WaveDivider";
import logo from "@/assets/logo";
import { useContent } from "@/lib/content";

const chat = [
  { from: "them", text: "Hola! Quiero pedir el combo Mount Roraima y un Chocoflan 😋" },
  { from: "us", text: "¡Con gusto! ¿Pick-up o delivery?" },
  { from: "them", text: "Delivery, por favor" },
  { from: "us", text: "Perfecto, en camino en 40–50 min 🚗🍽️" },
];

export function OrderSection() {
  const { contact, hours } = useContent();
  const WHATSAPP_URL = contact.whatsappUrl;
  const PHONE_DISPLAY = contact.phoneDisplay;
  const ADDRESS = contact.address;
  const MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(ADDRESS);

  return (
    <section id="pedir" className="bg-bay-dark">
      <WaveDivider fromColor="#FBF6EA" toColor="#011E2D" />
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-4 md:px-8 md:pb-28">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          {/* Chat mockup — signature element: this business only takes orders by text/WhatsApp */}
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-[28px] border border-mango/20 bg-bay p-4 shadow-2xl">
              <div className="mb-3 flex items-center gap-2 border-b border-paper/10 pb-3">
                <img src={logo} alt="KubaZuela" className="h-8 w-8 object-contain" />
                <div>
                  <p className="font-body text-sm font-semibold text-paper">
                    KubaZuela
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-lilac">
                    en línea
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {chat.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[80%] rounded-2xl px-3 py-2 font-body text-sm ${
                      m.from === "us"
                        ? "ml-auto rounded-br-sm bg-mango text-bay-dark"
                        : "rounded-bl-sm bg-paper/10 text-paper"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-xs uppercase tracking-widest text-paper/40">
              Así de fácil — todo por texto
            </p>
          </div>

          {/* Contact + hours */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-mango">
              Haz tu pedido
            </span>
            <h2 className="mt-2 font-display text-4xl uppercase text-paper md:text-5xl">
              Te lo llevamos
              <br />
              o lo recoges
            </h2>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-mango px-6 py-3 font-body font-semibold text-bay-dark transition-colors hover:bg-paper"
            >
              Escríbenos: {PHONE_DISPLAY}
            </a>

            <dl className="mt-10 space-y-5 border-t border-paper/10 pt-8">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-lilac">
                  Ubicación
                </dt>
                <dd className="mt-1 font-body text-paper/90">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-mango">
                    {ADDRESS}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-lilac">
                  Horario
                </dt>
                <dd className="mt-1 font-body text-paper/90">
                  {hours.weekday}
                  <br />
                  {hours.weekend}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-lilac">
                  Servicio
                </dt>
                <dd className="mt-1 font-body text-paper/90">
                  Exclusivamente Delivery y Pick-up
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
