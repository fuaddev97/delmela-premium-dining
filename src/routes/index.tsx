import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Delmela — A Dining Story Told with Fire" },
      { name: "description", content: "Discover Delmela, a warm and contemporary dining experience shaped by the seasons, fire and generous hospitality." },
      { property: "og:title", content: "Delmela — A Dining Story Told with Fire" },
      { property: "og:description", content: "Season-led cooking, shared tables and memorable evenings at Delmela." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
