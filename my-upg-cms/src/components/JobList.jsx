import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";

export default async function JobList({ blok, query = "" }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "jobs/",
    content_type: "job-post",
    sort_by: "content.publishedDate:desc",
    ...(query && { search_term: query }),
  });

  const stories = data.stories;

  return (
    <section className="max-w-3xl mx-auto my-10 space-y-4" {...storyblokEditable(blok)}>
      {blok.heading && <h1>{blok.heading}</h1>}

      <h2>{blok.title}</h2>
      <h3>{blok.summary}</h3>

      {stories.length === 0 ? (
        <p>{blok.empty_text || "Inga inlägg."}</p>
      ) : (
        stories.map((story) => (
          <article
            key={story.uuid}
            className="flex gap-5 p-4 border border-gray-300 rounded-lg bg-white"
          >
            {story.content.coverImage?.filename && (
              <img
                className="w-40 h-24 object-cover rounded-md"
                src={story.content.coverImage.filename}
                alt={story.content.coverImage.alt || story.content.title}
              />
            )}

            <div>
              <h2 className="font-bold">
                <Link
                  className="text-red-700 no-underline"
                  href={`/${story.full_slug}`}
                >
                  {story.content.title}
                </Link>
              </h2>

              <p className="text-gray-600">{story.content.summary}</p>
              <p className="text-gray-600">{story.content.department}</p>
              <p className="text-gray-600">{story.content.location}</p>
              {story.content.author?.content?.name && (
                <p className="text-gray-500 text-sm">
                  Av {story.content.author.content.name}
                </p>
              )}
            </div>
          </article>
        ))
      )}
    </section>
  );
}
