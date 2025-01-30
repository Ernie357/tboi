import Item from "@/types/item";
import { useState } from "react";

export default function ItemImage({item, className}: { item: Item, className?: string }) {
    const [hover, setHover] = useState<boolean>(false);

    const handleHover = () => {
        setHover(prev => !prev);
    }

    return (
        <div 
            className={`${className ? className : 'relative'}`} 
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover} 
            onFocus={handleHover}
        >
            <div 
                className={`
                    ${hover ? 'flex' : 'hidden'} justify-center items-center 
                    font-Tempesta text-ui text-lg
                    absolute top-[-50px] left-[-150px] p-2
                    bg-white border-black border-4
                    w-[400px] 
                    drop-shadow-black drop-shadow-2xl
                    z-[500]
                `}
            >
                <p><b>{item.name}:</b> {item.description}</p>
            </div>
            <img 
                src={`${item.name === "Kid's Drawing" ? '/images/trinkets/' : '/images/items/'}${item.imagePath}`}
                alt={item.name}
                key={item.id}
                className="w-[10vw] sm:w-[5vw]"
            />
        </div>
    );
}