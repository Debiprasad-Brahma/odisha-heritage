import React from "react"

const BlogFilter = ({category, setCategory}) => {
  const categories = [
    "All",
    "Architecture",
    "Nature",
    "Festival",
    "Temples",
    "Waterfalls",
    "Forts",
    "Beaches",
    "Handicrafts",
    "Festivals",
  ]
  return (
    <>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border px-4 py-2 rounded-xl focus:ring-2 focus:ring-orange-400"
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </>
  )
}

export default BlogFilter
