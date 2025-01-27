import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist data from localStorage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Handle item removal from wishlist
  const removeItem = (indexToRemove) => {
    const updatedWishlist = wishlist.filter(
      (_, index) => index !== indexToRemove
    );
    setWishlist(updatedWishlist); // Update the state
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage

    // Show toast notification
    toast.success("Item removed from wishlist!");
  };

  // Handle adding an item to the cart
  const addToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage

    // Show toast notification
    toast.success(`${item.product_title} added to cart!`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-4">
          {wishlist.map((item, index) => (
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
                <p className="text-gray-600">Price: {item.price}</p>
                <p className="text-gray-600">{item.description}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex gap-2">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
