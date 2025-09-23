import { memo } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Predefined data arrays to reduce inline JSX repetition
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const contacts = [
  { icon: <FaPhone className="text-indigo-500" />, label: "+234 810 204 4817", href: "tel:+2348102044817" },
  { icon: <FaEnvelope className="text-indigo-500" />, label: "tniacogiwaya@gmail.com", href: "mailto:tniacogiwaya@gmail.com" },
  { icon: <FaWhatsapp className="text-green-500" />, label: "+234 806 311 3315", href: "https://wa.me/2348063113315", target: "_blank", rel: "noopener noreferrer" },
];

const socialLinks = [
  { icon: <FaFacebookF size={20} />, href: "#" , hover: "hover:text-indigo-500"},
  { icon: <FaInstagram size={20} />, href: "#" , hover: "hover:text-pink-500"},
  { icon: <FaTwitter size={20} />, href: "#" , hover: "hover:text-blue-400"},
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 will-change-transform transform-gpu">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* About Church */}
        <div className="will-change-transform transform-gpu">
          <h3 className="text-xl font-bold text-white mb-4">The New Independent Apostolic Church Of God</h3>
          <p className="text-gray-400 leading-relaxed">
            Building lives through the love of Christ. Our mission is to reflect God’s
            kingdom on earth through relationship, worship, and service.
          </p>
        </div>

        {/* Quick Links */}
        <div className="will-change-transform transform-gpu">
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-400 leading-relaxed hover:text-white transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="will-change-transform transform-gpu">
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            {contacts.map((contact, index) => (
              <li key={index} className="flex items-center gap-2">
                {contact.icon}
                <a
                  href={contact.href}
                  {...(contact.target ? { target: contact.target, rel: contact.rel } : {})}
                  className="text-gray-400 leading-relaxed hover:text-white transition"
                >
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="will-change-transform transform-gpu">
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href} className={`${social.hover} transition`}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm will-change-transform transform-gpu">
        &copy; {new Date().getFullYear()} The New Independent Apostolic Church Of God. All rights reserved.
      </div>
    </footer>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(Footer);
