import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ReviewsPage from "./Review";
import Footer from "./Footer";
import About from "./About";
import ContactPage from "./Contact";
import Loader from "./Loader";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Navbar />
      <Hero />
      <About />
      <ReviewsPage />
      <ContactPage />
      <Footer />
    </>
  );
}