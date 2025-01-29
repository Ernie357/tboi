/*
    File: ResponsiveLongList.tsx

    Purpose: Displays a general long list that becomes slidable as screen gets smaller,
             will go on the left of the screen by default.

    Props: title - An optional string that displays a bold header for a title at the top of the list if provided.
           items - An array of strings that represents the text of each option from up to down visually.
           selectedItem - Optional string to define which item should be underlined to show it's selected.
           className - An optional string to define or override styling on the overall component.
           action - If action is given as a string, the options will be Links to that string as href.
                    If a action is a function, the options will call that function when clicked
                    with the text of the option passed as parameter.
    
    Notes: This component doesn't really work with string as action since all the options
           will have that same href. ClassName also currently does nothing here.
*/

import LongList from "./LongList";
import Slidable from "./Slidable";

export default function ResponsiveLongList(props: { title?: string, items: string[], className?: string, selectedItem?: string, action: string | ((item: string) => void) }) {
    return (
        <>
            <Slidable
                direction="up" 
                defaultHeightClassName="h-[6vh]" 
                expandedHeightClassName="h-[75vh]"
                title={props.title}
                className={`
                    absolute left-0 bottom-0 w-full z-[100] [&>div>.title]:text-[4vw]
                    sm:w-[350px]
                    hidden
                    sm:flex sm:justify-center sm:items-center
                    lg:hidden
                `}
            >
                <LongList 
                    action={props.action} 
                    items={props.items} 
                    className={`[&>img]:w-full [&>img]:top-0 [&>img]:left-0 [&>div]:w-[225px] [&>div]:mt-10 [&>div]:pr-0 [&>div]:gap-10 text-2xl w-full h-[75vh]`}
                    selectedItem={props.selectedItem}
                />
            </Slidable>
            <Slidable
                direction="down" 
                defaultHeightClassName="h-[50px]" 
                expandedHeightClassName="h-[80vh]"
                title={props.title}
                className={`
                    absolute left-0 top-0 w-[350px] z-[100] [&>div>.title]:text-[6vw]
                    sm:hidden
                `}
            >
                <LongList 
                    action={props.action} 
                    items={props.items} 
                    className={`[&>img]:w-full [&>img]:top-0 [&>img]:left-0 text-[38px] w-full h-[75vh] [&>div]:mt-10`}
                    selectedItem={props.selectedItem}
                />
            </Slidable>
            <LongList 
                action={props.action} 
                items={props.items} 
                className={`[&>img]:w-[90%] hidden lg:flex z-[100] [&>div]:text-[2vw] [&>div]:mt-10 [&>div]:mr-10 [&>div]:pr-0 w-[55vh] h-[90vh] absolute left-0`}
                selectedItem={props.selectedItem}
                title={props.title}
            />
        </>
    );
}