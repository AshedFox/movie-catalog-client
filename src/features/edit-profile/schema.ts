import { UpdateUserInput } from '@shared/api/graphql';
import { z } from 'zod';

type Input = Omit<UpdateUserInput, 'avatarId'>;

export const schema: z.ZodSchema<Input> = z.object({
  email: z.string().email().optional(),
  countryId: z.string().length(2).optional(),
  name: z.string().min(3).max(255),
});
