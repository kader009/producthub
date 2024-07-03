import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.CreateProducts)


export const ProductRoute = router;