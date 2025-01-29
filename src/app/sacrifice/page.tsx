// Index Page for general navigation

"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import MusicPlayer from "@/components/MusicPlayer";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";

export default function Sacrifice() {
    return (
        <div className="relative min-h-screen w-screen">
            <MusicPlayer />
            <BackgroundVideo src="/videos/sacrifice-room.mp4" />
            <HomeLink />
            <SlidableSiteOptions className="z-[100]" />
        </div>
    );
}