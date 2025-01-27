import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Banner2 from "./Banner2";

const Cards = ({ cards }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  // Function to filter cards based on selected category
  const filterCards = () => {
    if (selectedCategory === "All Product") {
      return cards;
    }
    return cards.filter((card) => card.category === selectedCategory);
  };

  // Filtered cards based on selected category
  const filteredCards = filterCards();

  return (
    <div className="mt-">
      <Banner2 title='Upgrade Your Tech Accessorize with
       Gadget Heaven Accessories' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'/>
      <div className="mt-4">
        <h1 className="text-center text-2xl font-bold">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      {/* Container div */}
      <div className="flex gap-8 p-6 font-bold bg-base-100 shadow-xl">
        {/* Left side - Category selection */}
        <div className="flex flex-col gap-3">
          {["All Product", "Phones", "Laptops", "iPhone", "MacBook", "Accessories", "Smart Watches"].map(
            (category) => (
              <Link
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-left py-4 px-4 rounded-3xl whitespace-nowrap ${
                  selectedCategory === category ? "bg-primary text-white" : "bg-[#09080F0D]"
                }`}
              >
                {category}
              </Link>
            )
          )}
        </div>
        {/* Right side - Filtered cards */}
        <div className="grid grid-cols-3 gap-4">
          {filteredCards.map((card) => (
            <Card key={card.product_id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
