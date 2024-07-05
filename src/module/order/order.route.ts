import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.CreateOrders);
// router.get('/', ProductController.GetAllProducts);
// router.get('/:productId', ProductController.getSingleProduct);
// router.put('/:productId', ProductController.updateSingleProduct);
// router.delete('/:productId', ProductController.deleteSingleProduct);

export const OrderRoute = router;
