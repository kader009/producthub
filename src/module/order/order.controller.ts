import { Request, Response } from 'express';
import { OrderService } from './order.services';
import { OrderValidation } from './order.Validation';

const CreateOrders = async function (req: Request, res: Response) {
  try {
    const OrderData = req.body.data;
    const zodValidation = OrderValidation.parse(OrderData);
    const result = await OrderService.CreateOrder(zodValidation);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};

export const OrderController = {
  CreateOrders,
};
