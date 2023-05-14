import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function RootLayout() {
  return (
    <div>
      <Header />
      <main className="mx-auto min-h-[calc(100vh-128px)] max-w-7xl p-5">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
