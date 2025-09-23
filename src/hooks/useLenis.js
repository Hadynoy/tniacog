// src/hooks/useLenis.js
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => t, // linear easing
      smooth: true,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenisRef.current.destroy();
  }, []);

  return lenisRef;
};

export default useLenis;
