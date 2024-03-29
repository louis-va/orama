import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>  z.object({
    title: z.string(),
    id: z.number(),
    overview: z.string(),
    type: z.string(),
    year: z.number(),
    client: z.string(),
    services: z.array(z.string()),
    video: z.array(z.object({
      title: z.string(),
      platform: z.string(),
      url: z.string()
    })).optional(),
    thumbnail: image(),
    preview: image(),
    cover: image(),
    x_axis: z.number()
  }),
});

export const collections = {
  'projects': projectCollection,
};