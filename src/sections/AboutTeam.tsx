function AboutTeam() {
  return (
    <div className="h-dvh flex flex-col md:flex-row snap-start justify-start md:justify-around relative">

      <div className="md:w-9/20 lg:w-1/2 flex flex-col items-center">
        <img className="relative w-90 h-80 md:h-80 md:w-110 lg:w-120 lg:h-105 z-60 lg:ml-5" src={"/assets/AboutTeamStickyNote.svg"} />
        <div className="hidden md:flex items-start justify-around">
          <img src={"/assets/IndiaGate.svg"} className="size-90" />
        </div>
      </div>

      <div className="md:w-11/20 lg:w-1/2 flex flex-col justify-center items-center">
        <div className="md:mt-10 lg:mt-5 flex justify-center md:justify-start w-full">
          <p className="text-lg sm:text-2xl md:text-4xl text-black font-island-moments">
            Film Makers <img src={"/assets/DownPointingVector.svg"} className="ml-20 h-12 w-17 md:h-24 md:w-36" />
          </p>
        </div>

        {/* PERSON STANDING */}
        <div className="flex">
          <p className="flex flex-1 flex-col text-lg justify-center sm:text-2xl md:text-3xl lg:text-4xl text-black font-island-moments">
            <img src={"/assets/RightPointingVector.svg"} className="h-20 md:w-35 md:h-23 lg:h-30" />
            Branding Experts
          </p>

          <img className="h-30 w-50 sm:h-50 sm:w-70 md:h-80 md:w-70 lg:w-100" src={"/assets/PersonStanding.svg"} />

          <p className="flex-1 text-lg sm:text-2xl md:text-4xl text-black font-island-moments">
            Art Curators
            <img src={"/assets/LeftPointingVector.svg"} className="h-20 md:w-35 md:h-23 lg:h-30" />
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-lg md:text-4xl font-halant">Take a closer look at the stories V bring to life.</p>
          <button className="border rounded-3xl text-white bg-orange-500 px-3 py-2 hover:bg-orange-600 hover:scale-105 transition-transform">View Portfolio</button>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
