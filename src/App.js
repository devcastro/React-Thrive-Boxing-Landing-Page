import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Products from './components/Products/Products.jsx';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve()); 
  }

 const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }


  useEffect(() => {
      fetchProducts();
      fetchCart();
  }, []);


  return (
    <Router>
      <GlobalStyle />
      <Navbar  toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Hero />
      <Products products={products} onAddToCart={handleAddToCart} />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;

