import logo from "@/assets/logo";

const FACEBOOK_URL = "https://www.facebook.com/kubazuela";
const INSTAGRAM_URL = "https://www.instagram.com/kubazuela";

export function Footer() {
  return (
    <footer className="bg-bay-dark border-t border-paper/10">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 flex flex-col items-center gap-5">
        <img src={logo} alt="KubaZuela" className="h-8 w-auto opacity-90" />

        <div className="flex items-center gap-3">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KubaZuela en Facebook"
            className="grid h-9 w-9 place-items-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-mango hover:text-mango"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.6-1.5H16.5V4.3c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.44-3.96 4.08V10.5H7.5v3h2.67V21h3.33z" />
            </svg>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KubaZuela en Instagram"
            className="grid h-9 w-9 place-items-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-mango hover:text-mango"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm0 5.94a2.34 2.34 0 1 1 0-4.68 2.34 2.34 0 0 1 0 4.68zm4.59-6.09a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0zM20 7.14c-.06-1.24-.34-2.34-1.24-3.24-.9-.9-2-1.18-3.24-1.24C14.24 2.6 9.76 2.6 8.48 2.66c-1.24.06-2.33.34-3.24 1.24-.9.9-1.18 2-1.24 3.24C3.94 8.42 3.94 15.58 4 16.86c.06 1.24.34 2.34 1.24 3.24.9.9 2 1.17 3.24 1.24 1.28.06 5.76.06 7.04 0 1.24-.06 2.34-.34 3.24-1.24.9-.9 1.18-2 1.24-3.24.06-1.28.06-5.44 0-6.72zM18.4 16.86c-.03.65-.14 1.26-.42 1.74a2.4 2.4 0 0 1-1.14 1.14c-.48.28-1.09.4-1.74.42-1.24.06-5.4.06-6.64 0a3.86 3.86 0 0 1-1.74-.42 2.4 2.4 0 0 1-1.14-1.14c-.28-.48-.4-1.09-.42-1.74-.06-1.24-.06-5.4 0-6.64.03-.65.14-1.26.42-1.74a2.4 2.4 0 0 1 1.14-1.14c.48-.28 1.09-.4 1.74-.42 1.24-.06 5.4-.06 6.64 0 .65.03 1.26.14 1.74.42a2.4 2.4 0 0 1 1.14 1.14c.28.48.4 1.09.42 1.74.06 1.24.06 5.4 0 6.64z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
