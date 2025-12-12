import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Owner from "./routes/Owner";

export default function App() {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Owner" element={<Owner />} />
      </Routes>
    </div>
  );
}
