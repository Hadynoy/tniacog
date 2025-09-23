import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // ✅ Keyboard Navigation Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${img7})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Capturing moments of worship, fellowship, and community.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Church Moments
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-5 text-white text-3xl font-bold"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt={`Gallery Large ${selectedIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-5 text-white text-3xl font-bold"
          >
            ›
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
