import { UpdateCollectionInput } from '@shared/api/graphql';
import { z } from 'zod';

type Input = Omit<UpdateCollectionInput, 'isSystem'>;

export const schema: z.ZodSchema<Input> = z.object({
  description: z.string().min(3).max(4095),
  name: z.string().min(3).max(255),
});
