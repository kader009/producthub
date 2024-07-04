import { Request, Response } from 'express';
import { ProductService } from './product.services';
import { ProductZodValidation } from './product.validation';

const CreateProducts = async function (req: Request, res: Response) {
  try {
    const ProductData = req.body.data;
    const zodValidation = ProductZodValidation.parse(ProductData)
    const result = await ProductService.CreateProduct(zodValidation);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  CreateProducts,
};
