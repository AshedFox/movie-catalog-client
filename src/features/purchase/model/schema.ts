import { z } from 'zod';

export const purchaseSchema = z.object({
  priceId: z.string(),
});

export type PurchaseInput = z.infer<typeof purchaseSchema>;
