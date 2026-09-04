import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Header({ blok }) {
  return (
    <header {...storyblokEditable(blok)} className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
      {blok.logo?.filename && (
        <img src={blok.logo.filename} alt="Logotyp" className="h-8 w-auto" />
      )}
      <nav>
        <ul className="flex items-center gap-6">
          {blok.navigation?.map((navBlok) => (
            <StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
