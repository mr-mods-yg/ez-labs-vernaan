"use client";
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
    return <><div className="text-lg sm:text-2xl lg:text-4xl flex flex-col gap-2 items-center">The storyboard reveals the breadth of our craft.
        <img src={"/assets/ServicesHeaderUnderline.svg"} />
    </div>
        <div className="flex gap-1">
            <div onClick={() => setView(1)} className="relative hover:scale-102 transition-transform">
                <img className="sm:h-90 md:h-105 lg:h-135 w-105 z-1" src={"/assets/services_section/film_production.svg"} />
                <img src={"/assets/services_section/tape1.svg"} className="absolute top-0 left-0 h-15 md:h-28 md:w-56 z-10" />
            </div>
            <div onClick={() => setView(2)} className="relative hover:scale-102 transition-transform">
                <img className="sm:h-90 md:h-105 lg:h-135 w-105 z-1" src={"/assets/services_section/branding.svg"} />
                <img src={"/assets/services_section/tape2.svg"} className="absolute top-0 left-1/2 h-15 md:h-28 md:w-56 z-10 -translate-x-1/2" />
            </div>
            <div onClick={() => setView(3)} className="relative hover:scale-102 transition-transform">
                <img className="sm:h-90 md:h-105 lg:h-135 w-105 z-1" src={"/assets/services_section/art_curation.svg"} />
                <img src={"/assets/services_section/tape3.svg"} className="absolute top-0 right-0 h-15 md:h-28 md:w-56 z-10" />
            </div>
        </div></>
}
function FilmProduction({ setView }: DefaultChooseProps) {
    return <>
        <div className="underline" onClick={() => setView(0)}>Go Back</div>
        <div className="text-lg sm:text-2xl lg:text-4xl flex flex-col gap-2 items-center">
            Film Production
        </div>
    </>
}
function Branding({ setView }: DefaultChooseProps) {
    return <>
        <div className="underline" onClick={() => setView(0)}>Go Back</div>
        <div className="text-lg sm:text-2xl lg:text-4xl flex flex-col gap-2 items-center">
            Branding
        </div>
    </>
}
function ArtCuration({ setView }: DefaultChooseProps) {
    return <>
        <div className="underline" onClick={() => setView(0)}>Go Back</div>
        <div className="text-lg sm:text-2xl lg:text-4xl flex flex-col gap-2 items-center">Art Duration
        </div></>
}
export default Services
