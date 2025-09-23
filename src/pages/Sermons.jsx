import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const Sermons = () => {
  const sermons = [
    {
      title: "Walking in Faith",
      date: "August 18, 2025",
      description: "Discover how faith can guide every step of your life.",
      link: "#",
    },
    {
      title: "The Power of Prayer",
      date: "August 11, 2025",
      description: "Unlock the power of consistent, heartfelt prayer.",
      link: "#",
    },
    {
      title: "God’s Love in Action",
      date: "August 4, 2025",
      description: "Learn how God’s love transforms communities and hearts.",
      link: "#",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
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
            Sermons
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Listen to messages that uplift, teach, and inspire.
          </p>
        </div>
      </section>

      {/* Sermons List */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Recent Sermons
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {sermon.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{sermon.date}</p>
                <p className="text-gray-700 mb-6">{sermon.description}</p>
              </div>
              <Button
                variant="outline"
                className="w-full mt-auto rounded-full font-semibold"
                asChild
              >
                <a href={sermon.link}>Watch / Listen</a>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
