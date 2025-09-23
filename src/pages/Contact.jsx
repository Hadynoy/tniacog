import Layout from "../components/Layout";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      {/* Hero / Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We’d love to hear from you. Send us a prayer request or any questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team is always ready to assist you. Reach out through phone, email, or WhatsApp.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaPhone className="text-indigo-600" />
              <a href="tel:+2348102044817" className="text-gray-700 hover:text-indigo-600 transition">
                +234 810 204 4817
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-600" />
              <a href="mailto:tniacogiwaya@gmail.com" className="text-gray-700 hover:text-indigo-600 transition">
                tniacogiwaya@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/2348063113315"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-500 transition"
              >
                +234 806 311 3315
              </a>
            </p>
          </div>

        </div>

        {/* Contact Form */}
<div className="bg-white p-8 rounded-2xl shadow-lg">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message / Prayer Request</h2>
  <form className="space-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700 transition"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700 transition"
    />
    <textarea
      placeholder="Your Message"
      rows="5"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700 transition"
    ></textarea>
    <Button
      type="submit"
      variant="outline"
      className="px-8 py-4 rounded-full shadow-md hover:shadow-lg"
    >
      Send Message
    </Button>
  </form>
</div>

      </section>
    </Layout>
  );
};

export default Contact;
