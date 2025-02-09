import Image from 'next/image';
import React from 'react'

export default async  function ProductsDetails({ params }) {
  console.log(params);

  const { productsdetails } = params;
  console.log("Product ID:", productsdetails);

  const baseUrl = "https://ecommerce.routemisr.com";
  const productsApi = `/api/v1/products/${productsdetails}`;

  async function getProducts() {
    try {
      const response = await fetch(`${baseUrl}${productsApi}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const product = await getProducts();
  // console.log(product);
  // console.log("name" + product.title);
  // console.log("description" + product.description);
  // console.log("image" + product.imageCover);
  // console.log("price" + product.price);
  // console.log("Category Name " + product.category.name);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3">
          <Image
            src={product.imageCover}
            alt={product.name}
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Text Section */}
        <div className="p-6 md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {product.title}
          </h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold text-green-600">
              ${product.price}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-600">Category:</span>
            <span className="ml-2 text-gray-800">{product.category.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
