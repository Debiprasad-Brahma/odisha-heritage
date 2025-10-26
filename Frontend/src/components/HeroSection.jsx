import React from "react"
import {motion} from "framer-motion"
import {useNavigate} from "react-router"
const HeroSection = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/about")
  }
  const handleExplore = () => {
    navigate("/explore")
  }
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/14/22/23/64/360_F_1422236444_HAxkBZAJQauLk618MO0YQAnJUknQSe04.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="relative z-10 text-white px-4"
      >
        <motion.h1
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 1}}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Discover the Soul of Odisha
        </motion.h1>

        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.4}}
          className="text-lg md:text-xl mb-6"
        >
          Explore temples, waterfalls, and cultural wonders of the Land of Jagannath
        </motion.p>

        <div className="space-x-4">
          <motion.button
            onClick={handleExplore}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition"
          >
            Explore Now
          </motion.button>

          <motion.button
            onClick={handleClick}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="px-6 py-3 border-2 border-yellow-400 rounded-xl hover:bg-yellow-400 hover:text-black transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
