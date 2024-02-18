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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
