import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    } as any,
    price: { type: Number },
    quantity: { type: Number },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
    toObject: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

export const OrderModel = model<TOrder>('Order', orderSchema);
