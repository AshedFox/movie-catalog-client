import { z } from 'zod';
import { LoginInput } from '@shared/api/graphql';

export const loginSchema: z.ZodSchema<LoginInput> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(32)
    .regex(/^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]+$/i, {
      message: 'Password must contain only latin letters, arabic numbers and special symbols!',
    }),
});
