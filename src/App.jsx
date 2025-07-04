
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='px-4 sm:px-[3vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes >
        <Route element={<Home />} path='/' />
        <Route element={< Collection />} path='/collection' />
        <Route element={< About />} path='/about' />
        <Route element={< Contact />} path='/contact' />
        <Route element={<  Product />} path='/product/:productId' />
        <Route element={<  Cart />} path='/cart' />
        <Route element={<  Login />} path='/login' />
        <Route element={<  Placeorder />} path='/place-order' />
        <Route element={<  Orders />} path='/orders' />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
