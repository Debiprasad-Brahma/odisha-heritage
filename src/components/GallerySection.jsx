import React from "react"
import {motion} from "framer-motion"
import ParallaxImage from "./ParallaxImage"
const GallerySection = ({title, bg, items, setSelectedImage}) => {
  return (
    <section className={`py-20 px-6 bg-linear-to-b ${bg} transition-all duration-700`}>
      <motion.h2
        className="text-5xl font-bold text-center text-orange-900 mb-12"
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
      >
        {title}
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <ParallaxImage
            key={index}
            src={item.img}
            title={item.title}
            speed={index % 2 === 0 ? 0.3 : 0.5}
            onClick={() => setSelectedImage(item)}
          />
        ))}
      </div>
    </section>
  )
}

export default GallerySection
