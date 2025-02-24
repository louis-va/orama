import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>  z.object({
    title: z.string(),
    order: z.number(),
    overview: z.string(),
    type: z.string(),
    year: z.number(),
    client: z.string(),
    services: z.array(z.string()),
    video: z.object({
      type: z.enum(["video/mp4", "youtube", "vimeo"]),
      src: z.string()
    }).optional(),
    thumbnail: image(),
    preview: image(),
    cover: image()
  }),
});

export const collections = {
  'project': projectCollection,
};