import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const product = data.find((item) => item.product_id === id);
  const {
    description,
    product_image,
    product_title,
    specification,
    price,
    availability,
    rating,
  } = product;

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const isProductInCart = cart.find(
      (item) => item.product_id === product.product_id
    );

    if (!isProductInCart) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to cart!");
    } else {
      toast.info("Product is already in the cart!");
    }
  };

  // Function to handle adding to wishlist
  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const isProductInWishlist = wishlist.find(
      (item) => item.product_id === product.product_id
    );

    if (!isProductInWishlist) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Product added to wishlist!");
    } else {
      toast.info("Product is already in the wishlist!");
    }
  };

  return (
    <div className="p-6 flex gap-10 justify-center">
      {/* Toast Container */}
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

      {/* Left div */}
      <div>
        <img className="h-60" src={product_image} alt="" />
      </div>

      {/* Right div */}
      <div>
        <h1>{product_title}</h1>
        <p>{price}</p>
        <p>{availability}</p>
        <p>{description}</p>
        <p>Specification:</p>
        {specification.map((spec, index) => (
          <p key={index}>{spec}</p>
        ))}
        <div className="flex items-center gap-3">
          <Link>
            <button
              onClick={handleAddToCart}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Add to Cart
            </button>
          </Link>
          <button
            onClick={handleAddToWishlist}
            className="p-2 bg-white border rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
