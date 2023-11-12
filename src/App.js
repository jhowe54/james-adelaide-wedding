import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg bg-slate-800 h-screen text-white App">
      <BrowserRouter>
      <Header />
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
