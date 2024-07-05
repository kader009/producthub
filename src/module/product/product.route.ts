import express from 'express';
import { ProductController } from './product.controller';

// get route from express
const router = express.Router();

// post route
router.post('/', ProductController.CreateProducts);
// get route for all product
router.get('/', ProductController.GetAllProducts);
// get route for single product
router.get('/:productId', ProductController.getSingleProduct);
// put route for single product
router.put('/:productId', ProductController.updateSingleProduct);
// delete route for single product
router.delete('/:productId', ProductController.deleteSingleProduct);

export const ProductRoute = router;
