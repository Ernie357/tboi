/*
    File: BackgroundPlayer.tsx

    Purpose: A component that plays a video on the background of a page.

    Props: src - An optional string that represents the path to the desired music file to play.

                 If src is provided, that music source will play until the site volume is turned off
                 or until a different page is navigated to.

                 If src is not provided, the music associated with the site theme will play until 
                 the site volume is turned off, the site theme is switched, or a different page is
                 navigated to.

    Notes: The music will stop when navigating to a different page, switching to that page's
           music if there is a MusicPlayer component, or stopping altogether if not.
*/

"use client";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import getFileNameFromTheme from "@/inspectors/getFileNameFromTheme";
import { useEffect, useRef } from "react";

export default function BackgroundVideo(props: { src?: string, className?: string }) {
    const { siteSettings } = useSiteSettings();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            const newSrc = props.src ? props.src : `/videos/${getFileNameFromTheme(siteSettings.theme, '.mp4')}`;
            videoRef.current.pause(); 
            videoRef.current.src = newSrc; 
            videoRef.current.load(); 
            videoRef.current.play().catch((err) => {
                console.error("Video autoplay failed:", err);
            });
        }
    }, [siteSettings.theme, props.src]);

    return (
        <video 
            ref={videoRef}
            autoPlay 
            muted={siteSettings.sfxVolume <= 0} 
            playsInline 
            loop 
            className={`bg-black fixed h-screen w-screen ${props.className}`}
        >
            <source 
                src={props.src ? props.src : `/videos/${getFileNameFromTheme(siteSettings.theme, '.mp4')}`} 
                type="video/mp4">
            </source>
        </video>
    );
}