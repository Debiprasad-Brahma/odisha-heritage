import React from "react"
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"
const highlights = [
  {
    title: "Temples of Odisha",
    desc: "Odisha is home to over 7000 temples — each an architectural masterpiece representing centuries of devotion and artistry.",
    img: "https://static.toiimg.com/photo/47158773.cms",
  },
  {
    title: "Odissi Dance",
    desc: "Odissi is one of the eight classical dance forms of India, known for its grace, sculpturesque poses, and divine storytelling.",
    img: "https://www.sehernow.in/images-ananya2011/arunamohanty-full.jpg",
  },
  {
    title: "Handicrafts & Art",
    desc: "From the intricate Pattachitra paintings to silver filigree work of Cuttack, Odisha’s artistry is world-renowned.",
    img: "https://www.odishashop.com/wp-content/uploads/2019/10/Odisha-Handicrafts-Applique-Work-Pipili-Chandua.jpg",
  },
  {
    title: "Nature & Wildlife",
    desc: "Odisha offers breathtaking landscapes — from Chilika Lake’s dolphins to Similipal’s dense forests and cascading waterfalls.",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/5-duduma-koraput-odisha-city-hero-new?qlt=82&ts=1726663728506",
  },
]

const About = () => {
  const navigate = useNavigate()
  const handleExplore = () => {
    navigate("/explore")
  }
  return (
    <div className="bg-[#fffaf2] text-gray-800 font-poppins">
      {/* Hero Section */}
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/40/11/8b/40118b25abbe60ded9173c3227971611.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center"
        >
          About Odisha
        </motion.h1>
      </section>

      {/* Intro Section */}
      <motion.section
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        className="max-w-5xl mx-auto py-16 px-6 md:px-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">The Land of Timeless Heritage</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Odisha — often called *“The Soul of India”* — is a land where ancient traditions, vibrant
          festivals, and breathtaking art blend seamlessly. From the spiritual aura of the Jagannath
          Temple in Puri to the architectural grandeur of Konark’s Sun Temple, every stone here
          tells a story. Known for Odissi dance, handloom crafts, and serene beaches, Odisha is both
          a cultural and natural treasure.
        </p>
      </motion.section>

      {/* Highlights Grid */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Cultural Highlights</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: index * 0.1}}
              className="bg-[#fffaf2] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-yellow-700">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <motion.section
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        className="py-16 px-6 md:px-12 bg-[#fffaf2] text-center"
      >
        <h2 className="text-3xl font-bold mb-6">A Legacy of History</h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          Odisha’s history dates back over 2000 years — once known as *Kalinga*, it was the stage of
          the great Kalinga War that transformed Emperor Ashoka. The land later flourished under the
          Ganga dynasty, leaving behind architectural wonders like Konark and Lingaraj. Today,
          Odisha continues to celebrate its legacy through art, dance, and devotion.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.8}}
        className="py-20 bg-yellow-400 text-black text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Explore Odisha?</h2>
        <p className="mb-6 text-lg">
          Dive into the cultural and natural marvels that define this land.
        </p>
        <button
          onClick={handleExplore}
          className="bg-black text-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Start Exploring →
        </button>
      </motion.section>
    </div>
  )
}

export default About
