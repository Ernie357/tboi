/*
    File: MusicPlayer.tsx

    Purpose: A non-visual component that plays music on a page. Utilizes useSound hook.

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
import { useEffect, useState } from "react";
import useSound from "use-sound";

export default function MusicPlayer(props: { src?: string }) {
    const { siteSettings } = useSiteSettings();

    const [prevTheme, setPrevTheme] = useState<string>(siteSettings.theme);

    const [music, { stop }] = useSound(props.src ? props.src : `/music/${getFileNameFromTheme(siteSettings.theme, '.ogg')}`, { loop: true, volume: 0.4 });

    useEffect(() => {
        if(prevTheme === siteSettings.theme && siteSettings.musicVolume > 0 && props.src) {
            music();
        } else if(!props.src && siteSettings.musicVolume > 0) {
            music();
        }
        siteSettings.musicVolume <= 0 && stop();
        setPrevTheme(siteSettings.theme);
    }, [siteSettings.musicVolume, siteSettings.theme, music]);

    useEffect(() => {
        return () => stop();
    }, [stop]);

    return null;
}