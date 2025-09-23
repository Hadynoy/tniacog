import { motion } from "framer-motion";
import heroImg from "../assets/15.webp";

const Hero = () => {
  return (
    <section
      role="img"
      aria-label="Hero section showing church community"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight"
        >
          Welcome to{" "}
          <span className="text-indigo-300">
            The New Independent Apostolic Church Of God
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-200 mb-10 font-body"
        >
          A place where faith, love, and community come together.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
