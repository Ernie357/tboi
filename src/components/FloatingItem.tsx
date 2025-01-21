import Image from "next/image";
export default function FloatingItem(props: { imageFileName: string, className?: string }) {
    return (
        <div className={`relative flex flex-col justify-center items-center ${props.className}`}>
            <Image 
                className="animate-up-and-down relative top-[10px] lg:top-[20px] w-[75px] h-[75px] lg:w-[100px] lg:h-[100px] xl:w-[125px] xl:h-[125px]"
                src={`/images/items/${props.imageFileName}`} 
                alt={`${props.imageFileName}`} 
                width={50} 
                height={50} 
                
            />
            <Image 
                className="lg:min-w-[125px] xl:min-w-[150px] min-w-[100px]"
                src="/images/misc/item-pedestal-with-shadow.png" 
                alt="Item Pedestal" 
                width={50} 
                height={50} 
            />
        </div>
    );
}