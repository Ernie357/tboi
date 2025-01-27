/*
    File: SettingsSlider.tsx

    Purpose: Displays a slider with 10 ticks that can define settings.

    Props: action - A function that takes a number 0-10 as parameter, this function will be called
                    with the number placement, left to right, 0 to 10, of the clicked on tick of the slider.
           defaultSliderValue - A number 0-10 that defines how many ticks should be highlighted by default.
           className - Optional string that defines additional tailwind classes.
*/

"use client";

import { useState } from "react";

export default function SettingsSlider(props: { action: (input: number) => void, defaultSliderValue: number, className?: string }) {
    const [sliderValue, setSliderValue] = useState<number>(props.defaultSliderValue);

    const reset = () => {
        setSliderValue(0);
        props.action(0);
    }

    const resetToDefault = () => {
        setSliderValue(props.defaultSliderValue);
    }

    const handleTickHover = (tickNumber: number) => {
        setSliderValue(tickNumber);
    }

    const handleTickClick = (tickNumber: number) => {
        if(tickNumber === props.defaultSliderValue) {
            reset();
        } else {
            props.action(tickNumber);
        }
    }

    const tickElements = Array.from( { length: 10 }).map((_, idx: number) => {
        return (
            <div
                onMouseOver={() => handleTickHover(idx + 1)}
                onClick={() => handleTickClick(idx + 1)}
                className="w-[15px]"
                key={idx}
            />
        );
    });

    return (
        <div 
            onMouseLeave={resetToDefault}
            className={`bg-slider-${sliderValue} bg-center bg-no-repeat bg-contain flex cursor-pointer ${props.className}`} 
        >
            {tickElements}
        </div>
    );
}