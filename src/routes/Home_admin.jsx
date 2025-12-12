import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1>Admin_Home_View</h1>
      <div>
        <h1 className="text-4xl font-bold p-4">
          Gerenation Thailand<br></br>React - Assessment
        </h1>
      </div>

      <div className="flex justify-between w-120 p-4">
        <button
          onClick={() => {
            navigate("../user_home_view");
          }}
          className=" bg-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-100"
        >
          User Home View
        </button>
        <button
          onClick={() => {
            navigate("../admin_home_view");
          }}
          className="bg-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-100"
        >
          Admin Home View
        </button>
      </div>
    </div>
  );
}

export default Home;
