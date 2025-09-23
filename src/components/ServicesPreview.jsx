import tenImg from "../assets/12.jpg";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${tenImg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center text-white">
        {/* Heading */}
        <h2 className="section-heading text-white drop-shadow-lg">Join Us in Worship</h2>
        <p className="section-sub text-white drop-shadow-md">
          We gather regularly to worship God, grow in His Word, and strengthen
          one another in love.
        </p>

        {/* Service Times */}
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="p-6 bg-black/40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl text-white font-heading font-semibold mb-2 drop-shadow-md">
              Sunday School
            </h3>
            <p className="font-body drop-shadow-sm">Every Sunday – 8:00 AM</p>
          </div>
          <div className="p-6 bg-black/40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl text-white font-heading font-semibold mb-2 drop-shadow-md">
              Sunday Worship
            </h3>
            <p className="font-body drop-shadow-sm">Every Sunday – 9:00 AM</p>
          </div>
          <div className="p-6 bg-black/40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl text-white font-heading font-semibold mb-2 drop-shadow-md">
              Monthly Vigil
            </h3>
            <p className="font-body drop-shadow-sm">Every 2nd Friday – 11:00 PM</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <Button asChild className="rounded-full px-8 py-6 text-base font-semibold">
            <a href="/services">See More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
