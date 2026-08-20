import logo from "@/assets/logo";

export function Footer() {
  return (
    <footer className="bg-bay-dark border-t border-paper/10">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 flex items-center justify-center">
        <img src={logo} alt="KubaZuela" className="h-8 w-auto opacity-90" />
      </div>
    </footer>
  );
}
