// Page for displaying the site's general information and credits

"use client";

import HomeLink from "@/components/HomeLink";

export default function InfoAndCredits() {
    return (
        <div className="p-10 pt-44 sm:pt-10 min-h-screen max-w-screen bg-black font-Menu text-white text-[4vw] text-center flex flex-col justify-center items-center gap-24">
            <HomeLink />
            <p>Website Author: John Marseglia</p>
            <p>
                This website is an easy to use tool for finding, in my opinion, the most frequently
                searched Isaac information / mechanics needed during a run
            </p>
            <p>
                For anything this site does not offer, visit&nbsp; 
                <a href="https://www.tboi.com/">
                    <u>Platinum God (tboi.com)</u>
                </a> 
                &nbsp;instead; it has a fantastic interface for item searching, seeing how to unlock
                things, transformations, sacrifice rooms, etc.
            </p>
            <p>
                Team Meat UI font from user Ottomated on&nbsp;
                <a 
                    href="https://moddingofisaac.com/mod/1701/team-meat-font"
                >
                    <u>The Modding of Isaac</u>
                </a>
            </p>
            <p>
                Info for Pandora's Box and Birthright from&nbsp;
                <a 
                    href="https://bindingofisaacrebirth.fandom.com/wiki/Binding_of_Isaac:_Rebirth_Wiki"
                >
                    <u>The Binding of Isaac Wiki</u>
                </a>&nbsp;at&nbsp; 
                <a 
                    href="https://www.fandom.com/"
                >
                    <u>Fandom</u>
                </a>&nbsp;and is licensed under the&nbsp; 
                <a 
                    href="https://creativecommons.org/licenses/by-sa/3.0/"
                >
                    <u>Creative Commons Attribution-Share Alike License</u>
                </a>
            </p>
            <p>
                All other assets belong to&nbsp;
                <a
                    href="https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/"
                >
                    <u>The Binding of Isaac: Repentance</u>
                </a>, Nicalis, Inc., and Edmund McMillen
            </p>
            <p>
                Full game credits can be found&nbsp;
                <a href="https://www.mobygames.com/game/161590/the-binding-of-isaac-repentance/credits/windows/">
                    <u>here</u>
                </a>
            </p>
            <p>Please report bugs and anything you would like to see added to the email isaacquicklookup@gmail.com</p>
        </div>
    );
}