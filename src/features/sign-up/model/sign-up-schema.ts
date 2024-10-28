import { z } from 'zod';
import { SignUpInput } from '@shared/api/graphql';

const passwordSchema = z
  .string()
  .min(8)
  .max(32)
  .regex(
    /^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]+$/i,
    'Password must contain only latin letters, arabic numbers and special symbols!',
  );

export const signUpSchema: z.ZodSchema<SignUpInput> = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
    passwordRepeat: passwordSchema,
    name: z
      .string()
      .min(2)
      .max(255)
      .regex(/^[\w\s\-]+$/i, 'Name must contain only alphanumeric characters'),
  })
  .refine(({ password, passwordRepeat }) => password === passwordRepeat, {
    path: 'passwordRepeat',
    message: 'Passwords should be equal!',
  });
