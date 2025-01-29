// Index Page for general navigation

"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import InfoPaper from "@/components/InfoPaper";
import MusicPlayer from "@/components/MusicPlayer";
import ResponsiveLongList from "@/components/ResponsiveLongList";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import defaultHandleInfoChange from "@/helpers/defaultHandleInfoChange";
import defaultHandleUpOrDown from "@/helpers/defaultHandleUpOrDown";
import useSFX from "@/hooks/useSFX";
import { useEffect, useMemo, useState } from "react";

export default function Sacrifice() {
    const { siteSettings } = useSiteSettings();
    
    const infoJSON: { [key: string]: string } = {
		"One to Two": "1 Penny (50% chance) or Nothing (50% chance)",
		"Three": "Nothing (33% chance) or 'You feel blessed!' buff (66% chance) - Increased chance to see an Angel Room in favour of a Devil Room on the current floor - This increased chance has a value of 15% * (Devil Room chance).",
		"Four": "1 Random Chest (50% chance) or Nothing (50% chance)",
		"Five": "3 Pennies (33% chance) or 'You feel blessed!' buff (66% chance) - Increased chance to see an Angel Room in favour of a Devil Room on the current floor. - This increased chance has a value of 50% * (Devil Room chance).",
		"Six": "Teleport to the Devil or Angel Room (33% chance) or 1 Random Chest (66% chance)",
		"Seven": "1 Random Angel Room Item (33% chance) or 1 Soul Heart (66% chance)", 
		"Eight": "6 Troll Bombs (100% chance)",
		"Nine": "Uriel Angel mini-boss spawns (100% chance)",
		"Ten": "7 Soul hearts (50% chance) or 30 Pennies (50% chance)",
		"Eleven": "Gabriel Angel mini-boss spawns (100% chance)",
		"Twelve+": "Teleport directly to the Dark Room floor (50% chance) or Nothing (50% chance)"
	}

    const leftSelectSound = useSFX('/sfx/left-select.wav');
    const rightSelectSound = useSFX('/sfx/right-select.wav');

    const [selectIdx, setSelectIdx] = useState<number>(0);
	const [info, setInfo] = useState<{ name: string, description: string }>({ name: 'One to Two', description: infoJSON['One to Two'] });

    const keys = useMemo(() => Object.keys(infoJSON), [infoJSON]);

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
            description: infoJSON[key]
        });
    }, [selectIdx]);

    return (
        <div className="relative bg-black bg-center bg-no-repeat bg-contain min-h-screen min-w-screen flex justify-center items-center">
            <MusicPlayer />
            <BackgroundVideo src="/videos/sacrifice-room.mp4" className="lg:left-[12vw]" />
            <HomeLink />
            <SlidableSiteOptions className="z-[100]" />
            <UpAndDownButtons 
                clickFunction={handleUpOrDown} 
                muted 
                className={`
                    z-[100] absolute max-sm:[&>button]:min-w-[40vw] max-sm:[&>button]:h-[10vh]
                    bottom-[15vh] ml-0 gap-[5vw]
                    sm:bottom-[30vh] sm:ml-0 sm:gap-[20vw]
                    lg:bottom-[25vh] lg:ml-[25vw] lg:gap-[15vw]
                    xl:bottom-[20vh] xl:ml-0 xl:gap-[20vw] xl:ml-[25vw]
                    2xl:ml-[25vw]
                `}
            />
            <ResponsiveLongList 
                title='# of Sacrifices'
                items={keys}
                selectedItem={info.name}
                action={handleInfoChange}
            />
            <InfoPaper 
                className={`
                    absolute w-[75vw] h-[23vh] top-[20vh] [&>.info-text-container]:justify-start [&>.info-text-container]:h-[75%] [&>.info-text-container]:gap-0 
                    sm:w-[75vw] sm:h-[30vh] sm:top-[5vh]
                    md:w-[60vw] md:h-[35vh] md:mb-32
                    lg:w-[50vw] lg:ml-[25vw]
                `}
            >
                <p className={`sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]`}><b><u>{info.name}</u></b></p>
                <p className={`sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]`}>{info.description}</p>
            </InfoPaper>
        </div>
    );
}