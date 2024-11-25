import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from FakeStoreAPI
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));

    // Fetch cart (dummy user cart)
    fetch("https://fakestoreapi.com/carts/1") // Assume user ID 1 for simplicity
      .then((response) => response.json())
      .then((data) => {
        const cartProducts = data.products || [];
        setCart(cartProducts);
      })
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.productId === product.id);

    if (existingItem) {
      // Update cart item quantity
      const updatedCart = cart.map((item) =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);

      // Update cart in API
      fetch("https://fakestoreapi.com/carts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          date: new Date().toISOString(),
          products: updatedCart.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        }),
      });
    } else {
      // Add new product to cart
      const updatedCart = [...cart, { productId: product.id, quantity: 1 }];
      setCart(updatedCart);

      // Update cart in API
      fetch("https://fakestoreapi.com/carts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          date: new Date().toISOString(),
          products: updatedCart.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        }),
      });
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);

    // Update cart in API
    fetch("https://fakestoreapi.com/carts/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        date: new Date().toISOString(),
        products: updatedCart.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      }),
    });
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl">Loading...</div>;
  }

  function square (num){
    return num = num * num 
  }
  
  const result = square(50)
  console.log(result);
  
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg truncate">{product.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{product.category}</p>
              <p className="font-semibold text-xl mt-3 text-green-500">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mt-10 mb-4">Cart</h2>
      <div className="bg-white rounded-lg shadow-md p-5">
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              return (
                <li key={item.productId} className="flex justify-between items-center mb-4">
                  <span>
                    {product?.title || "Unknown"} (x{item.quantity})
                  </span>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default App;


function square (num){
  return num = num * num 
}

const result = square(5)