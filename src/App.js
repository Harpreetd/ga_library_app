import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "../src/pages/Home.js";
import Admin from "../src/pages/Admin.js";
import Book from "../src/pages/Book.js";
import User from "../src/pages/User.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/book" element={<Book />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
