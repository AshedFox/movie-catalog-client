import { z } from 'zod';

export const createCollectionSchema = z.object({
  cover: z
    .object({
      id: z.string().uuid(),
      url: z.string().url(),
    })
    .optional(),
  description: z.string().min(3).max(4048),
  isSystem: z.boolean(),
  name: z.string().min(3).max(255),
  movies: z
    .array(
      z.object({
        value: z.string().uuid(),
        label: z.string().nonempty(),
      }),
    )
    .min(1)
    .max(99),
});

export type CreateCollectionInput = z.infer<typeof createCollectionSchema>;
