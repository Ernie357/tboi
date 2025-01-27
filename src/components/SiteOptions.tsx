/*
    File: SiteOptions.tsx

    Purpose: Displays the global site options like sfx and music volume and theme

    Props: className - Optional string that defines additional tailwind classes.
           type - Optional string that can either be 'big' or 'small' in value. 
                  Defines general size of menu. Defaults to 'small' if not provided.
                  The big site options is generally more suited for desktop while
                  the small the is more suited for mobile.
*/

"use client";

import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import SettingsSlider from "./SettingsSlider";

export default function SiteOptions({ className, type = 'small' }: { className?: string, type?: 'big' | 'small' }) {
    const { siteSettings, setSiteSettings } = useSiteSettings();

    const handleMusicChange = (value: number) => {
        setSiteSettings(prev => {
            return {
                ...prev, 
                musicVolume: value / 10
            }
        });
    }

    const handleSfxChange = (value: number) => {
        setSiteSettings(prev => {
            return {
                ...prev,
                sfxVolume: value / 10
            }
        });
    }

    const handleThemeChange = (event: any) => {
        setSiteSettings(prev => {
            return {
                ...prev,
                theme: event.target.value
            }
        });
    }

	return (
        <div className={`flex flex-col items-center flex w-full bg-options-menu bg-center bg-contain bg-no-repeat ${className}
        ${type === 'big' ? 'h-[30vw] gap-[2vw] text-[2vw]' : 'gap-4 text-3xl h-[40vh] absolute top-0 left-0'} `}>
            <div className={`flex items-center justify-between ${type === 'big' ? 'w-[18vw] mt-[8vw]' : 'w-[50%] mt-20'}`}>
                <p className="font-Menu">SFX</p>
                <SettingsSlider 
                    action={handleSfxChange} 
                    defaultSliderValue={siteSettings.sfxVolume * 10} 
                    className={`relative bottom-[0.8vh] ${type === 'big' ? 'w-[8vw] h-[4vw]' : 'w-16 h-12'}`}
                />
            </div>
            <div className={`flex items-center justify-between ${type === 'big' ? 'w-[18vw]' : 'w-[50%]'}`}>
                <p className="font-Menu">Music</p>
                <SettingsSlider 
                    action={handleMusicChange} 
                    defaultSliderValue={siteSettings.musicVolume * 10}
                    className={`${type === 'big' ? 'w-[8vw] h-[4vw]' : 'w-16 h-12'}`} 
                />
            </div>
            <div className={`flex items-center justify-between ${type === 'big' ? 'w-[18vw]' : 'w-[60%]'}`}>
                <p className="font-Menu">Theme</p>
                <select value={siteSettings.theme} onChange={handleThemeChange} className={`${type === 'big' ? 'text-[1.3vw] w-[8vw]' : 'text-sm w-24'} font-Menu bg-transparent border-black border-4 shadow shadow-black [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-scroll max-h-[10vh]`}>
                    <option value="Basement">Basement</option>
                    <option value="Cellar">Cellar</option>
                    <option value="Burning Basement">Burning Basement</option>
                    <option value="Downpour">Downpour</option>
                    <option value="Dross">Dross</option>
                    <option value="Caves">Caves</option>
                    <option value="Catacombs">Catacombs</option>
                    <option value="Flooded Caves">Flooded Caves</option>
                    <option value="Mines">Mines</option>
                    <option value="Ash Pit">Ash Pit</option>
                    <option value="Depths">Depths</option>
                    <option value="Dank Depths">Dank Depths</option>
                    <option value="Necropolis">Necropolis</option>
                    <option value="Mausoleum">Mausoleum</option>
                    <option value="Gehenna">Gehenna</option>
                    <option value="Womb">Womb</option>
                    <option value="Scarred Womb">Scarred Womb</option>
                    <option value="Hush">Hush</option>
                    <option value="Cathedral">Cathedral</option>
                    <option value="Sheol">Sheol</option>
                    <option value="Chest">Chest</option>
                    <option value="Dark Room">Dark Room</option>
                    <option value="Void">Void</option>
                    <option value="Corpse">Corpse</option>
                    <option value="Home">Home</option>
                </select>
            </div>
        </div>
	);
}