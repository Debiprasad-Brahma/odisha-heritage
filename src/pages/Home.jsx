import React from "react"
import HeroSection from "../components/HeroSection"
import CategorySection from "../components/CategorySection"
import FeaturedSites from "../components/FeaturedSites"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <CategorySection />
        <FeaturedSites />
        <AboutSection />
        <Footer />
      </div>
    </>
  )
}

export default Home
