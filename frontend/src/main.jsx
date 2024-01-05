import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Transactions from "./pages/Transactions.jsx";
import Admin from "./pages/Admin.jsx";
import Customers from "./pages/Customers.jsx";
import Overview from "./pages/Overview.jsx";
import Daily from "./pages/Daily.jsx";
import Breakdown from "./pages/Breakdown.jsx";
import Monthly from "./pages/Monthly.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="/products" element={<Product />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/breakdown" element={<Breakdown />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);
