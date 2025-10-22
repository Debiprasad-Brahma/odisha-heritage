import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heritageData } from "../data/heritageData";

export default function HeritageSearch() {
  const [query, setQuery] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Filter logic
  const filteredData = heritageData.filter((item) => {
    const lowerQuery = query.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery) ||
      item.district.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto relative">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-700">
        Odisha Heritage Explorer
      </h2>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, district, or category..."
          className="border border-gray-300 p-3 rounded-lg w-full sm:w-2/3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Grid */}
      {filteredData.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredData.map((place, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPlace(place)}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <img
                src={place.img}
                alt={place.name}
                className="h-48 w-full object-cover sm:h-40 md:h-48 lg:h-44"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{place.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  📍 {place.district} • {place.category}
                </p>
                <p className="text-yellow-500 font-semibold mt-2">⭐ {place.rating}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center mt-10 text-center">
          {/* Illustration */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No results"
            className="w-32 h-32 mb-4 opacity-70"
          />
          <p className="text-gray-500 text-lg">
            No results found for "{query}".
          </p>
        </div>
      )}

      {/* Animated Modal */}
      <AnimatePresence>
        {selectedPlace && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setSelectedPlace(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50 p-4 overflow-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl overflow-hidden relative">
                <img
                  src={selectedPlace.img}
                  alt={selectedPlace.name}
                  className="w-full object-cover h-64 sm:h-80 md:h-96"
                />
                <div className="p-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {selectedPlace.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    📍 {selectedPlace.district} • {selectedPlace.category}
                  </p>
                  <p className="text-yellow-500 font-semibold mb-3">⭐ {selectedPlace.rating}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedPlace.description}</p>
                </div>

                <button
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
