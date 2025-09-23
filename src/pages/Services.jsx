import { memo, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { FaBible, FaChurch, FaRegClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import bgImg from "../assets/12.webp"; 

const Services = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Lazy load hero background
  useEffect(() => {
    const img = new Image();
    img.src = bgImg;
    img.onload = () => setBgLoaded(true);
  }, []);

  const activities = [
    {
      icon: <FaBible className="text-4xl text-indigo-600" />,
      title: "Sunday School",
      time: "Every Sunday – 8:00 AM",
      desc: "Engage in inspiring Bible lessons for all ages.",
    },
    {
      icon: <FaChurch className="text-4xl text-indigo-600" />,
      title: "Sunday Worship",
      time: "Every Sunday – 9:00 AM",
      desc: "Experience heartfelt worship and life-changing sermons.",
    },
    {
      icon: <FaRegClock className="text-4xl text-indigo-600" />,
      title: "Monthly Vigil",
      time: "Every 2nd Friday – 11:00 PM",
      desc: "Join us for a night of prayer, reflection, and fellowship.",
    },
  ];

  return (
    <Layout>
      {/* Hero / Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center will-change-transform transform-gpu transition-opacity duration-700"
        style={{
          backgroundImage: bgLoaded ? `url(${bgImg})` : "none",
          opacity: bgLoaded ? 1 : 0,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 will-change-opacity"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight will-change-transform">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed will-change-transform">
            Join us in worship, prayer, and study — there’s a place for everyone.
          </p>
        </div>
      </section>

      {/* Church Activities */}
      <section className="max-w-6xl mx-auto px-6 py-24 will-change-transform transform-gpu">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight will-change-transform">
          Church Activities
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all will-change-transform text-center"
            >
              <div className="flex justify-center mb-4">{activity.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{activity.title}</h3>
              <p className="text-gray-700 mb-2">{activity.time}</p>
              <p className="text-gray-500 text-sm">{activity.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-24 px-6 will-change-transform transform-gpu">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight will-change-transform">
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

          <Button variant="outline" className="px-8 py-4 rounded-full shadow-md hover:shadow-lg will-change-transform">
            Plan Your Visit
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default memo(Services);
