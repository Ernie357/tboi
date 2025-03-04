/*
    File: HomeLink.tsx

    Purpose: Reusable Link that directs the user back to the root / 

    Props: className - An optional string to define or override styling on the overall component.
           isMuted - An optional boolean to define whether or not the page sound will play
                     when the link is clicked, defaults to false if not provided.
*/

"use client";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import useSFX from "@/hooks/useSFX";
import Link from "next/link";

export default function HomeLink(props: { className?: string, isMuted?: boolean }) {
    const { siteSettings } = useSiteSettings();
    const paperSound = useSFX('/sfx/paper-out.wav');

    return (
        <div className={`z-[500] absolute top-1 right-1 flex flex-col items-center justify-center w-24 h-24 sm:w-36 sm:h-40 bg-menu-paper-5 bg-center bg-contain bg-no-repeat ${props.className}`}>
            <Link href='/' className="w-full h-full absolute" onClick={() => siteSettings.sfxVolume > 0 && paperSound()}></Link>
            <p className="text-xl sm:text-3xl font-Menu text-ui text-center">Home</p>
            <div className="w-4/6 h-4/6 bg-menu-house bg-center bg-contain bg-no-repeat" />
        </div>
    );
}