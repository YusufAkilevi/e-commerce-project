import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col  items-between min-h-screen">
      <Header />
      <main className="min-h-[90vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
