import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.CreateProducts);
router.get('/', ProductController.GetAllProducts);
router.get('/:productId', ProductController.getSingleProduct);
router.put('/:productId', ProductController.updateSingleProduct);

export const ProductRoute = router;
