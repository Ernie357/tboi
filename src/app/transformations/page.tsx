// Page for displaying information for the item Birthright

"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import InfoPaper from "@/components/InfoPaper";
import MusicPlayer from "@/components/MusicPlayer";
import ResponsiveLongList from "@/components/ResponsiveLongList";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import defaultHandleInfoChange from "@/helpers/defaultHandleInfoChange";
import defaultHandleUpOrDown from "@/helpers/defaultHandleUpOrDown";
import useSFX from "@/hooks/useSFX";
import getItemsFromTag from "@/inspectors/getItemsFromTag";
import { useEffect, useMemo, useState } from "react";

export default function Transformations() {
    const { siteSettings } = useSiteSettings();

    const infoJSON: { [key: string]: { tag: string, description: string } } = {
        "Guppy": { tag: 'guppy', description: 'Grants flight and adds a 66% chance to spawn a Blue Fly when a tear hits an enemy.' },
        "Beelzebub": { tag: 'fly', description: 'Grants flight. Converts small enemy flies into Blue Flies. (in Repentance and Repentance+) Larger flies become friendly and follow Isaac between rooms.' },
        "Fun Guy": { tag: 'mushroom', description: '+1 Red Heart Container.' },
        "Seraphim": { tag: 'angel', description: 'Grants flight and gives +3 Soul Hearts.' },
        "Bob": { tag: 'bob', description: 'Isaac leaves a trail of green poisonous creep as he walks that deals 6 damage per second.' },
        "Spun": { tag: 'syringe', description: 'Gives +2 damage and +0.15 speed, and spawns a random pill upon transformation.' },
        "Yes Mother?": { tag: 'mom', description: "Isaac gains a stationary knife that trails directly behind him. It synergizes like Mom's Knife would." },
        "Conjoined": { tag: 'baby', description: "Adds two tumors that fire diagonally from Isaac's head. -0.3 Damage, -0.3 Tears." },
        "Leviathan": { tag: 'devil', description: 'Grants flight and gives +2 Black Hearts.' },
        "Oh Crap": { tag: 'poop', description: 'Whenever a pile of poop is destroyed, restores half of a red heart.' },
        "Bookworm": { tag: 'book', description: 'Roughly 25% of the time, Isaac shoots an extra tear, like 20/20.' },
        "Adult": { tag: 'adult', description: 'Requires 3 Puberty pills to be used. +1 Red Heart container.' },
        "Spider Baby": { tag: 'spider', description: 'Spawns a spider familiar that applies random status effects to enemies it comes in contact with.' },
        "Stompy": { tag: 'stompy', description: 'Requires 3 items that make Isaac bigger (including One Makes You Larger pill). Isaac can break obstacles by walking over them.' },
        "Super Bum": { tag: 'bum', description: "Requires Bum Friend, Key Bum, and Dark Bum to be collected. Replaces Bum Friend, Dark Bum, and Key Bum with Super Bum. This bum collects any of the other beggars' pickups, and offers twice the rewards." }
    };

    const leftSelectSound = useSFX('/sfx/left-select.wav');
    const rightSelectSound = useSFX('/sfx/right-select.wav');

    const [selectIdx, setSelectIdx] = useState<number>(0);
    const [info, setInfo] = useState<{ name: string, tag: string, description: string }>({ name: 'Guppy', tag: 'guppy', description: infoJSON['Guppy'].description });
    const [itemDataJSON, setItemDataJSON] = useState<any>(null);
    const [itemMetaDataJSON, setItemMetaDataJSON] = useState<any>(null);
	const [itemStringDataJSON, setItemStringDataJSON] = useState<any>(null);

    const keys = useMemo(() => Object.keys(infoJSON), []);

    const handleUpOrDown = (isDown: boolean) => {
        defaultHandleUpOrDown(isDown, selectIdx, setSelectIdx, 0, keys.length - 1, siteSettings.sfxVolume, leftSelectSound, rightSelectSound);
    }

    const handleInfoChange = (item: string) => {
        defaultHandleInfoChange(item, keys, setSelectIdx);
    }

    useEffect(() => {
		fetch('/data/items.json').then((res: Response) => res.json()).then((data: any) => setItemDataJSON(data));
        fetch('/data/items.metadata.json').then((res: Response) => res.json()).then((data: any) => setItemMetaDataJSON(data));
        fetch('/data/stringtable.json').then((res: Response) => res.json()).then((data: any) => setItemStringDataJSON(data));
	}, []);

    useEffect(() => {
        const key = keys[selectIdx] ? keys[selectIdx] : keys[0];
        if(!keys[selectIdx]) {
            setSelectIdx(0);
        }
        setInfo({
            name: key,
            tag: infoJSON[key].tag,
            description: infoJSON[key].description
        });
    }, [selectIdx]);

    const itemsFromTag = useMemo(() => {
        if(!itemDataJSON || !itemMetaDataJSON || !itemStringDataJSON) {
            return [];
        }
        return getItemsFromTag(info.tag, itemDataJSON, itemMetaDataJSON, itemStringDataJSON);
    }, [info.tag, itemDataJSON, itemMetaDataJSON, itemStringDataJSON]);

    const itemElements = itemsFromTag.map(item => {
        return (
            <img 
                src={`${item.name === "Kid's Drawing" ? '/images/trinkets/' : '/images/items/'}${item.imagePath}`}
                alt={item.name}
                key={item.id}
                className="w-[100px]"
            />
        );
    });

    return (
        <div tabIndex={0} onKeyDown={(event: any) => {
            if(event.key === 'ArrowLeft') {
                handleUpOrDown(true);
            } else if(event.key === 'ArrowRight') {
                handleUpOrDown(false);
            }
        }} className="relative bg-black bg-center bg-no-repeat bg-contain min-h-screen min-w-screen flex justify-center items-center">
            <MusicPlayer />
            <BackgroundVideo className="lg:left-[12vw]" />
            <HomeLink />
            <UpAndDownButtons 
                clickFunction={handleUpOrDown} 
                muted 
                className={`
                    z-[100] absolute
                    bottom-[15vh] ml-0 gap-[20vw]
                    sm:bottom-[30vh] sm:ml-0 sm:gap-[20vw]
                    lg:bottom-[25vh] lg:ml-[25vw] lg:gap-[15vw]
                    xl:bottom-[20vh] xl:ml-0 xl:gap-[20vw] xl:ml-[25vw]
                    2xl:ml-[25vw]
                `}
            />
            <ResponsiveLongList 
                title="Transformations"
                items={keys}
                selectedItem={info.name}
                action={handleInfoChange}
            />
            <SlidableSiteOptions className="z-[100]"/>
            <InfoPaper 
                className={`
                    relative [&>.info-text-container]:justify-start [&>.info-text-container]:h-[75%] [&>.info-text-container]:gap-0  
                    w-[75vw] h-[30vh] mb-[30vh]
                    sm:w-[75vw] sm:h-[30vh]
                    md:w-[60vw] md:h-[30vh] md:mb-44
                    lg:w-[50vw] lg:ml-[25vw]
                    xl:ml-[25vw]
                    2xl:h-[50vh] 2xl:ml-[25vw]
                `}
            >
                <p className={`sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]`}><b><u>{info.name}</u></b></p>
                <div className={`${'flex flex-wrap justify-center gap-10'}`}>
                    {itemElements}
                </div>
                <p className={`sm:text-[3vw] md:text-[2vw] lg:text-[2vw]`}>{info.description}</p>
            </InfoPaper>
        </div>
    );
}