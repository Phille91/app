import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default async function JobsPage() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/jobs/", {
    version: "draft",
  });

  return <StoryblokServerComponent blok={data.story.content} />;
}
