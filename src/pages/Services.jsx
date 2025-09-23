import Layout from "../components/Layout";
import { FaBible, FaChurch, FaRegClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import tenImg from "../assets/12.jpg"; // <-- your local image

const Services = () => {
  return (
    <Layout>
      {/* Hero / Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${tenImg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join us in worship, prayer, and study — there’s a place for everyone.
          </p>
        </div>
      </section>

      {/* Church Activities */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
          Church Activities
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition text-center">
            <div className="flex justify-center mb-4">
              <FaBible className="text-4xl text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Sunday School</h3>
            <p className="text-gray-700 mb-2">Every Sunday – 8:00 AM</p>
            <p className="text-gray-500 text-sm">
              Engage in inspiring Bible lessons for all ages.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition text-center">
            <div className="flex justify-center mb-4">
              <FaChurch className="text-4xl text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Sunday Worship</h3>
            <p className="text-gray-700 mb-2">Every Sunday – 9:00 AM</p>
            <p className="text-gray-500 text-sm">
              Experience heartfelt worship and life-changing sermons.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition text-center">
            <div className="flex justify-center mb-4">
              <FaRegClock className="text-4xl text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Monthly Vigil</h3>
            <p className="text-gray-700 mb-2">Every 2nd Friday – 11:00 PM</p>
            <p className="text-gray-500 text-sm">
              Join us for a night of prayer, reflection, and fellowship.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            What to Expect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Whether you are visiting for the first time or joining us regularly,
            you will experience heartfelt worship, practical Bible teaching, and
            a warm, welcoming community.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Come as you are, bring your family and friends, and be part of a
            church that seeks to glorify God in all we do.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            Be part of a community that loves God and loves people. Everyone is welcome.
          </p>

          <Button variant="outline" className="px-8 py-4 rounded-full shadow-md hover:shadow-lg">
            Plan Your Visit
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
