import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <Header></Header>
      </header>

      {/* Main content grows to fill available space */}
      <main className="flex-grow px-4 md:px-10 py-6">
        <Outlet />
      </main>

      {/* Footer sticks to bottom if content is short */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
