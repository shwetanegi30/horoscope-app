import InputForm from "./Components/InputForm/LoginForm";
import Astro from "./Components/Astro/Zodic";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="astro" element={<Astro />} />
      </Routes>
    </BrowserRouter>
  );
}
