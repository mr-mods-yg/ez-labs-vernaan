function Hero() {
  return (
    <div id="hero" className="h-dvh flex flex-col lg:flex-row snap-start justify-around items-center">
      <div className="lg:w-1/2 grid place-items-center mt-10 md:mt-0">
        <img src={"/assets/Hero Mandala.svg"} className="size-60 md:size-130 col-start-1 row-start-1" alt="Hero Mandala" />
        <img src={"/logo-high.png"} className="h-12 w-36 md:h-36 md:w-96 col-start-1 row-start-1" alt="Hero Mandala" />
      </div>
      <div className="lg:w-1/2 px-10 flex flex-col gap-10 text-center">
        <div className="font-island-moments text-2xl md:text-3xl lg:text-[80px]">Varnan is where stories find their voice and form</div>
        <div className="text-lg lg:text-[36px] text-[#F15D2B]">Films . Brands . Art</div>
        <div className="text-base lg:mx-15">Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
          V doesn’t just tell stories - V honors them.</div>
      </div>
    </div>
  )
}

export default Hero
