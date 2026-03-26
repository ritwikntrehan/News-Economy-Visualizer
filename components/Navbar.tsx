import Link from "next/link";

const links = [
  { href: "/monitor", label: "Monitor" },
  { href: "/topic/manufacturing", label: "Topics" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/request-analysis", label: "Request Analysis" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-surface/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          News Economy Visualizer
        </Link>
        <ul className="flex gap-4 text-sm text-slate-700">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
