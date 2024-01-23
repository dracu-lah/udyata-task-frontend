import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "@/pages/Dashboard";
import ProductPage from "@/pages/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: ":id",
        element: <ProductPage />,
      },
    ],
  },
]);
