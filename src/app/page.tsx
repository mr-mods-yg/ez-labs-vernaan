
import Navbar from "@/components/Navbar"
import AboutTeam from "@/sections/AboutTeam"
import AboutUs from "@/sections/AboutUs"
import Contact from "@/sections/Contact"
import Hero from "@/sections/Hero"
import Portfolio from "@/sections/Portfolio"
import Services from "@/sections/Services"

function Home() {

  return (
    <>
      <Navbar />
      <div className="h-dvh snap-y snap-mandatory overflow-y-scroll">
        <Hero />
        <AboutTeam />
        <AboutUs />
        <Services />
        <Portfolio/>
        <Contact/>
      </div>
    </>
  )
}

export default Home
