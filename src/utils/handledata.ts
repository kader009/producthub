// sanitization for data
export function sanitizeDbData(data: any) {
  if (Array.isArray(data)) {
    return data.map((item) => sanitizeAll(item));
  } else {
    return sanitizeAll(data);
  }
}

// handle every of for remove id,_id,__v
function sanitizeAll(doc: any) {
  const obj = doc.toObject ? doc.toObject() : { ...doc };
  delete obj._id;
  delete obj.__v;
  delete obj.id;
  if (obj.variants) {
    obj.variants = obj.variants.map((variant: any) => {
      delete variant._id;
      delete variant.id;
      return variant;
    });
  }
  if (obj.inventory) {
    delete obj.inventory._id;
    delete obj.inventory.id;
  }
  return obj;
}
