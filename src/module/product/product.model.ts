import { model, Schema } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

const VariantScheme = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventoryScheme = new Schema<TInventory>({
  quantity: { type: Number, required: true, min: 1 },
  inStock: { type: Boolean, required: true },
});

const ProductSchema = new Schema<TProduct, TVariant, TInventory>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 500 },
  price: { type: Number, min: 1, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantScheme], required: true },
  inventory: { type: InventoryScheme, required: true },
});

export const TProductModel = model<TProduct>('Product', ProductSchema);
