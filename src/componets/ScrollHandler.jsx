import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import debounce from "lodash.debounce";
import { useState } from "react";

const routes = ["/", "/about", "/services", "/testimonial", "/contact"];

const ScrollHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastScrollY = useRef(window.scrollY);
  const [currentIndex, setCurrentIndex] = useState(routes.indexOf(location.pathname));

  const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY;
    console.log("currentScrollY:", currentScrollY, "lastScrollY.current:", lastScrollY.current);

    if (currentScrollY > lastScrollY.current + 100) {
      // Scrolling down
      if (currentIndex < routes.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (currentScrollY < lastScrollY.current - 100) {
      // Scrolling up
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    lastScrollY.current = currentScrollY;
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, currentIndex]);

  useEffect(() => {
    if (routes[currentIndex] !== location.pathname) {
      navigate(routes[currentIndex]);
    }
  }, [currentIndex, navigate]);

  return null;
};

export default ScrollHandler;
