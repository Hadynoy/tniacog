import Layout from "../components/Layout";

const Give = () => {
  return (
    <Layout>
      {/* Hero / Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Support Our Mission
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Your generous gift helps us grow the Kingdom of God and serve the community.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="max-w-3xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl shadow-lg mt-[-4rem] relative z-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Make a Donation
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Enter your details and donation amount below. (Frontend only for now)
        </p>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            />
          </div>
          <input
            type="number"
            placeholder="Donation Amount (USD)"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700"
          />
          <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700">
            <option value="">Select Payment Method</option>
            <option value="card">Credit / Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-indigo-700 text-white font-semibold shadow-md hover:bg-indigo-800 transition-colors"
          >
            Coming Soon
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Give;
