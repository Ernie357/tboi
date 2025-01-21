"use client";

import SelectableMenuOption from "./SelectableMenuOption";

export default function LongList(props: { title?: string, items: string[], className?: string, action: string | ((item: string) => void) }) {

    const listElements = props.items.map((item: string) => {
        return (
            <SelectableMenuOption 
                key={item} 
                action={props.action} 
                disableCursor>{item}
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
            <div className={`flex flex-col items-center gap-[10vw] sm:gap-[2vw] w-[70%] ${props.title ? 'h-[70%]' : 'h-[85%]'} z-10 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
                {listElements}
            </div>
        </div>
    );
}