import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = Array.isArray(JSON.parse(localStorage.getItem("wishlist")))
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [];
    setWishlist(storedWishlist);
  }, []);

  // Remove item from wishlist
  const removeItem = (productIdToRemove) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.product_id !== productIdToRemove
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.success("Item removed from wishlist!");
  };

  // Add to cart and remove from wishlist
  const addToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isItemInCart = storedCart.some(
      (cartItem) => cartItem.product_id === item.product_id
    );

    if (!isItemInCart) {
      const updatedCart = [...storedCart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Remove from wishlist
      removeItem(item.product_id);

      toast.success(`${item.product_title} added to cart!`);
    } else {
      toast.info(`${item.product_title} is already in the cart!`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-4">
          {wishlist.map((item) => (
            <div
              key={item.product_id || item.product_title}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <img
                src={item.product_image || "/default-image.jpg"}
                alt={item.product_title || "Product"}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg text-gray-600 font-semibold">
                  {item.product_title || "No Title Available"}
                </h2>
                <p className="text-gray-600">Price: {item.price || "N/A"}</p>
                <p className="text-gray-600">
                  {item.description || "No description available."}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => removeItem(item.product_id)}
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
