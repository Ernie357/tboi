/*
    File: SearchSuggestion.tsx

    Purpose: Displays a clickable suggestion for a search bar

    Props: itemName - A string that represents the name of the item searched, Example: The Sad Onion
           itemImageName - A string that represents the name of the image searched, Example: "collectibles_001_thesadonion.png"
           clickFunction - A function that takes will be passed the value of the suggestion name when clicked
                           as a string, this function is called when the suggestion is clicked on.

    Notes: This component only works with searches related to Items.
*/

"use client";

import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import Image from "next/image";
import useSound from "use-sound";

export default function SearchSuggestion(props: { itemName: string, itemImageName: string, clickFunction: (value: string) => void }) {
    const { siteSettings } = useSiteSettings();

    const [beep] = useSound('/sfx/beep.wav');

    const handleClick = () => {
        props.clickFunction(props.itemName);
        siteSettings.sfxVolume > 0 && beep();
    }
    return (
        <div onClick={handleClick} className="z-50 p-3 cursor-pointer flex items-center w-56 h-20 bg-menu-paper-4 bg-center bg-contain bg-no-repeat">
            <Image 
                src={`/images/items/${props.itemImageName}`} 
                alt={`${props.itemName}`} 
                width={100} 
                height={100} 
                className="relative bottom-[3px] w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]"
            />
            <p className="font-Menu text-ui text-xl text-center">{props.itemName}</p>
        </div>
    );
}