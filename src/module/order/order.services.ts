import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const CreateOrder = async function (order: TOrder) {
  const result = await OrderModel.create(order);
  return result;
};

// search functionality implement here
const getAllOrder = async function (searchTerm: string) {
  const pipeline: any[] = [
    {
      $project: {
        email: 1,
        productId:1, 
        price:1,
        quantity:1
      },
    },
  ];

  if (searchTerm) {
    pipeline.unshift({ $match: { $text: { email: searchTerm } } });
  }

  const result = await OrderModel.aggregate(pipeline);
  return result;
};

export const OrderService = {
  CreateOrder,
  getAllOrder,
};
