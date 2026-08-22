import { useContent } from "@/lib/content";

export function Reviews() {
  const { reviews, contact } = useContent();
  const GOOGLE_REVIEWS_URL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("KubaZuela on the Bay " + contact.address);

  return (
    <section id="opiniones" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-plantain">
            Reseñas verificadas
          </span>
          <div className="flex items-end gap-3">
            <span className="font-display text-6xl text-bay md:text-7xl">
              {reviews.rating}
            </span>
            <div className="mb-1 text-left">
              <div className="text-mango-dark text-lg">★★★★★</div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
                {reviews.countLabel}
              </p>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-bay/20 px-6 py-3 font-body font-semibold text-bay transition-colors hover:border-bay hover:bg-bay hover:text-paper"
          >
            Ver reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
