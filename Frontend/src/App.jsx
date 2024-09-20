import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";



function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all-categories" element={<Categories />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
