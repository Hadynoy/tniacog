import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import bannerImg from "../assets/8.webp"; // Use optimized local WebP image

const Banner = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      role="banner"
      className="relative h-[60vh] flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 max-w-4xl ml-auto mr-12"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h3
          className="text-xl md:text-4xl font-serif font-bold text-white mb-6 leading-snug tracking-wide drop-shadow-lg"
          variants={textVariant}
        >
          The greatest thing in the Kingdom of God is relationship, first with
          God and then with one another.
        </motion.h3>
        <motion.p
          className="text-lg md:text-xl text-indigo-200 font-light tracking-wider"
          variants={textVariant}
        >
          — Matthew 22:36-40
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Banner;
