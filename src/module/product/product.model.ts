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
  name: { type: String, required:true },
  description: { type: String, maxlength: 500 },
  price: { type: Number, min: 1 },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [VariantScheme] },
  inventory: { type: InventoryScheme },
});

export const TProductModel = model<TProduct>('Product', ProductSchema);
