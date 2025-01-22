/*
    File: Floating.tsx

    Purpose: Displays an item pedestal with a shadow on the pedestal and an item png that
             floats up and down on top of it

    Props: imageFileName - The string path to the name of the item image file, this should not
                           include any prefixing folders and should include the extension.
                           Example: "collectibles_001_thesadonion.png"
           className - An optional string to define or override styling on the overall component.
*/

export default function FloatingItem(props: { imageFileName: string, className?: string }) {
    return (
        <div className={`relative flex flex-col justify-center items-center ${props.className}`}>
            <img
                className="animate-up-and-down relative top-[10px] lg:top-[20px] w-[75px] md:w-[70px] lg:w-[80px] xl:w-[100px] 2xl:w-[125px]"
                src={`/images/items/${props.imageFileName}`} 
                alt={`${props.imageFileName}`} 
            />
            <img
                className="w-[20vw] sm:w-[12vw] md:w-[10vw] lg:w-[8vw]"
                src="/images/misc/item-pedestal-with-shadow.png" 
                alt="Item Pedestal" 
            />
        </div>
    );
}