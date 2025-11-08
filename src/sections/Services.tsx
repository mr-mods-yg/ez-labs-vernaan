"use client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ViewState = 0 | 1 | 2 | 3;

interface DefaultChooseProps {
    view?: ViewState;
    setView: React.Dispatch<React.SetStateAction<ViewState>>;
}

const Services = () => {
    const [view, setView] = useState<ViewState>(0);
    // 0 - default choose section
    // 1 - film production section
    // 2 - branding section
    // 3 - art curation section

    const components = {
        0: <DefaultChoose setView={setView} />,
        1: <FilmProduction setView={setView} />,
        2: <Branding setView={setView} />,
        3: <ArtCuration setView={setView} />,
    };
    return (
        <div className="h-dvh flex flex-col snap-start justify-center items-center">
            {components[view]}
        </div>
    )
}
function DefaultChoose({ setView }: DefaultChooseProps) {
    return <>
        <div className="mt-2 sm:mt-0 text-base sm:text-2xl lg:text-4xl flex flex-col gap-2 items-center">The storyboard reveals the breadth of our craft.
            <img src={"/assets/ServicesHeaderUnderline.svg"} />
        </div>
        <div className="flex flex-col sm:flex-row gap-1">
            <div onClick={() => setView(1)} className="relative hover:scale-102 transition-transform">
                <img className="h-47 w-40 sm:h-70 md:h-105 lg:h-135 sm:w-105 z-1" src={"/assets/services_section/film_production.svg"} />
                <img src={"/assets/services_section/tape1.svg"} className="absolute top-0 left-0 h-12 w-20 sm:h-15 sm:w-25 md:h-28 md:w-56 z-10" />
            </div>
            <div onClick={() => setView(2)} className="relative hover:scale-102 transition-transform">
                <img className="h-47 w-40 sm:h-70 md:h-105 lg:h-135 sm:w-105 z-1" src={"/assets/services_section/branding.svg"} />
                <img src={"/assets/services_section/tape2.svg"} className="absolute top-0 left-1/2 h-12 w-20 sm:h-15 sm:w-25 md:h-28 md:w-56 z-10 -translate-x-1/2" />
            </div>
            <div onClick={() => setView(3)} className="relative hover:scale-102 transition-transform">
                <img className="h-47 w-40 sm:h-70 md:h-105 lg:h-135 sm:w-105 z-1" src={"/assets/services_section/art_curation.svg"} />
                <img src={"/assets/services_section/tape3.svg"} className="absolute top-0 right-0 h-12 w-20 sm:h-15 sm:w-25 md:h-28 md:w-56 z-10" />
            </div>
        </div></>
}
function FilmProduction({ setView }: DefaultChooseProps) {
    return <>
        <div className="mt-21 md:mt-10 text-base sm:text-lg lg:text-3xl flex flex-col gap-2 items-center">
            <p className="font-halant">&quot;Filmmaking is a chance to live many lifetimes.&quot; <br className="flex md:hidden" />- Robert Altman</p>
            <img src={"/assets/ServicesHeaderUnderline.svg"} />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-2 lg:px-30">
            <div className="w-5/6 md:w-1/2 flex justify-center">
                <div className="mt-4 md:mt-0">
                    <button className="p-2 md:p-3 border rounded-3xl flex gap-1 border-[#F15D2B] text-[#F15D2B] font-instrument hover:scale-102 transition-transform" onClick={() => setView(0)}><ChevronLeftIcon /> Back</button>
                </div>
                <div className="flex md:h-117 items-end">
                    <Image alt="Film Production image" priority unoptimized height={180} width={216} className="h-54 w-45 md:h-107 md:w-98" src={"/assets/services_section/film_production_card.svg"} />
                </div>
            </div>
            <div className="w-5/6 md:w-1/2 flex h-full flex-col justify-start font-instrument gap-1 md:text-xl text-[#252729]">
                <div className="flex justify-between">
                    <div className="md:mt-20 w-120 pr-3">
                        Who says films are just an escape?
                        We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.</div>
                    <div className="h-full flex justify-start">
                        <img className="h-36 w-28" src={"/assets/services_section/camera_01.svg"} />
                    </div>
                </div>
                <div className="flex justify-between w-110">
                    <div>
                        V crafts:
                        <ul className="list-disc pl-6">
                            <li>Documentaries</li>
                            <li>Corporate Videos</li>
                            <li>2D Animation Videos</li>
                            <li>3D Animation Videos</li>
                        </ul>
                    </div>
                    <div className="h-full flex items-center">
                        <img className="w-28 h-24" src={"/assets/services_section/camera_03.svg"} />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-between sm:px-15 md:px-30 lg:px-45 items-center mt-5 md:mt-0">
            <img className="w-28 h-24" src={"/assets/services_section/camera_04.svg"} />
            <div className="flex flex-col items-center justify-start font-instrument md:text-2xl">
                Explore Now
                <img className="w-28 h-24 hover:scale-105 transition-transform" src={"/assets/Arrow.svg"} />

            </div>
            <img className="w-28 h-24" src={"/assets/services_section/camera_02.svg"} />
        </div>

    </>
}
function Branding({ setView }: DefaultChooseProps) {
    return <>
        <div className="mt-21 md:mt-10 text-base sm:text-lg lg:text-3xl flex flex-col gap-2 items-center">
            <p className="font-halant">&quot;A brand is a voice, and a product is a souvenir.&quot; <br className="flex md:hidden" />- Lisa Gansky</p>
            <img src={"/assets/ServicesHeaderUnderline.svg"} />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-2 lg:px-30">
            <div className="w-5/6 md:w-1/2 flex justify-center">
                <div className="mt-4 md:mt-0">
                    <button className="p-2 md:p-3 border rounded-3xl flex gap-1 border-[#F15D2B] text-[#F15D2B] font-instrument hover:scale-102 transition-transform" onClick={() => setView(0)}><ChevronLeftIcon /> Back</button>
                </div>
                <div className="flex md:h-117 items-end">
                    <Image 
                    alt="Branding Image" 
                    priority unoptimized
                    height={180} width={216} 
                    className="h-54 w-45 md:h-107 md:w-98" 
                    src={"/assets/services_section/branding_card.svg"} />
                </div>
            </div>
            <div className="w-5/6 md:w-1/2 flex h-full flex-col justify-start font-instrument gap-1 md:text-xl text-[#252729]">
                <div className="flex justify-between">
                    <div className="md:mt-20 w-120 pr-3">
                        A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
                        We shape brands that people remember, return to, and fall in love with.
                    </div>
                    <div className="h-full flex justify-start">
                        <img className="h-36 w-28" src={"/assets/services_section/Branding Vector 04.svg"} />
                    </div>
                </div>
                <div className="flex justify-between w-110">
                    <div>
                        V creates:
                        <ul className="list-disc pl-6">
                            <li>Branding & Communication</li>
                            <li>Market Mapping</li>
                            <li>Content Management</li>
                            <li>Social Media Management</li>
                            <li>Rebranding</li>
                        </ul>
                    </div>
                    <div className="h-full flex items-center">
                        <img className="w-28 h-24" src={"/assets/services_section/Branding Vector 03.svg"} />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-between sm:px-15 md:px-30 lg:px-45 items-center mt-5 md:mt-0">
            <img className="w-28 h-24" src={"/assets/services_section/Branding Vector 02.svg"} />
            <div className="flex flex-col items-center justify-start font-instrument md:text-2xl">
                Explore Now
                <img className="w-28 h-24 hover:scale-105 transition-transform" src={"/assets/Arrow.svg"} />

            </div>
            <img className="w-28 h-24" src={"/assets/services_section/Branding Vector 01.svg"} />
        </div>
    </>
}
function ArtCuration({ setView }: DefaultChooseProps) {
    return <>
        <div className="mt-21 md:mt-10 text-base sm:text-lg lg:text-3xl flex flex-col gap-2 items-center">
            <p className="font-halant">&quot;V take art where it belongs, to the people.&quot; <br className="flex md:hidden" />- Vernita Verma</p>
            <img src={"/assets/ServicesHeaderUnderline.svg"} />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-2 lg:px-30">
            <div className="w-5/6 md:w-1/2 flex justify-center">
                <div className="mt-4 md:mt-0">
                    <button className="p-2 md:p-3 border rounded-3xl flex gap-1 border-[#F15D2B] text-[#F15D2B] font-instrument hover:scale-102 transition-transform" onClick={() => setView(0)}><ChevronLeftIcon /> Back</button>
                </div>
                <div className="flex md:h-117 items-end">
                    <Image
                        alt="Art Curation image" height={180} width={216} 
                        unoptimized
                        priority
                        className="h-54 w-45 md:h-107 md:w-98"
                        src={"/assets/services_section/art_curation_card.svg"}
                    />
                </div>
            </div>
            <div className="w-5/6 md:w-1/2 flex h-full flex-col justify-start font-instrument gap-1 md:text-xl text-[#252729]">
                <div className="flex justify-between">
                    <div className="md:mt-20 w-120 pr-3">
                        Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
                        Through every festival, every performance, and every gathering, we help stories find their stage and their people.
                    </div>
                    <div className="h-full flex justify-start">
                        <img className="h-36 w-28" src={"/assets/services_section/Art Curation Icons 03.svg"} />
                    </div>
                </div>
                <div className="flex justify-between w-110">
                    <div>
                        V curates:
                        <ul className="list-disc pl-6">
                            <li>Art Festivals</li>
                            <li>Live Performances</li>
                            <li>Community Events</li>
                            <li>Curating Storytelling</li>
                        </ul>
                    </div>
                    <div className="h-full flex items-center">
                        <img className="w-28 h-24" src={"/assets/services_section/Art Curation Icons 01.svg"} />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-between sm:px-15 md:px-30 lg:px-45 items-center mt-5 md:mt-0">
            <img className="w-28 h-24" src={"/assets/services_section/Art Curation Icons 02.svg"} />
            <div className="flex flex-col items-center justify-start font-instrument md:text-2xl">
                Explore Now
                <img className="w-28 h-24 hover:scale-105 transition-transform" src={"/assets/Arrow.svg"} />

            </div>
            <img className="w-28 h-24" src={"/assets/services_section/Art Curation Icons 04.svg"} />
        </div>
    </>
}
export default Services
