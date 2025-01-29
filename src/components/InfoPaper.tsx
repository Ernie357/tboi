/*
    File: InfoPaper.tsx

    Purpose: Optionally displays a title and a scrollable description on a paper image asset.

    Props: children - An optional React component to render 
           title - An optional string that displays a bold, underlined header for a title at the top of the paper if provided.
           description - An optional string that displays the string when provided in the middle of the paper, can scroll.
           className - An optional string to define or override styling on the overall component.
           titleClassName - An optional string to define or override styling on the title text.
           descriptionClassName - An optional string to define or override styling on the description text.
    
    Notes: If neither title nor description are provided, only the paper image will be displayed.
*/

export default function InfoPaper(props: { children?: React.ReactNode, className?: string }) {
    return (
        <div className={`z-10 flex items-center justify-center ${props.className}`}>
            <img 
                src="/images/ui/menu-paper-6.png" 
                alt="paper background" 
                className="z-0 absolute w-full h-full" 
            />
            <div className="info-text-container flex flex-col justify-center items-center gap-5 w-[90%] h-full z-10 text-center font-Menu overflow-y-auto overflow-x-hidden">
                {props.children}
            </div>
        </div>
    );
}