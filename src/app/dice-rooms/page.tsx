// Page for displaying information for Dice Rooms

"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import InfoPaper from "@/components/InfoPaper";
import MusicPlayer from "@/components/MusicPlayer";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import defaultHandleUpOrDown from "@/helpers/defaultHandleUpOrDown";
import useSFX from "@/hooks/useSFX";
import { useState } from "react";

export default function DiceRooms() {
	const { siteSettings } = useSiteSettings();

    const infoJSON: { 
        [key: number]: { 
          name: string; 
          bg: string; 
          description: string; 
        } 
      } = {
        1: { name: "Dice Room 1", bg: "bg-dice-room-1", description: "Rerolls all items, including active items, from the pool in which the item was acquired. Only rerolls the items of the character that stepped onto the dice in co-op (Meaning that Tainted Forgotten has to be thrown on the button in order to take effect.)" },
        2: { name: "Dice Room 2", bg: "bg-dice-room-2", description: "Rerolls pickups in the room, like the D20 would." },
        3: { name: "Dice Room 3", bg: "bg-dice-room-3", description: "Rerolls pickups and trinkets on the entire floor, including shop pickups. Does not reroll pickups or trinkets in the Devil Room, Angel Room, Black Market, or Crawl Space. Pickups rerolled in shops by this effect have a chance to turn into items. If these are active items, they will have no charges when picked up." },
        4: { name: "Dice Room 4", bg: "bg-dice-room-4", description: "Rerolls any item pedestals on the floor, like The D6 would. Does not reroll item pedestals in the Devil Room, Angel Room, Black Market, or Crawl Space." },
        5: { name: "Dice Room 5", bg: "bg-dice-room-5", description: "Rerolls and restarts the current floor, which is the same effect as Forget Me Now." },
        6: { name: "Dice Room 6", bg: "bg-dice-room-6", description: "Combines the effects of the 1-, 3-, and 4-pip rooms. (Rerolls all held items (including active), pickups, trinkets, and pedestal items like the D100.) Rerolls all held items for all characters in co-op." },
    };

	const leftSelectSound = useSFX('/sfx/left-select.wav');
	const rightSelectSound = useSFX('/sfx/right-select.wav');

	const [diceNumber, setDiceNumber] = useState<number>(1);

	const handleUpOrDown = (isDown: boolean) => {
        defaultHandleUpOrDown(isDown, diceNumber, setDiceNumber, 1, 6, siteSettings.sfxVolume, leftSelectSound, rightSelectSound);
	}

    return (
        <div tabIndex={0} onKeyDown={(event: any) => {
            if(event.key === 'ArrowLeft') {
                handleUpOrDown(true);
            } else if(event.key === 'ArrowRight') {
                handleUpOrDown(false);
            }
        }} className={`relative bg-black bg-center bg-no-repeat bg-contain min-h-screen min-w-screen flex justify-center items-center`}>
            <BackgroundVideo src={`/videos/dice-room-${diceNumber}.mp4`} />
            <MusicPlayer />
            <HomeLink />
            <UpAndDownButtons 
                clickFunction={handleUpOrDown} 
                muted 
                className={`
                    absolute max-sm:[&>button]:min-w-[40vw] max-sm:[&>button]:h-[10vh]
                    max-sm:top-[20vh]
                    sm:gap-[40vw] sm:bottom-[40vh]             
                    2xl:flex-row gap-8 2xl:gap-72 2xl:left-auto 2xl:bottom-[20vh]
                `}
            />
            <InfoPaper 
                className={`
                    absolute top-0 left-0 w-[60vw] h-[14vh]
                    sm:w-[75vw] sm:h-[20vh]
                    md:w-[75vw] md:h-[20vh] 
                    lg:w-[50vw]
                    2xl:w-[30vw] 2xl:h-[15vw] 2xl:top-10 2xl:left-10
                `}
            >
                <p className={`sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]`}><b><u>{infoJSON[diceNumber].name}</u></b></p>
            </InfoPaper>
            <InfoPaper 
                className={`
                    absolute bottom-[100px] [&>.info-text-container]:h-[75%] [&>.info-text-container]:justify-start w-[75vw] h-[20vh]
                    sm:bottom-[10vw] sm:w-[75vw] sm:h-[30vh]
                    md:bottom-0 md:left-0 md:w-[60vw] md:h-[30vh]
                    lg:w-[50vw]
                    2xl:w-[30vw] 2xl:h-[20vw] 2xl:bottom-auto 2xl:top-96 2xl:left-10
                `}
            >
                <p className={`sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]`}>{infoJSON[diceNumber].description}</p>
            </InfoPaper>
            <SlidableSiteOptions className="z-[100]"/>
        </div>
	);
}