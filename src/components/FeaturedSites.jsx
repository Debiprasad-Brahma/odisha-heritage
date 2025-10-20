import React from "react"

import { motion } from "framer-motion";

const featured = [
  {
    name: "Konark Sun Temple",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Konark_Temple.jpg",
    desc: "A 13th-century architectural marvel and UNESCO World Heritage Site.",
  },
  {
    name: "Chilika Lake",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Chilika_Lake_Boat.jpg",
    desc: "Asia’s largest brackish water lagoon, home to migratory birds and dolphins.",
  },
  {
    name: "Dhauli Peace Pagoda",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Dhauli_Peace_Pagoda.jpg",
    desc: "The site where Emperor Ashoka embraced peace after the Kalinga War.",
  },
];

const FeaturedSites = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#fffaf2]">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-10 text-gray-800"
      >
        Popular Heritage Sites
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((site, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={site.img}
              alt={site.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{site.desc}</p>
              <button className="text-yellow-600 font-semibold hover:underline">
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSites;
