// app/products/page.tsx
import Link from 'next/link';

// Fetching products data with SSR
async function getProducts() {
  const res = await fetch('https://dummyjson.com/products', { cache: 'no-store' }); // Disable caching for fresh SSR data
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Products Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border rounded p-4 shadow-md">
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.description.substring(0, 50)}...</p>
            <Link
              href={`/${product.id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
