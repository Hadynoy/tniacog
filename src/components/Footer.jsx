import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* About Church */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">The New Independent Apostolic Church Of God</h3>
          <p className="text-gray-400 leading-relaxed">
          Building lives through the love of Christ. Our mission is to reflect God’s
          kingdom on earth through relationship, worship, and service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 leading-relaxed hover:text-white ">Home</a></li>
            <li><a href="/about" className="text-gray-400 leading-relaxed hover:text-white">About Us</a></li>
            <li><a href="/services" className="text-gray-400 leading-relaxed hover:text-white">Services</a></li>
            <li><a href="/gallery" className="text-gray-400 leading-relaxed hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="text-gray-400 leading-relaxed hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FaPhone className="text-indigo-500" />
              <a href="tel:+2348102044817" className="text-gray-400 leading-relaxed hover:text-white  transition">+234 810 204 4817</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-500" />
              <a href="mailto:tniacogiwaya@gmail.com" className="text-gray-400 leading-relaxed hover:text-white transition">tniacogiwaya@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              <a href="https://wa.me/2348063113315" target="_blank" rel="noopener noreferrer" className="text-gray-400 leading-relaxed hover:text-white  transition">
                +234 806 311 3315
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-500 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} The New Independent Apostolic Church Of God. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;