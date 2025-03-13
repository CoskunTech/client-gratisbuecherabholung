import React, { useState, useEffect } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "./ScrollUp.css"; // CSS dosyası

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  // Kullanıcının aşağı kaydırıp kaydırmadığını kontrol et
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll event'ini dinle
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Sayfanın en üste kaymasını sağlar
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-up ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top">
      <ArrowCircleUpIcon />
    </button>
  );
};

export default ScrollUp;
