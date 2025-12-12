import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Owner from "./routes/Owner";
import Home_user from "./routes/Home_user";
import Home_admin from "./routes/Home_admin";

export default function App() {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user_home_view" element={<Home_user />} />
        <Route path="admin_home_view" element={<Home_admin />} />
        <Route path="owner" element={<Owner />} />
      </Routes>
    </div>
  );
}
