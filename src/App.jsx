import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SignIn from "./components/SignIn";
import LivingRoom from "./collections/livingroom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import ProductPage from "./pages/ProductPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <main className="min-h-[60vh] px-5 py-24 text-center">
      <h1 className="text-4xl font-medium">
        Page not found
      </h1>

      <p className="mt-4 text-gray-600">
        Sorry, we couldn't find the page you requested.
      </p>

      <a
        href="/"
        className="mt-7 inline-block bg-[#193d32] px-7 py-3 text-sm text-white"
      >
        Back to home
      </a>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/collections/livingroom" element={<LivingRoom />} />

        <Route
          path="/collections/:slug"
          element={<Collection />}
        />

        <Route
          path="/products/:id"
          element={<ProductPage />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <CartDrawer />
    </>
  );
}
