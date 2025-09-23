import { useState } from "react";
import {
  FaHeart,
  FaBullhorn,
  FaHandshake,
  FaPrayingHands,
  FaRegHandPeace,
  FaChurch,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const RepentanceSteps = () => {
  const steps = [
    {
      step: "Acknowledge all your sins",
      passage: (
        <>
          <span className="font-semibold">Romans 3:23</span> – For all have sinned and fall short of the glory of God.
        </>
      ),
      icon: <FaHeart size={20} />,
    },
    {
      step: "Confess those sins",
      passage: (
        <>
          <span className="font-semibold">1 John 1:9</span> – If we confess our sins, He is faithful and just to forgive us.
        </>
      ),
      icon: <FaBullhorn size={20} />,
    },
    {
      step: "Ask for forgiveness of sins",
      passage: (
        <>
          <span className="font-semibold">Psalm 51:1</span> – Have mercy on me, O God, according to your steadfast love.
        </>
      ),
      icon: <FaHandshake size={20} />,
    },
    {
      step: "Repent of those sins",
      passage: (
        <>
          <span className="font-semibold">Acts 3:19</span> – Repent therefore, and turn back, that your sins may be blotted out.
        </>
      ),
      icon: <FaPrayingHands size={20} />,
    },
    {
      step: "Forsake all your old ways and sinful habits",
      passage: (
        <>
          <span className="font-semibold">Ephesians 4:22</span> – Put off your old self, which belongs to your former manner of life.
        </>
      ),
      icon: <FaRegHandPeace size={20} />,
    },
    {
      step: "Join a Bible believing Church or Worship With Us",
      passage: (
        <>
          <span className="font-semibold">Hebrews 10:25</span> – Do not neglect meeting together, as is the habit of some.
        </>
      ),
      icon: <FaChurch size={20} />,
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-16">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Do You Want To Give Your Life To Christ?
        </h1>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-5 bottom-0 w-1 bg-gray-300"></div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((s, index) => (
              <div
                key={index}
                className="flex flex-col cursor-pointer relative"
                onClick={() => setSelected(selected === index ? null : index)}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-indigo-600 text-indigo-600">
                    {s.icon}
                  </div>
                  <p className="text-lg font-medium text-gray-800">{s.step}</p>
                </div>

                <AnimatePresence>
                  {selected === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-14 text-gray-700 font-semibold text-sm md:text-base leading-relaxed italic"
                    >
                      {s.passage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepentanceSteps;
