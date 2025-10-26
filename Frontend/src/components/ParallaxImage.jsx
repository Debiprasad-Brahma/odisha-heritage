import React from "react"
import {motion, useScroll, useTransform} from "framer-motion"
const ParallaxImage = ({src, title, speed = 0.3, onClick}) => {
  const {scrollY} = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -100 * speed])
  return (
    <div>
      <motion.div
        className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer group"
        style={{y}}
        onClick={onClick}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
          <h3 className="text-white text-xl font-semibold text-center px-3">{title}</h3>
        </div>
      </motion.div>
    </div>
  )
}

export default ParallaxImage
