import Layout from "../components/Layout";
import img9 from "../assets/9.jpg"; // <-- import your local image

const About = () => {
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
            About Us
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            A family united in Christ, growing in love and truth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
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
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To proclaim the gospel of Jesus Christ, nurture discipleship, and
              build a family of believers who live out God’s love in practical ways.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To see lives transformed by the power of God’s Word and Spirit,
              equipping believers to impact their communities and the world for
              Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Pastor Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <img
          src={img9} // <-- using your asset
          alt="Pastor"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md"
        />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pastor David Adams</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our pastor is a shepherd with a heart for God’s people. With humility
          and faith, he leads our congregation in prayer, teaching, and service,
          guiding us closer to Christ every day.
        </p>
      </section>
    </Layout>
  );
};

export default About;
