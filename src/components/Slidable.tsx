/*
    File: Slidable.tsx

    Purpose: Makes the child component able to be clicked on to slide fully onto the page.
             Initially, the child component will be mostly off the page with the top or bottom
             sticking out.

    Props: title - An optional string that displays a bold title header on the visible part of the component.
           defaultHeightClassName - A string that represents the tailwind height utility class when the component
                                    is off the page, essentially defines how far the component sticks out when
                                    not expanded, Example: h-[10vh]
           defaultHeightClassName - A string that represents the tailwind height utility class when the component
                                    is on the page, essentially defines how far the component sticks out when
                                    expanded, Example: h-[10vh]
           direction - A string that defines what direction the component will move when clicked on.
           children - The React component to be made slidable.
           className - Optional string for additional tailwind classes.
    
    Notes: This component only currently supports "up" and "down" as directions.
*/

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