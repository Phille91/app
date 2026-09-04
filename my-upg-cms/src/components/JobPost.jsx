import { storyblokEditable, StoryblokServerComponent, renderRichText } from "@storyblok/react/rsc";
import Link from "next/link";

export default function JobPost({ blok }) {
  const content = blok.content ? renderRichText(blok.content) : null;

  return (
    <article
      className="max-w-2xl mx-auto my-10 p-6 border-2 border-red-700 rounded-lg bg-white"
      {...storyblokEditable(blok)}
    >
      {blok.coverImage?.filename && (
        <img className="w-full rounded-md mb-4" src={blok.coverImage.filename} alt="" />
      )}

      <h1 className="text-2xl font-bold text-red-700">{blok.title}</h1>
      <h3 className="text-gray-600">{blok.summary}</h3>
      <h4 className="text-gray-500 text-sm">{blok.location}</h4>
      <p className="text-gray-600">{blok.description}</p>
      <p className="text-gray-600">{blok.department}</p>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {blok.publishedAt && (
                <time className="text-gray-500 text-sm" dateTime={blok.publishedAt}>{blok.publishedAt}</time>
            )}

      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </article>
  );
}
