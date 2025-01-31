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
import characterInfo from "@/defaultObjects/characterInfo";
import defaultBirthrightInfo from "@/defaultObjects/defaultBirthrightInfo";
import defaultHandleInfoChange from "@/helpers/defaultHandleInfoChange";
import defaultHandleUpOrDown from "@/helpers/defaultHandleUpOrDown";
import useSFX from "@/hooks/useSFX";
import BirthrightInfo from "@/types/BirthrightInfo";
import { useEffect, useMemo, useState } from "react";

export default function Birthright() {
	const { siteSettings } = useSiteSettings();

	const leftSelectSound = useSFX('/sfx/left-select.wav');
	const rightSelectSound = useSFX('/sfx/right-select.wav');

	const [selectIdx, setSelectIdx] = useState<number>(0);
	const [info, setInfo] = useState<BirthrightInfo>(defaultBirthrightInfo);

	const keys = useMemo(() => Object.keys(characterInfo), []);

	const handleUpOrDown = (isDown: boolean) => {
		defaultHandleUpOrDown(isDown, selectIdx, setSelectIdx, 0, keys.length - 1, siteSettings.sfxVolume, leftSelectSound, rightSelectSound);
	}

	const handleInfoChange = (item: string) => {
		defaultHandleInfoChange(item, keys, setSelectIdx);
	}

	useEffect(() => {
		const key = keys[selectIdx] ? keys[selectIdx] : keys[0];
		if(!keys[selectIdx]) {
			setSelectIdx(0);
		}
		setInfo({
			name: key,
			subtitle: characterInfo[key].birthright.subtitle,
			description: characterInfo[key].birthright.description,
			image: characterInfo[key].imagePath
		});
	}, [selectIdx]);

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
					z-[100] absolute max-sm:[&>button]:min-w-[40vw] max-sm:[&>button]:h-[10vh]
					bottom-[15vh] ml-0 gap-[5vw]
					sm:bottom-[30vh] sm:ml-0 sm:gap-[20vw]
					lg:bottom-[25vh] lg:ml-[25vw] lg:gap-[15vw]
					xl:bottom-[20vh] xl:ml-0 xl:gap-[20vw] xl:ml-[25vw]
					2xl:ml-[25vw]
				`}
			/>
			<ResponsiveLongList 
				title="Characters"
				items={keys}
				selectedItem={info.name}
				action={handleInfoChange}
			/>
			<SlidableSiteOptions className="z-[100]"/>
			<InfoPaper 
				className={`
					relative [&>.info-text-container]:justify-start [&>.info-text-container]:h-[75%] [&>.info-text-container]:gap-0  
					w-[75vw] h-[23vh] mb-[30vh]
					sm:w-[75vw] sm:h-[30vh]
					md:w-[60vw] md:h-[30vh] md:mb-44
					lg:w-[50vw] lg:ml-[25vw]
					xl:ml-[25vw]
					2xl:h-[50vh] 2xl:ml-[25vw]
				`}
			>
				<img 
					src={info.image}
					alt={info.name}
					className={`
						absolute top-[-100px] left-[calc(50%-50px)] w-[100px] 
						sm:w-[200px] sm:left-[calc(50%-100px)] sm:top-[-200px]
					`}
				/>
				<p className={`sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw]`}><b><u>{info.name}: {info.subtitle}</u></b></p>
				<p className={`sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]`}>{info.description}</p>
			</InfoPaper>
		</div>
	);
}