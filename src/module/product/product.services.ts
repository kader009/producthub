import { TProduct } from './product.interface';
import { TProductModel } from './product.model';

const CreateProduct = async function (product: TProduct) {
  const result = await TProductModel.create(product);
  return result;
};

// search functionality implement here
const getAllProduct = async function (searchTerm: string) {
  const pipeline: any[] = [
    {
      $project: {
        _id: 0,
      },
    },
  ];
  if (searchTerm) {
    pipeline.unshift({ $match: { $text: { $search: searchTerm } } });
  }
  const result = await TProductModel.aggregate(pipeline);
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

const deleteSingleProduct = async (_id: string) => {
  const result = await TProductModel.findByIdAndDelete(_id);
  return result;
};

const searchProduct = async (searchTerm: string) => {
  const matchSearch = new RegExp(searchTerm, 'i');
  console.log('service', matchSearch);
  const result = await TProductModel.find({
    $or: [
      { name: matchSearch },
      { description: matchSearch },
      { category: matchSearch },
      { tags: matchSearch },
    ],
  });
  return result;
};

export const ProductService = {
  CreateProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  searchProduct,
};
