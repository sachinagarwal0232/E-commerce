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



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/payment" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sendotp" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/AddProduct' element={<CreateProduct />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/editproduct/:id" element={<EditProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/myorder' element={<MyOrders />} />
        <Route path='/orders' element={<AdminOrders />} />
      </Routes>
    </>
  )
}

export default App
