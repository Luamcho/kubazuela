interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

interface MenuGroup {
  label: string;
  note?: string;
  items: MenuItem[];
}

const groups: MenuGroup[] = [
  {
    label: "Pastichos (Venezuelan-style lasagna)",
    items: [
      {
        name: "Kukenantepuy Combo (Small)",
        desc: "Generous portion of creamy, homemade-style Venezuelan lasagna, served with a soft drink. Big enough for 1 hungry person.",
        price: "25",
      },
      {
        name: "Mount Roraima Combo (Medium)",
        desc: "Large tray of creamy, homemade-style Venezuelan lasagna, served with 6 soft drinks. Feeds 6–8 people.",
        price: "70",
      },
      {
        name: "Auyantepuy Combo (Large)",
        desc: "Extra-large tray of cheesy, creamy Venezuelan lasagna, served with 12 soft drinks. Serves 10–12 people.",
        price: "115",
      },
    ],
  },
  {
    label: "Home-made Cuban Imperial Rice",
    items: [
      {
        name: "Cuban Imperial Rice Combo",
        desc: "Generous tray of flavorful Cuban-style imperial rice, layered with chicken, cheese, mayo and spices, served with 8 soft drinks.",
        price: "60",
      },
    ],
  },
  {
    label: "Venezuelan Empanadas",
    note: "6 in (15 cm), crispy cornmeal dough",
    items: [
      { name: "Cheese (Queso)", desc: "Filled with melted white cheese.", price: "4" },
      { name: "Ham & Cheese (Jamón y queso)", desc: "Classic and comforting — ham and melted cheese.", price: "4" },
      { name: "Sweet Plantain & Cheese (Tajada con queso)", desc: "Ripe sweet plantain with melted white cheese.", price: "4" },
      { name: "Shredded Beef (Mechada)", desc: "Slow-cooked Venezuelan shredded beef, traditional spices.", price: "5" },
      { name: "Ground Beef (Molida)", desc: "Savory ground beef with onions, peppers, and mild spices.", price: "4.50" },
      { name: "Chicken (Pollo)", desc: "Shredded chicken, seasoned Venezuelan-style.", price: "4" },
      { name: "Sausage & Cheese (Salchicha con queso)", desc: "Sliced sausage and melted gouda cheese.", price: "4" },
    ],
  },
  {
    label: "Venezuelan Ham Bread (Pan de Jamón)",
    items: [
      {
        name: "Medium (11 in)",
        desc: "Soft, slightly sweet dough filled with ham, bacon, cream cheese, olives and raisins.",
        price: "20",
      },
      {
        name: "Large (17 in)",
        desc: "Our classic Pan de Jamón — fluffy, lightly sweet bread rolled with ham, bacon, cream cheese, olives and raisins.",
        price: "30",
      },
    ],
  },
  {
    label: "Desserts (Postres)",
    items: [
      {
        name: "Venezuelan Marquesa",
        desc: "Chilled, creamy dessert with layers of sweet cookies and smooth Nutella cream.",
        price: "25",
      },
      {
        name: "Churro Cheesecake with Nutella & Strawberries",
        desc: "Creamy cheesecake with a churro-inspired crust, topped with Nutella and fresh strawberries.",
        price: "40",
      },
      {
        name: "Chocoflan",
        desc: "Layers of chocolate cake and silky caramel flan. Sweet, smooth, perfect for sharing.",
        price: "40",
      },
    ],
  },
];

export function Menu() {
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
      </div>
    </section>
  );
}
