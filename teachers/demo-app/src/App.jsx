import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { CounterAppPage } from "./CounterAppPage";
import RegisterForm from "./ResgisterForm";

export default function App() {
  return (
    <Routes>
      {/* Parent Route — Layout Wrap គ្រប់ Child Routes តាម <Outlet /> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Lesson 16 — State & Events */}
        <Route path="counter" element={<CounterAppPage />} />
        <Route path="todos" element={<Todos />} />
        <Route path="register" element={<RegisterForm />} />

        {/* Lesson 18 — React Router */}
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Lesson 19 — API Integration */}
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="create-post" element={<CreatePost />} />

        {/* Wildcard — គ្មាន Route ណា Match → 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
