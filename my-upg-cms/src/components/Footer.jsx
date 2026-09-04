import { storyblokEditable } from "@storyblok/react/rsc";

export default function Footer({ blok }) {
  return (
    <footer {...storyblokEditable(blok)} className="mt-16 border-t border-gray-700 px-6 py-8 text-center text-sm text-gray-400">
      <p>{blok.copyright}</p>
      {blok.description && <p className="mt-1">{blok.description}</p>}
    </footer>
  );
}
