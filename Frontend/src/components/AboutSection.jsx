import React from "react"
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-16 px-6 md:px-12 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          About Odisha
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
          Odisha — the Land of Temples, Art, and Eternal Heritage. Known for its
          ancient architecture, classical dance Odissi, and spiritual depth,
          Odisha’s beauty transcends time. From the majestic Konark Sun Temple
          to the tranquil Chilika Lake, every corner tells a story of art,
          devotion, and nature.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutSection;

