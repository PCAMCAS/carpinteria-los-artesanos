import Link from "next/link"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre nosotros" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Carpintería Los Artesanos
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild>
          <Link href="/contacto">Pedir presupuesto</Link>
        </Button>
      </div>
    </header>
  )
}