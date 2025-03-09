import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth"; // ✅ Ensure this is correct
import { SearchProvider } from "./context/search";
import { CartProvider } from "./context/cart";
import "antd/dist/reset.css";

console.log("✅ typeof AuthProvider:", typeof AuthProvider);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* ✅ Check if AuthProvider is valid */}
    {AuthProvider ? (
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
    ) : (
      <p>⚠️ AuthProvider is undefined</p>
    )}
  </BrowserRouter>
);

reportWebVitals();
