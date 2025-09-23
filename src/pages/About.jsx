import { memo, useState, useEffect } from "react";
import Layout from "../components/Layout";
import img9 from "../assets/9.jpg"; // Pastor image
import bgImg from "../assets/15.webp"; // Hero background

const About = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Lazy load background
  useEffect(() => {
    const img = new Image();
    img.src = bgImg;
    img.onload = () => setBgLoaded(true);
  }, []);

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
        <div className="absolute inset-0 bg-black/60 will-change-opacity"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 will-change-transform">
            About Us
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto will-change-transform">
            A family united in Christ, growing in love and truth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 will-change-transform transform-gpu">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The New Independent Church of God began with a small group of believers
          gathering in faith and unity. Over the years, we’ve grown into a family
          of worshippers committed to sharing God’s love and truth with the world.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are not just a congregation, but a community built on strong
          relationships — with God first, and with one another in Christ.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6 will-change-transform transform-gpu">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              desc: "To proclaim the gospel of Jesus Christ, nurture discipleship, and build a family of believers who live out God’s love in practical ways."
            },
            {
              title: "Our Vision",
              desc: "To see lives transformed by the power of God’s Word and Spirit, equipping believers to impact their communities and the world for Christ."
            }
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pastor Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center will-change-transform transform-gpu">
        <img
          src={img9}
          alt="Pastor"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md will-change-transform"
          loading="lazy"
        />
        <h3 className="text-2xl font-bold text-gray-900 mb-2 will-change-transform">
          Pastor David Adams
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto will-change-transform">
          Our pastor is a shepherd with a heart for God’s people. With humility
          and faith, he leads our congregation in prayer, teaching, and service,
          guiding us closer to Christ every day.
        </p>
      </section>
    </Layout>
  );
};

export default memo(About);
