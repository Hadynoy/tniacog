import tenImg from "../assets/12.webp"; 
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed transform-gpu"
      style={{
        backgroundImage: `url(${tenImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        willChange: "transform, opacity", // full GPU hint
      }}
    >
      {/* Overlay for readability */}
      <div
        className="absolute inset-0 bg-black/50"
        style={{ willChange: "opacity", transform: "translateZ(0)" }} // force GPU layer
      ></div>

      {/* Content */}
      <div
        className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center text-white"
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
      >
        {/* Heading */}
        <h2 className="section-heading text-white drop-shadow-lg transition-transform duration-300">
          Join Us in Worship
        </h2>
        <p className="section-sub text-white drop-shadow-md transition-transform duration-300">
          We gather regularly to worship God, grow in His Word, and strengthen
          one another in love.
        </p>

        {/* Service Times */}
        <div className="grid md:grid-cols-3 gap-8 text-white mt-8">
          {[
            { title: "Sunday School", time: "Every Sunday – 8:00 AM" },
            { title: "Sunday Worship", time: "Every Sunday – 9:00 AM" },
            { title: "Monthly Vigil", time: "Every 2nd Friday – 11:00 PM" },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 bg-black/40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow will-change-transform transform-gpu"
            >
              <h3 className="text-xl text-white font-heading font-semibold mb-2 drop-shadow-md">
                {service.title}
              </h3>
              <p className="font-body drop-shadow-sm">{service.time}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 will-change-transform transform-gpu">
          <Button asChild className="rounded-full px-8 py-6 text-base font-semibold">
            <Link to="/services">See More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
