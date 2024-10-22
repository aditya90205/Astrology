// import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Categories from "./pages/Categories";
// import Astrologers from "./pages/AstrologerList";
// import Footer from "./components/Footer";



// function App() {
//   return (
//     <>
//     <Router>
//     <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/all-categories" element={<Categories />}/>
//         <Route path="/astrology-consultation" element={<Astrologers />}/>
//       </Routes>
//       <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Astrologers from "./pages/AstrologerList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-categories" element={<Categories />} />
            <Route path="/astrology-consultation" element={<Astrologers />} />
          </Routes>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

