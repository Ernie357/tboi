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