import { defineCollection, z } from "astro:content";

const spill = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    players: z.string(),
    time: z.string(),
    difficulty: z.enum(["lett", "middels", "avansert"]),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
  }),
});

const oppskrifter = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date().optional(), // 👈 bruker Date, ikke string
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { spill, oppskrifter };
