import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Clothing from "./pages/Clothing/Clothing.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import CartsContextProvider from "./context/CartsContextProvider.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import CollectionContextProvider from "./context/CollectionContextProvider.jsx";
import CategoryContextProvider from "./context/CategoryContextProvider.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/clothing/:type", element: <Clothing /> },
      { path: "/productdetail/:permalink", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryContextProvider>
      <CollectionContextProvider>
        <CartsContextProvider>
          <RouterProvider router={ROUTES} />
        </CartsContextProvider>
      </CollectionContextProvider>
    </CategoryContextProvider>
  </StrictMode>
);
