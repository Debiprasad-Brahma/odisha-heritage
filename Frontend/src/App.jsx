import React, {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Gallery from "./pages/Gallery"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("userinfo")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar
        user={user}
        setUser={setUser}
      />

      <div className="pt-20 px-4 md:px-12">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/explore"
            element={<Explore />}
          />
          <Route
            path="/gallery"
            element={<Gallery />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/login"
            element={<Login setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
