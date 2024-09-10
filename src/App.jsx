import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'
import CartPizza from './views/CartPizza/CartPizza'
import Home from './views/Home/Home'
import Pizza from './views/Pizza/Pizza'
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NotFound from './views/NotFound/NotFound'
import Profile from './componentes/Profile/Profile'
import CartProvider from './context/CartContext'
import PizzasProvider from './context/PizzasContext'

function App() { 
  return (
    <CartProvider>
      <PizzasProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/pizzeria' element={<Home></Home>}></Route>
            <Route path='/pizzeria/register' element={<RegisterPage></RegisterPage>}></Route>
            <Route path='/pizzeria/login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/pizzeria/cart' element={<CartPizza></CartPizza>}></Route>
            <Route path='/pizzeria/p001' element={<Pizza></Pizza>}></Route>
            <Route path='/pizzeria/profile' element={<Profile></Profile>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>    
          <Footer></Footer>
        </BrowserRouter>  
      </PizzasProvider>
      
    </CartProvider>
      
  )
}

export default App

