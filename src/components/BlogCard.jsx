import React from "react"
import {motion} from "framer-motion"
import {CalendarDays} from "lucide-react"

export default function BlogCard({blog}) {
  return (
    <motion.div
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.98}}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
      variants={{
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0},
      }}
    >
      <img
        src={blog.img}
        alt={blog.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <CalendarDays className="w-4 h-4 mr-1" />
          {blog.date}
        </div>
        <h3 className="text-xl font-semibold text-orange-800 mb-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
        <button className="text-orange-600 hover:text-orange-800 font-medium text-sm">
          Read More →
        </button>
      </div>
    </motion.div>
  )
}
