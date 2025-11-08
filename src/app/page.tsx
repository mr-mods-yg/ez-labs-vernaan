
import Navbar from "@/components/Navbar"
import AboutTeam from "@/sections/AboutTeam"
import AboutUs from "@/sections/AboutUs"
import Hero from "@/sections/Hero"
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
      </div>
    </>
  )
}

export default Home
