import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Banner2 from "./Banner2";

const Cards = ({ cards = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  // Function to filter cards based on selected category
  const filterCards = () => {
    if (selectedCategory === "All Product") {
      return Array.isArray(cards) ? cards : []; // Ensure it's an array
    }
    return Array.isArray(cards)
      ? cards.filter(
          (card) =>
            card.category?.toLowerCase() === selectedCategory.toLowerCase()
        )
      : [];
  };

  // Filtered cards based on selected category
  const filteredCards = filterCards();

  // Debugging: Check if cards are passed correctly
  console.log("Cards data:", cards);

  return (
    <div className="mt-">
      <Banner2
        title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <div className="mt-4">
        <h1 className="text-center text-2xl font-bold">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex gap-8 p-6 font-bold bg-base-100 shadow-xl">
        <div className="flex flex-col gap-3">
          {[
            "All Product",
            "Phones",
            "Laptops",
            "iPhone",
            "MacBook",
            "Accessories",
            "Smart Watches",
          ].map((category) => (
            <Link
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-left py-4 px-4 rounded-3xl whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-[#09080F0D]"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Card key={card.product_id} card={card} />
            ))
          ) : (
            <div>No products found for {selectedCategory}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
