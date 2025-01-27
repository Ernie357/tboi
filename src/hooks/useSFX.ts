/*
    File: useSFX.tsx

    Purpose: A custom hook for playing sound effects. Ensures correct volume. Utilizes useSound hook.

    Props: src - String that represents the path to the desired sound file to play.
*/

"use client";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import useSound from "use-sound";

export default function useSFX(src: string) {
    const { siteSettings } = useSiteSettings();
    const [sound] = useSound(src, { volume: siteSettings.sfxVolume });
    return sound;
}