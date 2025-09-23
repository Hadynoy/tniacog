import churchFamily from "../assets/7.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={churchFamily}
            alt="Church family"
            className="rounded-2xl shadow-lg"
            loading="lazy"             
            decoding="async"           
            fetchpriority="low"        
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="section-heading">Who We Are</h2>
          <p className="text-lg text-muted font-body mb-6">
            We are a family in Christ, growing together in faith, love, and
            truth. Our heart is to serve God, build relationships, and impact
            our community with the message of Jesus.
          </p>
          <Button asChild className="rounded-full px-6 py-6 text-base font-semibold">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
