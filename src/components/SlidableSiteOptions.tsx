/*
    File: SlidableSiteOptions.tsx

    Purpose: Wrapper for SiteOptions to make it slideable. This component will display a "small"
             SiteOptions that will stick out from the bottom right of the screen and will expand
             when clicked on.

    Props: className - Optional string for additional tailwind classes.
*/

import Slidable from "./Slidable";
import SiteOptions from "./SiteOptions";

export default function SlidableSiteOptions(props: { className?: string }) {
    return (
        <Slidable 
            direction="up" 
            defaultHeightClassName="h-[8vh]"
            expandedHeightClassName="h-[40vh]"
            className={`w-full sm:w-96 absolute bottom-0 right-1 ${props.className}`} 
        >
            <SiteOptions />
        </Slidable>
    );
}