import { TProduct } from './product.interface';
import { TProductModel } from './product.model';

const CreateProduct = async function (product: TProduct) {
  const result = await TProductModel.create(product);
  return result;
};

const getAllProduct = async function () {
  const result = await TProductModel.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = TProductModel.findById(id);
  return result;
};

const updateSingleProduct = async (payload: TProduct, id: string) => {
  const result = await TProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const ProductService = {
  CreateProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
};
