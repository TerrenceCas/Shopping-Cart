import React, {useState} from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('PAGE_PRODUCTS');

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product}]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  }

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === 'PAGE_PRODUCTS' && (<Products addToCart={addToCart}/>)}
      {cart === 'PAGE_CART' && <Cart removeFromCart={removeFromCart}/>}
    </div>
  );
}

export default App;
