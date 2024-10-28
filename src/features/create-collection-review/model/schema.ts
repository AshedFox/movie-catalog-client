import { z } from 'zod';

export const createReviewSchema = z.object({
  mark: z.number().min(1).max(10).int(),
  text: z.string().min(3).max(2048),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
