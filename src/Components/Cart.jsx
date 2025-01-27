import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Handle item removal with toast notification
  const removeItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart); // Update the state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage

    // Show a toast notification when an item is removed
    toast.error("Item removed from cart!");
  };

  return (
    <div className="p-6">
      {/* Toast Container to show toast messages */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              {/* Image */}
              <img
                src={item.product_image}
                alt={item.product_title}
                className="w-20 h-20 object-cover rounded"
              />

              {/* Title and price */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg text-gray-600 font-semibold">{item.product_title}</h2>
                <p className="text-gray-600 font-semibold">Price: {item.price}k</p>
                <p className="text-gray-600 font-semibold">
                 {item.description}
                </p>
              </div>

              {/* Delete Button */}
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
