import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Banner2 from "../Components/Banner2";

const data = [
  { category: "Laptops", count: 25 },
  { category: "Phones", count: 40 },
  { category: "Accessories", count: 18 },
  { category: "Smart Watches", count: 15 },
  { category: "MacBooks", count: 10 },
  { category: "iPhones", count: 30 },
];

const ProductBarChart = () => {
  return (
    <div className="">
        <Banner2 title="Statistics" subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"/>
      <h1 className="text-2xl font-bold mb-4 mt-6">Statistics</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductBarChart;
