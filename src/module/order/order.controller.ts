import { Request, Response } from 'express';
import { OrderService } from './order.services';

const CreateOrders = async function (req: Request, res: Response) {
  try {
    const OrderData = req.body.data;
    // const zodValidation = ProductZodValidation.parse(ProductData);
    const result = await OrderService.CreateOrder(OrderData);
    // const newlyCreate = sanitizeDbData(result);

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
