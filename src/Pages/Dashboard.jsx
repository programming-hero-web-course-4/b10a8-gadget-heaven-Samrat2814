import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="text-white">
      <div className="bg-[#9538E2]">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="font-semibold">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the <br /> coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="flex gap-4 mt-4 py-6 justify-center">
          {/* Use NavLink to automatically handle active styling */}
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `px-4 py-2 rounded ${
                isActive ? "bg-blue-700 text-white" : "bg-gray-500 text-white"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `px-4 py-2 rounded ${
                isActive ? "bg-blue-700 text-white" : "bg-gray-500 text-white"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div>
        {/* This will render the Cart or Wishlist components */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
