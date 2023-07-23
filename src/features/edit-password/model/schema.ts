import { z } from 'zod';

export const schema: z.ZodSchema<{ oldPassword: string; newPassword: string }> =
  z.object({
    oldPassword: z
      .string()
      .regex(/^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]{8,32}$/i, {
        message: 'Incorrect password format!',
      }),
    newPassword: z
      .string()
      .regex(/^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]{8,32}$/i, {
        message: 'Incorrect password format!',
      }),
  });
