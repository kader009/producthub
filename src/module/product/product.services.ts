import { TProduct } from "./product.interface"
import { TProductModel } from "./product.model"

const CreateProduct = async function(product:TProduct) {
  const result = await TProductModel.create(product);
  return result;
}


export const ProductService = {
  CreateProduct
}