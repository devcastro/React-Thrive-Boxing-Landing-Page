import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Products from './components/Products/Products.jsx';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/CheckoutForm/Checkout/Checkout.jsx';

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

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }


  useEffect(() => {
      fetchProducts();
      fetchCart();
  }, []);


  return (
    <Router>
      <GlobalStyle />
      <div>

      
      <Navbar  toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
     
        <Switch>
        
        <Route exact path='/'>
          <Hero />
          <Products products={products} onAddToCart={handleAddToCart} /> 
          <Feature />
          <Footer />
        </Route>

        <Route exact path='/cart'>
            <Cart 
            cart={cart}  
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            />
            <Footer />
        </Route>

        <Route exact path='/checkout'>
          <Checkout cart={cart} />
        </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

