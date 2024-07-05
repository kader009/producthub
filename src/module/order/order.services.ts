import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const CreateOrder = async function (order: TOrder) {
  const result = await OrderModel.create(order);
  return result;
};

export const OrderService = {
  CreateOrder,
};
