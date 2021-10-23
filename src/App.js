import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
//import Products from './components/Products';
//import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Products from './components/Products/Products.jsx';


const App = () => {

  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
      fetchProducts();
  }, []);


  return (
    <Router>
      <GlobalStyle />
      <Hero />
      
      <Products products={products}/>
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
