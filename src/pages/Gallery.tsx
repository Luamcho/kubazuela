import logo from "@/assets/logo";
import pastichoSmall from "@/assets/menu/pasticho-small";
import pastichoMedium from "@/assets/menu/pasticho-medium";
import pastichoLarge from "@/assets/menu/pasticho-large";
import cubanRice from "@/assets/menu/cuban-rice";
import empQueso from "@/assets/menu/emp-queso";
import empJamon from "@/assets/menu/emp-jamon";
import empTajada from "@/assets/menu/emp-tajada";
import empMechada from "@/assets/menu/emp-mechada";
import empMolida from "@/assets/menu/emp-molida";
import empPollo from "@/assets/menu/emp-pollo";
import empSalchicha from "@/assets/menu/emp-salchicha";
import panJamonMedium from "@/assets/menu/pan-jamon-medium";
import panJamonLarge from "@/assets/menu/pan-jamon-large";
import postreMarquesa from "@/assets/menu/postre-marquesa";
import postreCheesecake from "@/assets/menu/postre-cheesecake";

const WHATSAPP_URL = "https://wa.me/17863077229";

interface Dish {
  name: string;
  desc: string;
  price: string;
  photo?: string;
}

interface Group {
  label: string;
  items: Dish[];
}

const groups: Group[] = [
  {
    label: "Pastichos (Venezuelan-style lasagna)",
    items: [
      {
        name: "Kukenantepuy Combo (Small)",
        desc: "Porción generosa de lasaña venezolana cremosa y casera, servida con un refresco. Alcanza para 1 persona con hambre.",
        price: "25",
        photo: pastichoSmall,
      },
      {
        name: "Mount Roraima Combo (Medium)",
        desc: "Bandeja grande de lasaña venezolana cremosa y casera, servida con 6 refrescos. Rinde para 6–8 personas.",
        price: "70",
        photo: pastichoMedium,
      },
      {
        name: "Auyantepuy Combo (Large)",
        desc: "Bandeja extra grande de lasaña venezolana cremosa y quesuda, servida con 12 refrescos. Rinde para 10–12 personas.",
        price: "115",
        photo: pastichoLarge,
      },
    ],
  },
  {
    label: "Home-made Cuban Imperial Rice",
    items: [
      {
        name: "Cuban Imperial Rice Combo",
        desc: "Bandeja generosa de arroz imperial cubano, en capas con pollo, queso, mayonesa y especias, servida con 8 refrescos.",
        price: "60",
        photo: cubanRice,
      },
    ],
  },
  {
    label: "Venezuelan Empanadas",
    items: [
      { name: "Cheese (Queso)", desc: "Rellena de queso blanco derretido.", price: "4", photo: empQueso },
      { name: "Ham & Cheese (Jamón y queso)", desc: "Clásica y reconfortante — jamón y queso derretido.", price: "4", photo: empJamon },
      { name: "Sweet Plantain & Cheese (Tajada con queso)", desc: "Plátano maduro dulce con queso blanco derretido.", price: "4", photo: empTajada },
      { name: "Shredded Beef (Mechada)", desc: "Carne mechada venezolana cocinada a fuego lento, con especias tradicionales.", price: "5", photo: empMechada },
      { name: "Ground Beef (Molida)", desc: "Carne molida sazonada con cebolla, pimentón y especias suaves.", price: "4.50", photo: empMolida },
      { name: "Chicken (Pollo)", desc: "Pollo desmechado, sazonado al estilo venezolano.", price: "4", photo: empPollo },
      { name: "Sausage & Cheese (Salchicha con queso)", desc: "Salchicha en rodajas con queso gouda derretido.", price: "4", photo: empSalchicha },
    ],
  },
  {
    label: "Venezuelan Ham Bread (Pan de Jamón)",
    items: [
      {
        name: "Medium (11 in)",
        desc: "Masa suave y ligeramente dulce, rellena de jamón, tocineta, queso crema, aceitunas y pasas.",
        price: "20",
        photo: panJamonMedium,
      },
      {
        name: "Large (17 in)",
        desc: "Nuestro clásico Pan de Jamón en tamaño grande — esponjoso, ligeramente dulce, relleno de jamón, tocineta, queso crema, aceitunas y pasas.",
        price: "30",
        photo: panJamonLarge,
      },
    ],
  },
  {
    label: "Desserts (Postres)",
    items: [
      {
        name: "Venezuelan Marquesa",
        desc: "Postre frío y cremoso, hecho con capas de galletas dulces y una suave crema de Nutella.",
        price: "25",
        photo: postreMarquesa,
      },
      {
        name: "Churro Cheesecake with Nutella & Strawberries",
        desc: "Cheesecake cremoso con base estilo churro, cubierto con Nutella y fresas frescas.",
        price: "40",
        photo: postreCheesecake,
      },
      {
        name: "Chocoflan",
        desc: "Capas de bizcocho de chocolate y flan de caramelo. Dulce, suave y perfecto para compartir.",
        price: "40",
      },
    ],
  },
];

export function Gallery({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-paper font-body">
      <header className="sticky top-0 z-50 bg-bay-dark/95 backdrop-blur-sm border-b border-mango/20">
        <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between">
          <button type="button" onClick={onBack} className="flex items-center gap-3">
            <img src={logo} alt="KubaZuela" className="h-10 w-auto" />
          </button>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 font-body text-sm text-paper transition-colors hover:border-mango hover:text-mango"
          >
            ← Volver al inicio
          </button>
        </div>
      </header>

      <section className="bg-bay-dark">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center md:px-8 md:py-16">
          <span className="font-mono text-xs uppercase tracking-widest text-mango">
            Galería del menú
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
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16 space-y-14">
        {groups.map((group) => (
          <div key={group.label}>
            <h2 className="mb-6 border-b border-ink/10 pb-3 font-display text-2xl uppercase text-bay md:text-3xl">
              {group.label}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm"
                >
                  <div className="aspect-square w-full overflow-hidden bg-ink/5">
                    {item.photo ? (
                      <img
                        src={item.photo}
                        alt={item.name}
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

      <footer className="bg-bay-dark border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 flex items-center justify-center">
          <img src={logo} alt="KubaZuela" className="h-8 w-auto opacity-90" />
        </div>
      </footer>
    </div>
  );
}
