import React, {useState} from "react"
import {motion} from "framer-motion"
import {galleryData} from "../data/galleryData"
import ImageModal from "../components/ImageModal"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const allImages = galleryData.flatMap((section) => section.items);

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-16 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-center text-[#8B5E3C] mb-16 tracking-wide"
        initial={{opacity: 0, y: -40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        viewport={{once: true}}
      >
        Odisha Heritage Moments 📸
      </motion.h1>
      
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {allImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="break-inside-avoid relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all"
            whileHover={{scale: 1.03}}
            whileTap={{scale: 0.98}}
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: idx * 0.05}}
            viewport={{once: true, amount: 0.2}}
            onClick={() => setSelectedImage(img.src)}
          >

            <img
              src={img.src}
              alt={img.title}
              className="w-full h-auto object-cover rounded-2xl transition-all duration-300 hover:opacity-90"
              loading="lazy"
            />

            <div className="absolute inset-0 flex items-end justify-start bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100
 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold p-4 drop-shadow-lg tracking-wide">
                {img.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  )
}

export default Gallery
