"use client";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSound from "use-sound";

export default function SelectableMenuOption(props: { children: string, action: string | ((item: string) => void), className?: string, disableCursor?: boolean, hoverText?: string }) {
    const { siteSettings } = useSiteSettings();

    const [isSelected, setIsSelected] = useState<boolean>(false);
    
    const [paperSound] = useSound('/sfx/paper-in.wav');

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