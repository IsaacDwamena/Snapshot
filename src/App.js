// import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";

// Router
import { Routes, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Context Provider
import { ShopContextProvider } from "./ShopContext";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <ShopContextProvider>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<AboutUs />}></Route>
            <Route path="/aboutus" exact element={<AboutUs />}></Route>
            <Route path="/shop" exact element={<Shop />}></Route>
            <Route path="/cart" exact element={<Cart />}></Route>
          </Routes>
        </ShopContextProvider>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
