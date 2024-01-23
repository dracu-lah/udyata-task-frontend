import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const RootLayout = () => {
  return (
    <main className="container-fluid">
      <Header />
      <Outlet />
    </main>
  );
};

export default RootLayout;
