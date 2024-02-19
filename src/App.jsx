import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { useState } from 'react'
import data from './assets/data.json'


const App = () => {

  const [cart, setCart] = useState([])

  const handleAddToCart = (id) => {
    const newItem = data.productinfo.find(item => item.id == id);
    console.log(newItem)
    setCart([...cart, newItem])
  }

  const handleChange = (item, b) => {
    const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
            // the count property of the item is being updated
            return { ...cartItem, count: cartItem.count + b };
        }
        return cartItem;
    });

    setCart(updatedCart);
}


  return (
    <div className='App'>
      <Router>
        <NavBar quantity={cart.length}/>
        <Routes>
          <Route path='/' element={<Shop handleAddToCart={handleAddToCart}/>} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
        </Routes>
      </Router>
    </div >
  )
}

export default App
