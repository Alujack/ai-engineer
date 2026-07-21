import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { CounterAppPage } from "./CounterAppPage";
import RegisterForm from "./ResgisterForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="counter" element={<CounterAppPage />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
