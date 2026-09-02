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
    <section className="job-list" {...storyblokEditable(blok)}>
      <style>{`
        .job-list {
          max-width: 800px;
          margin: 40px auto;
        }

        .job-list article {
          display: flex;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid #444;
        }

        .job-list img {
          width: 160px;
          height: 100px;
          object-fit: cover;
          border-radius: 6px;
        }

        .job-list h2 {
          margin: 0 0 8px;
        }

        .job-list h2 a {
          color: #f0f0f0;
          text-decoration: none;
        }

        .job-list p {
          color: #bbb;
          margin: 5px 0;
        }

        .job-list .author {
          font-size: 14px;
        }
      `}</style>

      {blok.heading && <h1>{blok.heading}</h1>}

      <h2>{blok.title}</h2>
      <h3>{blok.summary}</h3>
      
      {stories.length === 0 ? (
        <p>{blok.empty_text || "Inga inlägg."}</p>
      ) : (
        stories.map((story) => (
          <article key={story.uuid}>
            {story.content.coverImage?.filename && (
              <img
                src={story.content.coverImage.filename}
                alt={story.content.coverImage.alt || story.content.title}
              />
            )}

            <div>
              <h2>
                <Link href={`/${story.full_slug}`}>
                  {story.content.title}
                </Link>
              </h2>

              <p>{story.content.summary}</p>
              <p>{story.content.department}</p>
              <p>{story.content.location}</p>
              {story.content.author?.content?.name && (
                <p className="author">
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
