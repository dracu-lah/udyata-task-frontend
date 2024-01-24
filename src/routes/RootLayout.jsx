import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import CartModal from "@/components/CartModal";

const RootLayout = () => {
  return (
    <main className="container-fluid">
      <Header />
      <Outlet />
      <CartModal />

    </main>
  );
};

export default RootLayout;
