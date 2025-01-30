import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (Array.isArray(storedCart)) {
      setCart(storedCart);
    } else {
      setCart([]);
    }
  }, []);

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Handle item removal with toast notification
  const removeItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.error("Item removed from cart!");
  };

  // Sort by price (Descending Order)
  const sortByPriceDescending = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  // Handle Purchase: Clear cart and show toast
  const handlePurchase = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.success("Purchase successful! Cart has been cleared.");
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-black text-2xl font-bold">Cart</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-black text-lg font-semibold">
            Total Cost: {getTotalPrice()}k
          </h1>
          <button
            onClick={sortByPriceDescending}
            className="px-2 py-1 bg-white border rounded border-blue-500 text-blue-400 hover:bg-blue-100"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Toast Container to show toast messages */}
      <ToastContainer position="top-right" autoClose={3000} />

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <img
                src={item.product_image}
                alt={item.product_title}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1 ml-4">
                <h2 className="text-lg text-gray-600 font-semibold">
                  {item.product_title}
                </h2>
                <p className="text-gray-600 font-semibold">
                  Price: {item.price}k
                </p>
                <p className="text-gray-600 font-semibold">{item.description}</p>
              </div>

              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
