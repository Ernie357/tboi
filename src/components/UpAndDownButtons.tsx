"use client";

import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import Image from "next/image";
import useSound from "use-sound";

export default function UpAndDownButtons(props: { downText?: string, upText?: string, clickFunction: (isDown: boolean) => void, className?: string, muted?: boolean }) {
    const { siteSettings } = useSiteSettings();

	const [leftSelectSound] = useSound('/sfx/left-select.wav');
	const [rightSelectSound] = useSound('/sfx/right-select.wav');

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