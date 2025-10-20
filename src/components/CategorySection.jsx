import React from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "Temples", img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Lingaraj_Temple.jpg" },
  { name: "Waterfalls", img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Barehipani_Falls.jpg" },
  { name: "Forts", img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Barabati_Fort_Cuttack.jpg" },
  { name: "Beaches", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Puri_Beach.jpg" },
  { name: "Handicrafts", img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Pipili_Applique_Work.jpg" },
  { name: "Festivals", img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Ratha-Yatra-Puri.jpg" },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-10 text-gray-800"
      >
        Explore by Category
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              {cat.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

