function AboutUs() {
    return (
        <div className="h-dvh flex flex-col md:flex-row snap-start items-center">
            <div className="w-9/10 md:w-1/2 flex flex-col justify-center text-center font-halant gap-5 md:gap-10 mt-20">
                <p className="text-2xl md:text-4xl">A montage of familiar faces and names.</p>
                <p className="text-lg md:text-2xl lg:mx-30">Some stories come from the biggest names. Others begin with bold, rising voices.
                    We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.</p>

                <p className="flex justify-center">
                    <img src={"/assets/about_us_projects.svg"} className="size-32 md:size-64  -mr-10 md:-mr-25" />
                    <img src={"/assets/about_us_happy_clients.svg"} className="size-32 md:size-64 -mr-10 md:-mr-25" />
                    <img src={"/assets/about_us_experts_team.svg"} className="size-32 md:size-64 md:-mr-2" />
                </p>
            </div>
            <div className="w-9/10 md:w-1/2 flex flex-col h-full justify-between items-center text-center md:pt-18">
                <div className="font-island-moments text-3xl sm:text-5xl lg:text-[60px] md:mx-10">
                    Every project is more than just a brief - it’s a new chapter waiting to be written.
                    Together, we&apos;ve crafted tales that inspire, connect, and endure.</div>
                <div className="grid place-items-center mx-10">
                    <img className="col-start-1 row-start-1 z-10 h-30" src={"/assets/AboutUsBrandCircle.svg"} />
                    <img className="col-start-1 row-start-1 z-1 w-70 h-30 md:w-110 md:h-70 self-end" src={"/assets/AboutUsMountains.svg"} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
