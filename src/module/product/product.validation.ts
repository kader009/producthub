import { z } from 'zod';

const VariantZodValidation = z.object({
  type: z.string(),
  value: z.string(),
});

const InventoryZodValidation = z.object({
  quantity: z.number().min(1, { message: 'Quality must be  at least 1' }),
  inStock: z.boolean(),
});

export const ProductZodValidation = z.object({
  name: z.string({ required_error: 'name is required' }),
  description: z
    .string()
    .max(500, { message: 'Description cannot exceed 500 characters' }),
  price: z.number().min(1, { message: 'price must be at least 1' }),
  category: z.string({ required_error: 'Category is required' }),
  tags: z.array(z.string({ required_error: 'Tags are required' })),
  variants: z.array(VariantZodValidation),
  inventory: InventoryZodValidation,
});
