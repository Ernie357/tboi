/*
    File: LongList.tsx

    Purpose: Displays a list of SelectableMenuOption components on a longer Binding of Isaac
             todo list background asset

    Props: title - An optional string that displays a bold, underlined header for a title at the top of the paper if provided.
           description - An optional string that displays the string when provided in the middle of the paper, can scroll.
           className - An optional string to define or override styling on the overall component.
           titleClassName - An optional string to define or override styling on the title text.
           descriptionClassName - An optional string to define or override styling on the description text.
    
    Notes: If neither title nor description are provided, only the paper image will be displayed.
*/

export default function InfoPaper(props: { title?: string, description?: string, className?: string, titleClassName?: string, descriptionClassName?: string }) {
    return (
        <div className={`z-10 flex items-center justify-center ${props.className}`}>
            <img 
                src="/images/ui/menu-paper-6.png" 
                alt="paper background" 
                className="z-0 absolute w-full h-full" 
            />
            <div className="info-text-container flex flex-col justify-center items-center gap-5 w-[90%] h-full z-10 text-center font-Menu overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {props.title && <p className={`${props.titleClassName || 'sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]'}`}><b><u>{props.title}</u></b></p>}
                {props.description && <p className={`${props.descriptionClassName || 'sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]'}`}>{props.description}</p>}
            </div>
        </div>
    );
}