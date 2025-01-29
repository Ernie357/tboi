// Page for displaying information for the item Birthright

"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import InfoPaper from "@/components/InfoPaper";
import LongList from "@/components/LongList";
import MusicPlayer from "@/components/MusicPlayer";
import Slidable from "@/components/Slidable";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import defaultHandleInfoChange from "@/helpers/defaultHandleInfoChange";
import defaultHandleUpOrDown from "@/helpers/defaultHandleUpOrDown";
import useSFX from "@/hooks/useSFX";
import { useEffect, useMemo, useState } from "react";

export default function Transformations() {
    const { siteSettings } = useSiteSettings();

    const infoJSON: { [key: string]: { items: string[], description: string } } = {
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
        "": { items: [''], description: '' },
    };

        const leftSelectSound = useSFX('/sfx/left-select.wav');
        const rightSelectSound = useSFX('/sfx/right-select.wav');

    const [selectIdx, setSelectIdx] = useState<number>(0);
    const [info, setInfo] = useState<{ name: string, items: string[], description: string }>({ name: 'Conjoined', items: [], description: 'Conjoined Descripton.' });

    const keys = useMemo(() => Object.keys(infoJSON), []);

    const handleUpOrDown = (isDown: boolean) => {
        defaultHandleUpOrDown(isDown, selectIdx, setSelectIdx, 0, keys.length - 1, siteSettings.sfxVolume, leftSelectSound, rightSelectSound);
    }

    const handleInfoChange = (item: string) => {
        defaultHandleInfoChange(item, keys, setSelectIdx);
    }

    useEffect(() => {
        const key = keys[selectIdx] ? keys[selectIdx] : keys[0];
        if(!keys[selectIdx]) {
            setSelectIdx(0);
        }
        setInfo({
            name: key,
            items: infoJSON[key].items,
            description: infoJSON[key].description
        });
    }, [selectIdx]);

    return (
        <div tabIndex={0} onKeyDown={(event: any) => {
            if(event.key === 'ArrowLeft') {
                handleUpOrDown(true);
            } else if(event.key === 'ArrowRight') {
                handleUpOrDown(false);
            }
        }} className="relative bg-black bg-center bg-no-repeat bg-contain min-h-screen min-w-screen flex justify-center items-center">
            <MusicPlayer />
            <BackgroundVideo className="lg:left-[12vw]" />
            <HomeLink />
            <UpAndDownButtons 
                clickFunction={handleUpOrDown} 
                muted 
                className={`
                    z-[100] absolute
                    bottom-[15vh] ml-0 gap-[20vw]
                    sm:bottom-[30vh] sm:ml-0 sm:gap-[20vw]
                    lg:bottom-[25vh] lg:ml-[25vw] lg:gap-[15vw]
                    xl:bottom-[20vh] xl:ml-0 xl:gap-[20vw] xl:ml-[25vw]
                    2xl:ml-[25vw]
                `}
            />
            <Slidable
                direction="up" 
                defaultHeightClassName="h-12" 
                expandedHeightClassName="h-[90vh]"
                title="Transformations"
                className={`
                    absolute left-0 bottom-0 w-full z-[100] [&>div>.title]:text-[4vw]
                    sm:w-[50vw]
                    hidden
                    sm:flex
                    lg:hidden
                `}
            >
                <LongList 
                    action={handleInfoChange} 
                    items={Object.keys(infoJSON)} 
                    className="[&>img]:w-full [&>img]:top-0 [&>img]:left-0 text-2xl w-full h-[90vh]"
                />
            </Slidable>
            <Slidable
                direction="down" 
                defaultHeightClassName="h-[50px]" 
                expandedHeightClassName="h-[90vh]"
                title="Transformations"
                className={`
                    absolute left-0 top-0 w-full z-[100] [&>div>.title]:text-[6vw]
                    sm:hidden
                `}
            >
                <LongList 
                    action={handleInfoChange} 
                    items={Object.keys(infoJSON)} 
                    className="[&>img]:w-full [&>img]:top-0 [&>img]:left-0 text-2xl w-full h-[90vh]"
                />
            </Slidable>
            <LongList 
                    action={handleInfoChange} 
                    items={Object.keys(infoJSON)} 
                    className="[&>img]:w-[90%] hidden lg:flex z-[100] text-2xl w-[55vh] h-[90vh] absolute left-0"
                    title="Transformations"
            />
            <SlidableSiteOptions className="z-[100]"/>
            <InfoPaper 
                title={info.name}
                description={info.description}
                titleClassName="sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw]"
                descriptionClassName="sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]"
                className={`
                    relative [&>.info-text-container]:justify-start [&>.info-text-container]:h-[75%] [&>.info-text-container]:gap-0  
                    w-[75vw] h-[30vh] mb-[30vh]
                    sm:w-[75vw] sm:h-[30vh]
                    md:w-[60vw] md:h-[30vh] md:mb-44
                    lg:w-[50vw] lg:ml-[25vw]
                    xl:ml-[25vw]
                    2xl:h-[50vh] 2xl:ml-[25vw]
                `}
            />
        </div>
    );
}