import { memo } from "react";

const contactMethods = [
  {
    type: "Call Us",
    href: "tel:+2348102044817",
    info: "+234 810 204 4817",
  },
  {
    type: "Email",
    href: "mailto:tniacogiwaya@gmail.com",
    info: "tniacogiwaya@gmail.com",
  },
  {
    type: "Visit Us",
    href: "https://www.google.com/maps/search/?api=1&query=12+Aderupoko+Street,+Iwaya,+Yaba,+Lagos,+Nigeria",
    info: "12, Aderupoko Street, Iwaya, Yaba, Lagos, Nigeria",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const ContactPreview = () => {
  return (
    <section className="py-16 bg-white will-change-transform transform-gpu">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 will-change-transform transform-gpu">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8 will-change-transform transform-gpu">
          We'd love to hear from you. Whether you have a question, need prayer,
          or simply want to connect, we’re here for you.
        </p>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contactMethods.map((method) => (
            <a
              key={method.type}
              href={method.href}
              {...(method.target ? { target: method.target, rel: method.rel } : {})}
              className="p-6 rounded-xl shadow-md bg-white hover:bg-indigo-50 transition-transform transform-gpu will-change-transform cursor-pointer block"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2 will-change-transform transform-gpu">
                {method.type}
              </h3>
              <p className="text-gray-600 will-change-transform transform-gpu">{method.info}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(ContactPreview);
