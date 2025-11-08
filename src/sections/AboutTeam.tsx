function AboutTeam() {
  return (
    <div className="h-dvh flex flex-col md:flex-row snap-start justify-around relative">

      <div className="hidden md:w-4/10 lg:flex flex-col">
        <img className="relative w-120 h-105 z-60 md:ml-25" src={"/assets/AboutTeamStickyNote.svg"} />
        <div className="flex items-start justify-around">
          <img src={"/assets/IndiaGate.svg"} className="size-90" />
          <p className="text-4xl text-black font-island-moments">
            <img src={"/assets/RightPointingVector.svg"} className="w-48 h-56" />
            Branding Experts
          </p>
        </div>
      </div>

      <div className="md:w-9/10 lg:w-6/10 flex flex-col justify-center items-center">
        <div className="mt-10 lg:mt-5 flex justify-center md:justify-start w-full">
          <p className="text-lg sm:text-2xl md:text-4xl text-black font-island-moments">
            Film Makers <img src={"/assets/DownPointingVector.svg"} className="ml-20 h-12 w-17 md:h-24 md:w-36" />
          </p>
        </div>
        <div className="flex">
          <p className="block lg:hidden text-lg sm:text-2xl md:text-4xl text-black font-island-moments">
            <img src={"/assets/RightPointingVector.svg"} className="w-35 h-30 md:w-48 md:h-56" />
            Branding Experts
          </p>
          <img src={"/assets/PersonStanding.svg"} className="h-30 w-50 sm:h-50 sm:w-70 md:h-100 md:w-140" />
          <p className="text-lg sm:text-2xl md:text-4xl text-black font-island-moments">
            Art Curators
            <img src={"/assets/LeftPointingVector.svg"} className="h-15 md:h-36 w-24" />
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-lg md:text-4xl font-halant">Take a closer look at the stories V bring to life.</p>
          <button className="border rounded-3xl text-white bg-orange-500 px-3 py-2">View Portfolio</button>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
