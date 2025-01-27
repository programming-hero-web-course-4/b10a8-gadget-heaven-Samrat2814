import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {product_id ,product_title, price, product_image} = card;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl h-44 w-full"
        />
      </figure>
      <div className="px-5 pt-5 mb-5">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}k</p>
        <div className="card-actions">
          <Link to={`/details/${product_id}`}><button className="btn bg-white border-sky-600 text-sky-500 rounded-3xl mt-3 px-4">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
