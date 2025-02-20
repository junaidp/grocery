import React, { useState } from 'react';

const GroceryMobileApp = () => {
  const [currentTab, setCurrentTab] = useState('browse');
  const [cartItems, setCartItems] = useState([]);
  
  const categories = [
    { id: 1, name: 'Fruits & Vegetables', icon: '🥬' },
    { id: 2, name: 'Dairy & Eggs', icon: '🥚' },
    { id: 3, name: 'Breads & Bakery', icon: '🥖' },
    { id: 4, name: 'Beverages', icon: '🥤' }
  ];

  const products = [
    { id: 1, name: 'Fresh Apples', price: 1.99, category: 1, unit: 'lb', image: '/api/placeholder/80/80' },
    { id: 2, name: 'Organic Bananas', price: 0.99, category: 1, unit: 'lb', image: '/api/placeholder/80/80' },
    { id: 3, name: 'Whole Milk', price: 3.49, category: 2, unit: 'gallon', image: '/api/placeholder/80/80' },
    { id: 4, name: 'Fresh Bread', price: 2.99, category: 3, unit: 'loaf', image: '/api/placeholder/80/80' }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 h-screen flex flex-col">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Fresh Mart</h1>
          <div className="relative">
            <span className="text-2xl">🛒</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
        <div className="mt-4">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full p-2 rounded-lg text-gray-800"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {currentTab === 'browse' ? (
          <div className="p-4">
            {/* Categories */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Categories</h2>
              <div className="grid grid-cols-2 gap-3">
                {categories.map(category => (
                  <div
                    key={category.id}
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 cursor-pointer hover:bg-gray-50"
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Popular Items</h2>
              <div className="space-y-4">
                {products.map(product => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
                  >
                    <div className="flex space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-gray-600">
                          ${product.price}/{product.unit}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                Your cart is empty
              </div>
            ) : (
              <div>
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600">
                            ${item.price}/{item.unit}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="bg-gray-200 px-3 py-1 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 px-3 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t">
        <div className="flex justify-around p-4">
          <button
            onClick={() => setCurrentTab('browse')}
            className={`flex flex-col items-center ${currentTab === 'browse' ? 'text-purple-600' : 'text-gray-600'}`}
          >
            <span className="text-xl">🏠</span>
            <span className="text-sm">Browse</span>
          </button>
          <button
            onClick={() => setCurrentTab('cart')}
            className={`flex flex-col items-center ${currentTab === 'cart' ? 'text-purple-600' : 'text-gray-600'}`}
          >
            <span className="text-xl">🛒</span>
            <span className="text-sm">Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryMobileApp;