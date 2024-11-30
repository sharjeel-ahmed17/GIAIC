// app/products/[id]/page.tsx
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

// Fetch product details with SSR
async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch product details');
  }
  return res.json();
}

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product: Product = await getProduct(params.id);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full max-w-md rounded-md shadow-lg"
      />
      <p className="mt-4 text-gray-700">{product.description}</p>
      <p className="mt-4 text-lg font-bold">Price: ${product.price}</p>
      <p className="mt-2 text-sm text-gray-600">Category: {product.category}</p>
    </div>
  );
}
