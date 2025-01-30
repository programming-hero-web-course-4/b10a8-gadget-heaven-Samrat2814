import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner2 from "../Components/Banner2";

const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData() || []; // Ensure data is an array
  const product = Array.isArray(data)
    ? data.find((item) => item.product_id === id)
    : null;

  if (!product) {
    return <p>Product not found. Please check the URL or try again later.</p>;
  }

  const {
    description,
    product_image,
    product_title,
    specification,
    price,
    availability,
    rating,
  } = product;

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
    <div>
      <div>
      <Banner2 title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'/>
      </div>
      <div className="p-12 flex gap-14 justify-center shadow-2xl rounded-xl  mt-8">
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
        <div>
          <img className="h-96" src={product_image} alt={product_title} />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">{product_title}</h1>
          <p className="text-xl font-semibold">{price}k</p>
          <p className="px-2 border-orange-400 w-20 rounded-lg text-center text-orange-400 bg-orange-200">In Stock</p>
          <p>{description}</p>
          <p>Specification:</p>
          {Array.isArray(specification) ? (
            specification.map((spec, index) => <p className="font-medium" key={index}>{spec}</p>)
          ) : (
            <p>No specifications available.</p>
          )}
          <p>Rating: {rating}</p>
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
    </div>
  );
};

export default CoffeeDetails;
