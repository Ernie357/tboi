/*
    File: UpAndDownButtons.tsx

    Purpose: Reusable Component that displays two buttons, each having the purpose of going up
             or going down, respectively.

    Props: downText - An optional string that displays that text on the down button. If not provided,
                      a left arrow will appear instead.
           upText - An optional string that displays that text on up button. If not provided,
                    a right arrow will appear instead.
           clickFunction - A function that is passed true or false based on the button clicked.
                           Down = true and Up = false. This function is called when either button
                           is clicked.
           className - Optional string for additional tailwind classes.
           isMuted - Optional boolean that defaults to false if not provided that defines if the 
                     buttons will make noise when clicked on or not.
    
    Notes: This component only currently supports "up" and "down" as directions.
*/

"use client";

import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import useSFX from "@/hooks/useSFX";
import Image from "next/image";

export default function UpAndDownButtons(props: { downText?: string, upText?: string, clickFunction: (isDown: boolean) => void, className?: string, muted?: boolean }) {
    const { siteSettings } = useSiteSettings();

	const leftSelectSound = useSFX('/sfx/left-select.wav');
	const rightSelectSound = useSFX('/sfx/right-select.wav');

    const handleClick = (isDown: boolean) => {
        if(siteSettings.sfxVolume > 0 && !props.muted) {
			isDown ? leftSelectSound() : rightSelectSound();
		}
        props.clickFunction(isDown);
    }

    return (
        <div className={`flex ${props.className}`}>
            <button 
                onClick={() => handleClick(true)} 
                className="cursor-pointer flex justify-center items-center min-w-[7.8vw] h-36 md:h-28 lg:h-32 p-3 bg-menu-paper-1 bg-contain bg-center bg-no-repeat font-Menu text-2xl sm:text-4xl text-ui hover:text-black"
            >
                {props.downText ? props.downText : <Image src='/images/ui/left-arrow.png' alt='Go Left Arrow' width={50} height={50} />}
            </button>
            <button 
                onClick={() => handleClick(false)} 
                className="cursor-pointer flex justify-center items-center min-w-[7.8vw] h-36 md:h-28 lg:h-32 p-3 bg-menu-paper-1 bg-contain bg-center bg-no-repeat font-Menu text-2xl sm:text-4xl text-ui hover:text-black"
            >
                {props.upText ? props.upText : <Image src='/images/ui/right-arrow.png' alt='Go Right Arrow' width={50} height={50} />}
            </button>
        </div>
    );
}