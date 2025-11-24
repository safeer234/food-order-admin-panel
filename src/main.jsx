
import './App.css'

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from './Rooting/root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Products from './pages/Products.jsx';
import Orders from './pages/Orders.jsx';
import Users from './pages/Users.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
     
      {
        path: "/products",
        element: <Products />,
      },
       {
        path: "/orders",
        element: <Orders />,
      },
       {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
