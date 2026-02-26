import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import './App.css'
import Verify from './pages/Verify'
import CreateProduct from './pages/CreateProduct'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import AdminProducts from './pages/AdminProducts'
import Cart from './pages/Cart'
import EditProduct from './pages/EditProduct'
import Navbar from './pages/Navbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import MyOrders from './pages/MyOrders'
import AdminOrders from './pages/AdminOrders'
import ProtectedRoute from './pages/ProtectedRoute'


function App() {
  return (
    <>
      <Navbar />   {/* ✅ Outside Routes */}

      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sendotp" element={<Verify />} />

        {/* User Protected Routes */}
        <Route
          path="/ProductList"
          element={
            <ProtectedRoute role="user">
              <ProductList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute role="user">
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myorder"
          element={
            <ProtectedRoute role="user">
              <MyOrders />
            </ProtectedRoute>
          }
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute role="admin">
              <AdminProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/editproduct/:id"
          element={
            <ProtectedRoute role="admin">
              <EditProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/AddProduct"
          element={
            <ProtectedRoute role="admin">
              <CreateProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute role="admin">
              <AdminOrders />
            </ProtectedRoute>
          }
        />

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
    </>

  )
}

export default App
