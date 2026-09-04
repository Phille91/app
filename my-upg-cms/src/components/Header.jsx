import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="border-b-2 border-red-700 bg-white">
      <div className="max-w-4xl mx-auto flex items-center justify-end p-4">
        <nav className="flex gap-6">
          <NavLink href="/">Hem</NavLink>
          <NavLink href="/jobs">Jobb</NavLink>
        </nav>
      </div>
    </header>
  );
}
