import { storyblokEditable } from "@storyblok/react/rsc";

export default function NavLink({ blok }) {
  const url = blok.link?.cached_url || blok.link?.url || "#";
  const href =
    blok.link?.linktype === "story" && !url.startsWith("/") ? `/${url}` : url;

  return (
    <li {...storyblokEditable(blok)}>
      <a href={href} className="hover:text-blue-400 hover:underline">
        {blok.label}
      </a>
    </li>
  );
}
