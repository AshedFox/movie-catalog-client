import { z } from 'zod';

export const schema = z
  .object({
    oldPassword: z.string().regex(/^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]{8,32}$/i, {
      message: 'Incorrect password format!',
    }),
    newPassword: z.string().regex(/^[a-zA-Z0-9!@#$%^&*(){}\[\]:;<>,.?~_+\-=|]{8,32}$/i, {
      message: 'Incorrect password format!',
    }),
  })
  .refine((schema) => schema.newPassword !== schema.oldPassword, {
    message: 'New password should differ from the old one!',
  });
