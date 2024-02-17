import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, rating: 4, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, rating: 3, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, rating: 5, image: 'https://via.placeholder.com/150' }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar__brand">Shopping Cart</div>
          <div className="navbar__search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="navbar__categories">
            <select>
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>
        </nav>
      </header>
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>Rating: {product.rating}</p>
              <div className="quantity-controls">
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
