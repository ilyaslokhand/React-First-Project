import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./layout.jsx";
import About from "./About-us/Aboutus.jsx";
import Contact from "./Contact-us/Contact.jsx";
import BuyNow from "./Buy-Now/BuyNow.jsx";
import ShowMore from "./Show-More/ShowMore.jsx";
import Register from "./Register/Register.jsx";
import Login from "./Login/Login.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "contact-us",
          element: <Contact />,
        },
        {
          path: "buy",
          element: <BuyNow />,
        },
        {
          path: "show",
          element: <ShowMore />,
        },
      ],
    },
  ],
  { basename: "/" }
);

export default router;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
