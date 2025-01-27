/*
    File: SettingsSlider.tsx

    Purpose: Displays a slider with 10 ticks that can define settings.

    Props: action - A function that takes a number 0-10 as parameter, this function will be called
                    with the number placement, left to right, 0 to 10, of the clicked on tick of the slider.
           defaultSliderValue - A number 0-10 that defines how many ticks should be highlighted by default.
           className - Optional string that defines additional tailwind classes.

    // Note: Tailwind should not and cannot by default generate dynamic class names, such as
             'bg-slider-${sliderValue}', thus the classNameMap is necessary in this case.
*/

import { useState } from "react";

export default function FullItemDescription(props: { className?: string }) {
    return (
        <div>

        </div>
    );
}