import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loading from "../loading";

export default async function Products() {
  const baseUrl = "https://ecommerce.routemisr.com";
  const productsApi = "/api/v1/products";

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

  let products = await getProducts();
  // Limit to 20 products
  products = products.slice(0, 20);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Responsive grid: 1 column on small screens up to 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/product/${product._id}`}>
                  {/* Image container for Next.js Image component with a fixed height */}
                  <div className="relative w-full h-48">
                    <Image
                      src={
                        product.imageCover.startsWith("http")
                          ? product.imageCover
                          : `${baseUrl}${product.imageCover}`
                      }
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Card content */}
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-700 font-medium mb-2">
                      ${product.price}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {product.description.length > 100
                        ? product.description.substring(0, 100) + "..."
                        : product.description}
                    </p>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
