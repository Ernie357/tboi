/*
    File: BackgroundVideo.tsx

    Purpose: A component that plays a video on the background of a page.

    Props: src - An optional string that represents the path to the desired video file to play.

                 If src is provided, that video source will play until a different page is navigated to.

                 If src is not provided, the video associated with the site theme will play until 
                 the site theme is switched or a different page is navigated to.

           className - Additional tailwind utility classes to be appended to the overall container.
*/

"use client";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import { useEffect, useRef } from "react";

export default function BackgroundVideo(props: { src?: string, className?: string }) {
    // Unoptimized:
    const videoLinkMap: { [key: string]: string } = {
        "Basement": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540809/tboi/h8uoaxwgmwfyq0krecq0.mp4",
        "Cellar": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540833/tboi/jcnfww1wjwl7fcis0rok.mp4",
        "Burning Basement": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540968/tboi/gxxebdqqtvmq9ft3fs7e.mp4",
        "Downpour": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540960/tboi/aqehslxg4lnygjdcsfe8.mp4",
        "Dross": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540945/tboi/gd9rmmeg7x02qa0vmff9.mp4",
        "Caves": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540826/tboi/dj7ph6lgduic4tgsjm8l.mp4",
        "Catacombs": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540670/tboi/dovosnj5wjbqwvtmhmkl.mp4",
        "Flooded Caves": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540847/tboi/xqlv6tezvfumcersathg.mp4",
        "Mines": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540791/tboi/ieagbjl8f3th1tgdt8dd.mp4",
        "Ash Pit": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540954/tboi/iysmnaytqr0s2rkzzlbs.mp4",
        "Depths": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540872/tboi/mxqjuzrcdbqa3seq98ve.mp4",
        "Dank Depths": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540834/tboi/dddpcyinxkmalmp1yukt.mp4",
        "Necropolis": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540790/tboi/nbdiaqzjckvqno6omkyf.mp4",
        "Mausoleum": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540929/tboi/ljnkd2houia8ocpkgq6k.mp4",
        "Gehenna": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540880/tboi/dzpqygfkwcsm9vr6sevt.mp4",
        "Womb": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540962/tboi/ykkqr3wiwvfjnjdz1ymq.mp4",
        "Scarred Womb": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540800/tboi/alxopfi0ucmkizxpr2fl.mp4",
        "Hush": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540870/tboi/xvullycu43utzvbct5od.mp4",
        "Cathedral": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540883/tboi/lylai9l6cigqaff71vuo.mp4",
        "Sheol": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540800/tboi/hkamcxxw4zhw6cjzyrhp.mp4",
        "Chest": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540710/tboi/xanh5lxet66hxibx7vzo.mp4",
        "Dark Room": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540836/tboi/sotof83eematp5svxhal.mp4",
        "Void": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540809/tboi/h8uoaxwgmwfyq0krecq0.mp4",
        "Corpse": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540865/tboi/ayirkoeuyb3z9cbmrbqy.mp4",
        "Home": "https://res.cloudinary.com/dcf1kxfqb/video/upload/v1737540752/tboi/cc82qs9n3xy2pw337mqf.mp4"
    };

    /* Optimized:
    const videoLinkMap: { [key: string]: string } = {
        "Basement": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/h8uoaxwgmwfyq0krecq0",
        "Cellar": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/jcnfww1wjwl7fcis0rok",
        "Burning Basement": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/gxxebdqqtvmq9ft3fs7e",
        "Downpour": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/aqehslxg4lnygjdcsfe8",
        "Dross": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/gd9rmmeg7x02qa0vmff9",
        "Caves": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/dj7ph6lgduic4tgsjm8l",
        "Catacombs": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/dovosnj5wjbqwvtmhmkl",
        "Flooded Caves": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/xqlv6tezvfumcersathg",
        "Mines": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/ieagbjl8f3th1tgdt8dd",
        "Ash Pit": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/iysmnaytqr0s2rkzzlbs",
        "Depths": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/mxqjuzrcdbqa3seq98ve",
        "Dank Depths": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/dddpcyinxkmalmp1yukt",
        "Necropolis": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/nbdiaqzjckvqno6omkyf",
        "Mausoleum": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/ljnkd2houia8ocpkgq6k",
        "Gehenna": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/dzpqygfkwcsm9vr6sevt",
        "Womb": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/ykkqr3wiwvfjnjdz1ymq",
        "Scarred Womb": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/alxopfi0ucmkizxpr2fl",
        "Hush": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/xvullycu43utzvbct5od",
        "Cathedral": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/lylai9l6cigqaff71vuo",
        "Sheol": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/hkamcxxw4zhw6cjzyrhp",
        "Chest": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/xanh5lxet66hxibx7vzo",
        "Dark Room": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/sotof83eematp5svxhal",
        "Void": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/h8uoaxwgmwfyq0krecq0",
        "Corpse": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/ayirkoeuyb3z9cbmrbqy",
        "Home": "https://res.cloudinary.com/dcf1kxfqb/video/upload/f_auto:video,q_auto/v1/tboi/cc82qs9n3xy2pw337mqf"
    };
    */

    const { siteSettings } = useSiteSettings();
    
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            const newSrc = props.src ? props.src : videoLinkMap[siteSettings.theme];
            videoRef.current.pause(); 
            videoRef.current.src = newSrc; 
            videoRef.current.load(); 
            videoRef.current.play().catch((err) => {
                console.error("Video autoplay failed:", err);
            });
        }
    }, [siteSettings.theme, props.src]);

    console.log(siteSettings.theme);

    return (
        <video 
            ref={videoRef}
            autoPlay 
            muted={siteSettings.sfxVolume <= 0} 
            playsInline 
            loop 
            className={`bg-black fixed h-screen w-screen ${props.className}`}
        >
        </video>
    );
}