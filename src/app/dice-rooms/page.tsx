// Page for displaying information for Dice Rooms

"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import LongList from "@/components/LongList";
import MusicPlayer from "@/components/MusicPlayer";
import Slidable from "@/components/Slidable";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import useSFX from "@/hooks/useSFX";
import { useEffect, useMemo, useState } from "react";

export default function DiceRooms() {
	const { siteSettings } = useSiteSettings();

    const classNameMap: { [key: number]: string } = {
        1: 'bg-dice-room-1',
        2: 'bg-dice-room-2',
        3: 'bg-dice-room-3',
        4: 'bg-dice-room-4',
        5: 'bg-dice-room-5',
        6: 'bg-dice-room-6'
    }

	const infoJSON: { [key: string]: string } = {
        "Dice Room 1": "",
        "Dice Room 2": "",
        "Dice Room 3": "",
        "Dice Room 4": "",
        "Dice Room 5": "",
        "Dice Room 6": "",
	}

	const leftSelectSound = useSFX('/sfx/left-select.wav');
	const rightSelectSound = useSFX('/sfx/right-select.wav');

	const [selectIdx, setSelectIdx] = useState<number>(0);

	const keys = useMemo(() => Object.keys(infoJSON), [infoJSON]);

	const handleUpOrDown = (isDown: boolean) => {
		if(isDown) {
			if(siteSettings.sfxVolume > 0) {
				leftSelectSound();
			}
			if(selectIdx === 0) {
				setSelectIdx(keys.length - 1);
			} else {
				setSelectIdx(prev => prev - 1);
			}
		} else {
			if(siteSettings.sfxVolume > 0) {
				rightSelectSound();
			}
			if(selectIdx === keys.length - 1) {
				setSelectIdx(0);
			} else {
				setSelectIdx(prev => prev + 1);
			}
		}
	}

    return (
        <div tabIndex={0} onKeyDown={(event: any) => {
            if(event.key === 'ArrowLeft') {
                handleUpOrDown(true);
            } else if(event.key === 'ArrowRight') {
                handleUpOrDown(false);
            }
        }} className={`${classNameMap[selectIdx + 1]} relative bg-black bg-center bg-no-repeat bg-contain min-h-screen min-w-screen flex justify-center items-center`}>
            <SlidableSiteOptions />
            <MusicPlayer />
            <HomeLink />
            <UpAndDownButtons 
                clickFunction={handleUpOrDown} 
                muted 
                className={`
                    absolute 
                    max-sm:top-[15vh]
                    sm:gap-36 sm:bottom-[35vh]
                    md:flex-col md:gap-0 md:bottom-[20vh] md:bottom-[37vh] md:left-[20vw]
                    xl:flex-row gap-8 xl:gap-72 xl:left-auto xl:bottom-[20vh]
                `}
            />
            <SlidableSiteOptions className="z-[100]"/>
        </div>
	);
}