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
		if(isDown) {
			if(siteSettings.sfxVolume > 0) {
				leftSelectSound();
			}
			if(diceNumber === 1) {
				setDiceNumber(6);
			} else {
				setDiceNumber(prev => prev - 1);
			}
		} else {
			if(siteSettings.sfxVolume > 0) {
				rightSelectSound();
			}
			if(diceNumber === 6) {
				setDiceNumber(1);
			} else {
				setDiceNumber(prev => prev + 1);
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
        }} className={`${infoJSON[diceNumber].bg} relative bg-black bg-center bg-no-repeat bg-contain min-h-screen min-w-screen flex justify-center items-center`}>
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