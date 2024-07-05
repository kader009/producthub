import express from 'express';
import { OrderController } from './order.controller';

// get route from express
const router = express.Router();

// post order route
router.post('/', OrderController.CreateOrders);
// get order route
router.get('/', OrderController.GetAllOrder);

export const OrderRoute = router;
