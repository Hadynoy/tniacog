import { memo, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import heroImg from "../assets/15.webp"; // optimized local WebP

const Contact = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Lazy load hero background
  useEffect(() => {
    const img = new Image();
    img.src = heroImg;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center will-change-transform transform-gpu transition-opacity duration-700"
        style={{
          backgroundImage: bgLoaded ? `url(${heroImg})` : "none",
          opacity: bgLoaded ? 1 : 0,
        }}
      >
        <div className="absolute inset-0 bg-black/60 will-change-opacity"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 will-change-transform">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed will-change-transform">
            We’d love to hear from you. Send us a prayer request or any questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 will-change-transform transform-gpu">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 will-change-transform">
            Get in Touch
          </h2>
          <p className="text-gray-700 leading-relaxed will-change-transform">
            Our team is always ready to assist you. Reach out through phone, email, or WhatsApp.
          </p>

          <div className="space-y-4 text-gray-700">
            <Button
              asChild
              variant="outline"
              className="w-full flex items-center gap-3 px-6 py-4 rounded-xl shadow-md hover:shadow-xl transition-all will-change-transform"
            >
              <a href="tel:+2348102044817">
                <FaPhone className="text-indigo-600" />
                +234 810 204 4817
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full flex items-center gap-3 px-6 py-4 rounded-xl shadow-md hover:shadow-xl transition-all will-change-transform"
            >
              <a href="mailto:tniacogiwaya@gmail.com">
                <FaEnvelope className="text-indigo-600" />
                tniacogiwaya@gmail.com
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full flex items-center gap-3 px-6 py-4 rounded-xl shadow-md hover:shadow-xl transition-all will-change-transform"
            >
              <a
                href="https://wa.me/2348063113315"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-500" />
                +234 806 311 3315
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg will-change-transform">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 will-change-transform">
            Send a Message / Prayer Request
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700 transition will-change-transform"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700 transition will-change-transform"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700 transition will-change-transform"
            ></textarea>
            <Button
              type="submit"
              variant="outline"
              className="px-8 py-4 rounded-full shadow-md hover:shadow-lg w-full will-change-transform"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default memo(Contact);
