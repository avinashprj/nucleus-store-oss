import { Response } from 'miragejs';

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllProductsHandler = function () {
  return new Response(200, {}, { products: this.db.products });
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getProductHandler = function (schema, request) {
  const { productId } = request.params;
  try {
    const product = schema.products.findBy({ _id: productId });
    return new Response(200, {}, { product });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
export const uploadProductHandler = function (schema, request) {
  const { product } = JSON.parse(request.requestBody);
  try {
    this.db.products.insert(product);
    return new Response(200, {}, { products: this.db.products });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
