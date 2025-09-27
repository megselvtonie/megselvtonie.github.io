import { defineCollection, z } from "astro:content";

const games = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    players: z.string(),
    time: z.string(),
    difficulty: z.enum(["lett", "middels", "avansert"]),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { games };
