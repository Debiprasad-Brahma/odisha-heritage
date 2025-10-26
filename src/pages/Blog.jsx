import React, {useState, useEffect} from "react"
import {motion} from "framer-motion"
import BlogCard from "../components/BlogCard"
import BlogFilter from "../components/BlogFilter"
import {BlogData} from "../data/dummyBLogs"
const Blog = () => {
  const [category, setCategory] = useState("All")
  const [filteredBlogs, setFilteredBlogs] = useState(BlogData)

  useEffect(() => {
    if (category === "All") {
      setFilteredBlogs(BlogData)
    } else {
      setFilteredBlogs(BlogData.filter((blog) => blog.category === category))
    }
  }, [category])
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-orange-50 to-amber-100 px-6 py-10">
        {/* REVIEW - Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-orange-800 mb-8"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          Odisha Heritage Blogs 📰
        </motion.h1>

        {/* REVIEW - Filter Section */}
        <div>
          <BlogFilter
            category={category}
            setCategory={setCategory}
          />
        </div>

        {/* REVIEW - Blogs Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </motion.div>

        {filteredBlogs.length === 0 && (
          <motion.p
            className="text-center text-gray-600 mt-10 text-lg"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
          >
            No blogs found in this category.
          </motion.p>
        )}
      </div>
    </>
  )
}

export default Blog
