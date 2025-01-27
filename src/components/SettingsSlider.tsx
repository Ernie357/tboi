/*
    File: SettingsSlider.tsx

    Purpose: Displays a slider with 10 ticks that can define settings.

    Props: action - A function that takes a number 0-10 as parameter, this function will be called
                    with the number placement, left to right, 0 to 10, of the clicked on tick of the slider.
           defaultSliderValue - A number 0-10 that defines how many ticks should be highlighted by default.
           className - Optional string that defines additional tailwind classes.
*/

"use client";

import { useMemo, useState } from "react";

export default function SettingsSlider(props: { action: (input: number) => void, defaultSliderValue: number, className?: string }) {
    const [sliderValue, setSliderValue] = useState<number>(props.defaultSliderValue);

    const classNameMap: { [key: number]: string } = {
            0: 'bg-slider-0',
            1: 'bg-slider-1',
            2: 'bg-slider-2',
            3: 'bg-slider-3',
            4: 'bg-slider-4',
            5: 'bg-slider-5',
            6: 'bg-slider-6',
            7: 'bg-slider-7',
            8: 'bg-slider-8',
            9: 'bg-slider-9',
            10: 'bg-slider-10',
    };

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
            className={`${classNameMap[sliderValue] || 'bg-slider-0'} bg-center bg-no-repeat bg-contain flex cursor-pointer ${props.className}`}
        >
        {tickElements}
        </div>
    );
}