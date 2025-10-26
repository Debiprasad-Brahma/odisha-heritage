import React from "react";
import { motion } from "framer-motion";

const ImageModal = ({ image, setSelectedImage }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={() => setSelectedImage(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={image}
        alt="enlarged"
        className="max-w-[90%] max-h-[85%] rounded-2xl shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
};

export default ImageModal;
