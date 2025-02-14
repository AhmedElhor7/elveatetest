import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Our Store!
        </h1>
        <Link
          href="/product"
          className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}
