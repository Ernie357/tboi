/*
    File: LongList.tsx

    Purpose: Displays a list of SelectableMenuOption components on a longer Binding of Isaac
             todo list background asset

    Props: title - An optional string that displays a bold header for a title at the top of the list if provided.
           items - An array of strings that represents the text of each option from up to down visually.
           selectedItem - Optional string to define which item should be underlined to show it's selected.
           className - An optional string to define or override styling on the overall component.
           action - If action is given as a string, the options will be Links to that string as href.
                    If a action is a function, the options will call that function when clicked
                    with the text of the option passed as parameter.
    
    Notes: This component doesn't really work with string as action since all the options
           will have that same href.
*/

"use client";

import useSFX from "@/hooks/useSFX";
import SelectableMenuOption from "./SelectableMenuOption";

export default function LongList(props: { title?: string, items: string[], className?: string, selectedItem?: string, action: string | ((item: string) => void) }) {
    const paperSound = useSFX('/sfx/paper-in.wav');

    const listElements = props.items.map((item: string) => {
        return (
            <SelectableMenuOption 
                key={item} 
                action={props.action} 
                clickSound={paperSound}
                disableCursor
                className={`${props.selectedItem && props.selectedItem === item && 'underline'}`}
            >
                {item}
            </SelectableMenuOption>
        );
    });

    return (
        <div className={`flex justify-center items-center ${props.className}`}>
            <img 
                src='/images/ui/todo.png' 
                alt='paper background' 
                className="z-0 absolute"
            />
            {props.title && <p className="title absolute top-[5vh] text-[calc(100%+30px)] font-Menu"><b><u>{props.title}</u></b></p>}
            <div className={`flex flex-col items-center gap-[10vw] sm:gap-[2vw] w-[70%] ${props.title ? 'h-[70%]' : 'h-[85%]'} z-10 overflow-y-auto overflow-x-hidden`}>
                {listElements}
            </div>
        </div>
    );
}