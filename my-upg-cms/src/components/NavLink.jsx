import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-red-700 font-medium">
      {children}
    </Link>
  );
}
