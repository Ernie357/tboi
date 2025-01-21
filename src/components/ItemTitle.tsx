/*
    File: ItemTitle.tsx

    Purpose: Displays the title of an item with the black streak asset behind it.
             Clicking on it redirects to an info page for the item.

    Props: children - A string that represents the title of the item to display.
           subtitle - An optional string that represents the subtitle of the item to display.
           className - An optional string to define or override styling on the overall component.
    
    Notes: Parenthesis are used to differentiate between similar items (like Odd Mushroom)
           when searching the JSON files, so parenthesis and the content within are removed 
           from the display of the title via regex to make it more authentic to the game.
*/

export default function ItemTitle(props: { children: string, subtitle?: string, className?: string }) {
    return (
        <div className={`flex flex-col justify-center items-center ${props.className}`}>
            <div className={`relative bg-item-streak bg-center bg-no-repeat bg-cover sm:bg-cover flex items-center justify-center w-80 h-12 sm:w-[500px] sm:h-20 md:h-28 md:w-[650px] lg:h-32 lg:w-[800px] 2xl:h-44 2xl:w-[1200px]`}>
                <p className={`text-center text-white font-Upheaval relative bottom-[0.4vw] ${props.children.length > 28 ? 'text-[3vh]' : 'text-[5vw] lg:text-[8vh]'}`}>{props.children.replace(/\(.*\)/g, '')}</p>
                { props.subtitle && <p className="z-50 absolute bottom-[5px] sm:bottom-[10px] md:bottom-[17px] 2xl:bottom-[30px] text-stroke-black text-stroke-0.5 text-white font-Tempesta text-2xs sm:text-sm md:text-base lg:text-xl 2xl:text-2xl">{props.subtitle}</p> }
            </div>
        </div>
    );
}