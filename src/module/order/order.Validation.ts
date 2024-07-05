import { z } from 'zod';

export const OrderValidation = z.object({
  email: z.string().email(),
  productId: z.string().refine((value) => {
    return /^[0-9a-fA-F]{24}$/.test(value);
  }),
  price: z.number().min(1, 'price must be greater than 1'),
  quantity: z.number().min(1, 'quantity must be at least 1'),
});
