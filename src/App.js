import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import {
  About,
  BlogDetail,
  Blogs,
  Cart,
  Checkout,
  Contact,
  Home,
  Order,
  ProductDetail,
  Shop,
} from "./pages";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rj-base" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
