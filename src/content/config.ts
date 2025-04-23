import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>  z.object({
    order: z.number(),
    title: z.string(),
    year: z.number(),
    type: z.string(),
    client: z.string().optional(),
    credits: z.array(z.object({
      role: z.string(),
      name: z.array(z.string())
    })).optional(),
    video: z.object({
      type: z.enum(["video/mp4", "youtube", "vimeo"]),
      src: z.string()
    }).optional(),
    thumbnail: image(),
    preview: z.string(),
    cover: image()
  }),
});

export const collections = {
  'project': projectCollection,
};