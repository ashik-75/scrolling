import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function RootLayout() {
  return (
    <div>
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
