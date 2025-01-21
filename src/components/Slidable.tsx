"use client";

import useSound from "use-sound";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import { useState } from "react";

export default function Slidable(props: { title?: string, defaultHeightClassName: string, expandedHeightClassName: string, direction: string, children: React.ReactNode, className?: string }) {
    const { siteSettings } = useSiteSettings();

    const [paperInSound] = useSound('/sfx/paper-in.wav');
    const [paperOutSound] = useSound('/sfx/paper-out.wav');

    const [expanded, setExpanded] = useState<boolean>(false);


    const handleExpand = () => {
        setExpanded(prev => {
            if(siteSettings.sfxVolume > 0) {
                prev ? paperOutSound() : paperInSound();
            }
            return !prev;
        });
    }

    return (
        <div 
            className={`transition-all duration-300
            ${expanded ? props.expandedHeightClassName : props.defaultHeightClassName} ${props.direction === 'down' && 'rotate-[180deg]'} overflow-hidden ${props.className}`}
        >
            <div 
                onClick={handleExpand} 
                className={`flex items-center justify-center z-50 cursor-pointer w-full h-[8vh] absolute top-0`} 
            >
                {props.title && <p className={`title font-Menu ${props.direction === 'down' && 'rotate-[180deg]'}`}><b>{props.title}</b></p>}
            </div>
            <div className={`${props.direction === 'down' && 'slidable'}`}>
                {props.children}
            </div>
        </div>
    );
}