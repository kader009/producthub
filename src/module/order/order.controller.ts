import { Request, Response } from 'express';
import { OrderService } from './order.services';
import { OrderValidation } from './order.Validation';
import { sanitizeDbData } from '../../utils/handledata';

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

// search functionality implement here
const GetAllOrder = async function (req: Request, res: Response) {
  try {
    const { searchTerm } = req.query;
    const result = await OrderService.getAllOrder(searchTerm as string);
    const sanitize = sanitizeDbData(result);

    res.status(200).json({
      success: true,
      message: searchTerm
        ? 'Orders fetched successfully for user email!' 
        : 'Order fetched successfully!',
      data: sanitize,
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
  GetAllOrder,
};
