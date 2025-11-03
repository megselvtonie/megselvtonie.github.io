import { defineCollection, z } from "astro:content";

const spillCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    length: z.string().optional(),
    topics: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const oppskrifter = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    ingredients: z.array(z.string()).optional(),
    steps: z.array(z.string()).optional(),
  }),
});

export const collections = { spillCollection, oppskrifter };

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  site: "https://megselvtonie.me",
});
