import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "../pages/Login";
import { DashboardLayout } from "./DashboardLayout";
import { Sales } from "../pages/Sales";
import { Products } from "../pages/Products";
import { Categories } from "../pages/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "/sales/:productId",
        element: <Sales />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/new",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/products/:id/delete",
        element: <Products />,
      },
      {
        path: "/products/:id/edit",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/new",
        element: <Categories />,
      },
      {
        path: "/categories/:id",
        element: <Categories />,
      },
      {
        path: "/categories/:id/delete",
        element: <Categories />,
      },
      {
        path: "/categories/:id/edit",
        element: <Categories />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
