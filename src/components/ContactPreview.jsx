const ContactPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We'd love to hear from you. Whether you have a question, need prayer,
          or simply want to connect, we’re here for you.
        </p>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Call */}
          <a
            href="tel:+2348102044817"
            className="p-6 rounded-xl shadow-md bg-white hover:bg-indigo-50 transition cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Call Us
            </h3>
            <p className="text-gray-600">+234 810 204 4817</p>
          </a>

          {/* Email */}
          <a
            href="mailto:tniacogiwaya@gmail.com"
            className="p-6 rounded-xl shadow-md bg-white hover:bg-indigo-50 transition cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Email
            </h3>
            <p className="text-gray-600">tniacogiwaya@gmail.com</p>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=12+Aderupoko+Street,+Iwaya,+Yaba,+Lagos,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl shadow-md bg-white hover:bg-indigo-50 transition cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Visit Us
            </h3>
            <p className="text-gray-600">
              12, Aderupoko Street, Iwaya, Yaba, Lagos, Nigeria
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
