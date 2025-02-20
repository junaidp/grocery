import React from "react";
import GroceryMobileApp from "./grocery";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const home = () => {
  return (
    <div>
      <div className="bg-gray-50">
        <header className="gradient-bg text-white">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold"></div>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="hover:text-gray-200">
                  Features
                </a>
                <a href="#interface" className="hover:text-gray-200">
                  Interface
                </a>
                <a href="#how-it-works" className="hover:text-gray-200">
                  How It Works
                </a>
                <a href="#contact" className="hover:text-gray-200">
                  Contact
                </a>
              </div>
            </div>
          </nav>

          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Transform Your Grocery Store Management
                </h1>
                <p className="text-xl mb-8">
                  Streamline inventory, sales, and online orders with our
                  advanced QR-based POS system
                </p>
                <button className="bg-white text-purple-700 py-3 px-8 rounded-lg font-bold hover:bg-gray-100">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="10"
                      y="10"
                      width="380"
                      height="280"
                      rx="10"
                      fill="#f8fafc"
                      stroke="#e2e8f0"
                      stroke-width="2"
                    />

                    <rect
                      x="10"
                      y="10"
                      width="380"
                      height="40"
                      rx="10"
                      fill="#1e293b"
                    />
                    <text
                      x="30"
                      y="35"
                      fill="white"
                      font-family="sans-serif"
                      font-size="14"
                    >
                      SmartPOS Dashboard
                    </text>

                    <rect
                      x="30"
                      y="70"
                      width="340"
                      height="60"
                      rx="5"
                      fill="white"
                      stroke="#e2e8f0"
                    />
                    <text
                      x="45"
                      y="95"
                      fill="#475569"
                      font-family="sans-serif"
                      font-size="12"
                    >
                      Scan QR Code
                    </text>
                    <rect
                      x="45"
                      y="105"
                      width="200"
                      height="15"
                      rx="3"
                      fill="#f1f5f9"
                    />
                    <rect
                      x="255"
                      y="100"
                      width="100"
                      height="25"
                      rx="5"
                      fill="#6366f1"
                    />
                    <text
                      x="275"
                      y="117"
                      fill="white"
                      font-family="sans-serif"
                      font-size="12"
                    >
                      Scan
                    </text>

                    <rect
                      x="30"
                      y="150"
                      width="340"
                      height="120"
                      rx="5"
                      fill="white"
                      stroke="#e2e8f0"
                    />
                    <text
                      x="45"
                      y="175"
                      fill="#475569"
                      font-family="sans-serif"
                      font-size="12"
                    >
                      Current Order
                    </text>
                    <line x1="30" y1="185" x2="370" y2="185" stroke="#e2e8f0" />
                    <text
                      x="45"
                      y="205"
                      fill="#64748b"
                      font-family="sans-serif"
                      font-size="11"
                    >
                      Apple
                    </text>
                    <text
                      x="300"
                      y="205"
                      fill="#64748b"
                      font-family="sans-serif"
                      font-size="11"
                    >
                      $1.99
                    </text>
                    <text
                      x="45"
                      y="225"
                      fill="#64748b"
                      font-family="sans-serif"
                      font-size="11"
                    >
                      Bread
                    </text>
                    <text
                      x="300"
                      y="225"
                      fill="#64748b"
                      font-family="sans-serif"
                      font-size="11"
                    >
                      $3.49
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={faQrcode}
                    className="fas fa-qrcode text-purple-600 text-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">QR Code Integration</h3>
                <p className="text-gray-600">
                  Every inventory item is linked to a unique QR code for instant
                  scanning and information retrieval.
                </p>
              </div>

              <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={faBox}
                    className="fas fa-qrcode text-purple-600 text-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Real-time Inventory</h3>
                <p className="text-gray-600">
                  Automatic inventory updates with each sale, ensuring accurate
                  stock levels at all times.
                </p>
              </div>

              <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="fas fa-qrcode text-purple-600 text-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Online Ordering</h3>
                <p className="text-gray-600">
                  Customers can place orders through our mobile app, with
                  automatic inventory synchronization.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="interface" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              System Interface
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Experience our powerful yet user-friendly system interfaces
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="mockup-container bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Inventory Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Track stock levels, generate QR codes, and receive low stock
                  alerts.
                </p>
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="280"
                    rx="10"
                    fill="#f8fafc"
                    stroke="#e2e8f0"
                    stroke-width="2"
                  />

                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="40"
                    rx="10"
                    fill="#1e293b"
                  />
                  <text
                    x="30"
                    y="35"
                    fill="white"
                    font-family="sans-serif"
                    font-size="14"
                  >
                    Inventory Management
                  </text>

                  <rect
                    x="30"
                    y="70"
                    width="160"
                    height="80"
                    rx="5"
                    fill="white"
                    stroke="#e2e8f0"
                  />
                  <text
                    x="45"
                    y="95"
                    fill="#475569"
                    font-family="sans-serif"
                    font-size="12"
                  >
                    Total Items
                  </text>
                  <text
                    x="45"
                    y="125"
                    fill="#1e293b"
                    font-family="sans-serif"
                    font-size="24"
                    font-weight="bold"
                  >
                    1,234
                  </text>

                  <rect
                    x="210"
                    y="70"
                    width="160"
                    height="80"
                    rx="5"
                    fill="white"
                    stroke="#e2e8f0"
                  />
                  <text
                    x="225"
                    y="95"
                    fill="#475569"
                    font-family="sans-serif"
                    font-size="12"
                  >
                    Low Stock Alerts
                  </text>
                  <text
                    x="225"
                    y="125"
                    fill="#ef4444"
                    font-family="sans-serif"
                    font-size="24"
                    font-weight="bold"
                  >
                    8
                  </text>

                  <rect
                    x="30"
                    y="170"
                    width="340"
                    height="100"
                    rx="5"
                    fill="white"
                    stroke="#e2e8f0"
                  />
                  <text
                    x="45"
                    y="195"
                    fill="#475569"
                    font-family="sans-serif"
                    font-size="12"
                  >
                    Recent Updates
                  </text>
                  <line x1="30" y1="205" x2="370" y2="205" stroke="#e2e8f0" />
                  <text
                    x="45"
                    y="225"
                    fill="#64748b"
                    font-family="sans-serif"
                    font-size="11"
                  >
                    Milk - Stock Updated (-12 units)
                  </text>
                  <text
                    x="45"
                    y="245"
                    fill="#64748b"
                    font-family="sans-serif"
                    font-size="11"
                  >
                    Eggs - New QR Code Generated
                  </text>
                </svg>
              </div>

              <div className="mockup-container bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Order Verification System
                </h3>
                <p className="text-gray-600 mb-6">
                  Verify online orders through QR code scanning before delivery.
                </p>
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="280"
                    rx="10"
                    fill="#f8fafc"
                    stroke="#e2e8f0"
                    stroke-width="2"
                  />

                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="40"
                    rx="10"
                    fill="#1e293b"
                  />
                  <text
                    x="30"
                    y="35"
                    fill="white"
                    font-family="sans-serif"
                    font-size="14"
                  >
                    Online Order #12345
                  </text>

                  <rect
                    x="30"
                    y="70"
                    width="340"
                    height="200"
                    rx="5"
                    fill="white"
                    stroke="#e2e8f0"
                  />
                  <text
                    x="45"
                    y="95"
                    fill="#475569"
                    font-family="sans-serif"
                    font-size="12"
                  >
                    Order Items
                  </text>
                  <line x1="30" y1="105" x2="370" y2="105" stroke="#e2e8f0" />

                  <rect
                    x="45"
                    y="115"
                    width="150"
                    height="150"
                    rx="5"
                    fill="#f1f5f9"
                  />
                  <text
                    x="70"
                    y="195"
                    fill="#64748b"
                    font-family="sans-serif"
                    font-size="12"
                  >
                    Scan QR to Verify
                  </text>

                  <rect
                    x="215"
                    y="115"
                    width="140"
                    height="150"
                    rx="5"
                    fill="#f1f5f9"
                  />
                  <text
                    x="230"
                    y="140"
                    fill="#475569"
                    font-family="sans-serif"
                    font-size="12"
                  >
                    Items Verified: 3/5
                  </text>
                  <rect
                    x="230"
                    y="155"
                    width="110"
                    height="10"
                    rx="5"
                    fill="#e2e8f0"
                  />
                  <rect
                    x="230"
                    y="155"
                    width="66"
                    height="10"
                    rx="5"
                    fill="#6366f1"
                  />
                </svg>
              </div>
            </div>

            <div className="mockup-container bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Customer Ordering</h3>
              <p className="text-gray-600 mb-6">
                Seamless mobile ordering experience for your customers.
              </p>
              <GroceryMobileApp />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
