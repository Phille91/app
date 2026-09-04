export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-400/40 text-gray-600 text-sm text-center p-4">
      All rights reserved © {currentYear}
    </footer>
  );
}
