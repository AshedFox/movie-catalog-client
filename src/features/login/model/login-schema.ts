import { z } from 'zod';
import { LoginInput } from '@shared/api/graphql';

export const loginSchema: z.ZodSchema<LoginInput> = z.object({
  email: z.string().email({ message: 'Incorrect email format' }),
  password: z
    .string()
    .regex(/^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]{8,32}$/i, {
      message: 'Incorrect password format!',
    }),
});
