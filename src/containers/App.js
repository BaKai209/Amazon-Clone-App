import Header from "../components/Header";
import '../App.css'
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
