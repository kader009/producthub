import { Request, Response } from 'express';
import { ProductService } from './product.services';
import { ProductZodValidation } from './product.validation';
import { sanitizeDbData } from '../../utils/handledata';

const CreateProducts = async function (req: Request, res: Response) {
  try {
    const ProductData = req.body;
    const zodValidation = ProductZodValidation.parse(ProductData);
    const result = await ProductService.CreateProduct(zodValidation);
    // const newlyCreate = sanitizeDbData(result);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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
const GetAllProducts = async function (req: Request, res: Response) {
  try {
    const { searchTerm } = req.query;
    const result = await ProductService.getAllProduct(searchTerm as string);
    const sanitize = sanitizeDbData(result);

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term ${searchTerm} fetched successfully!`
        : 'Products fetched successfully!',
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProduct(productId);
    const sanitize = sanitizeDbData(result);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
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

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.updateSingleProduct(
      req.body,
      req.params.productId,
    );
    const sanitize = sanitizeDbData(result);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
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

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.deleteSingleProduct(
      req.body.productId,
    );

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
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

export const ProductController = {
  CreateProducts,
  GetAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
