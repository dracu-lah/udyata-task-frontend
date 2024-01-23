import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import ProductPage from "@/pages/ProductPage";
import RootLayout from "./RootLayout";

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
