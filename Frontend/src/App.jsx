import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Astrologers from "./pages/AstrologerList";



function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all-categories" element={<Categories />}/>
        <Route path="/astrology-consultation" element={<Astrologers />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
