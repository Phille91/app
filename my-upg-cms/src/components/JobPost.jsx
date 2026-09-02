import { storyblokEditable, StoryblokServerComponent, renderRichText } from "@storyblok/react/rsc";
import Link from "next/link";

export default function JobPost({ blok }) {
  const content = blok.content ? renderRichText(blok.content) : null;

  return (
    <article {...storyblokEditable(blok)}>

      {blok.coverImage?.filename && (
        <img src={blok.coverImage.filename} alt="" />
      )}

      <h1>{blok.title}</h1>
      <h3>{blok.summary}</h3>
      <h4>{blok.location}</h4>
      <p>{blok.description}</p>
      <p>{blok.department}</p>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {blok.publishedAt && (
                <time dateTime={blok.publishedAt}>{blok.publishedAt}</time>
            )}

      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </article>
  );
}
