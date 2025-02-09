import Image from "next/image";
import React from "react";

// Helper function to fetch a single product by ID
async function getProduct(productId) {
  const baseUrl = "https://ecommerce.routemisr.com";
  const response = await fetch(`${baseUrl}/api/v1/products/${productId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const { data } = await response.json();
  return data;
}

export default async function ProductsDetails({ params }) {
  const { productsdetails } = params;
  console.log("Product ID:", productsdetails);

  const product = await getProduct(productsdetails);

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

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  const baseUrl = "https://ecommerce.routemisr.com";
  const response = await fetch(`${baseUrl}/api/v1/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products for static params");
  }
  const { data: products } = await response.json();

  // Return an array of objects with the parameter names matching your folder structure
  return products.map((product) => ({
    productsdetails: product._id,
  }));
}
