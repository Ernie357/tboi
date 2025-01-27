/*
    File: SelectableMenuOption.tsx

    Purpose: Displays clickable text in the site's ui font and color

    Props: children - A string that represents the text to be displayed
           action - If action is a string, the text will be a Link that has that string as href.
                    If action is a function, the text will be a button that calls that function on click.
                    The displayed text is the argument passed to this function as string.
           className - Optional string to define additional tailwind classes
           disableCursor - Optional boolean to define if the cursor should be shown to the left
                           of the text or not, defaults to false if not provided.
           openInNewTab - Optional boolean, opens link in new tab if true, defaults to false.
                          This will not do anything if props.action is a function.
*/

"use client";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import useSFX from "@/hooks/useSFX";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SelectableMenuOption(props: { children: string, action: string | ((item: string) => void), className?: string, disableCursor?: boolean, openInNewTab?: boolean }) {
    const { siteSettings } = useSiteSettings();

    const [isSelected, setIsSelected] = useState<boolean>(false);
    
    const paperSound = useSFX('/sfx/paper-in.wav');

    const handleSelect = () => {
        setIsSelected(prev => !prev);
    }

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
        siteSettings.sfxVolume && paperSound();
        event.currentTarget instanceof HTMLButtonElement && typeof props.action === "function" && props.action(props.children);
    }

	return (
        <div className={`w-full flex items-center gap-4 ${props.className}`}>
            {
                isSelected && !props.disableCursor ?
                <Image src={'/images/ui/cursor.png'} alt="cursor" height={25} width={25} className="hidden sm:block rotate-[3deg] w-[25px] h-[25px] relative 2xl:left-[10px]" />
                :
                (!props.disableCursor ? <div className="hidden md:block w-[25px] h-[25px] rotate-[3deg] relative 2xl:left-[10px]"></div> : <></>)
            }
            {typeof props.action === 'string' ? <Link 
                rel={props.openInNewTab ? "noopener noreferrer" : ""} 
                target={props.openInNewTab ? "_blank" : ""}
                href={props.action} 
                className="font-Menu text-ui w-full"
                onMouseEnter={handleSelect}
                onMouseLeave={handleSelect}
                onClick={handleClick}
            >
                <b>{props.children}</b>
            </Link>
            :
            <button 
                className="font-Menu text-ui w-full"
                onMouseEnter={handleSelect}
                onMouseLeave={handleSelect}
                onClick={handleClick}
            >
                <b>{props.children}</b>
            </button>
            }
        </div>
	);
}