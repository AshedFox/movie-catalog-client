import { z } from 'zod';
import { RegisterInput } from '@shared/api/graphql';

export const signUpSchema: z.ZodSchema<RegisterInput> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]{8,32}$/i,
      'Password must contain only latin letters, arabic numbers and special symbols!',
    ),
  passwordRepeat: z.string(),
  name: z
    .string()
    .regex(
      /^[\w\s\-]{2,255}$/i,
      'Name must contain from 2 to 255 alphanumeric characters',
    ),
});
