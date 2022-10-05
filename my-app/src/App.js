import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Stock from './components/Stock';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
