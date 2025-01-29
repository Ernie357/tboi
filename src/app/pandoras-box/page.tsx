// Page for displaying information for the item Pandora's Box

"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import InfoPaper from "@/components/InfoPaper";
import MusicPlayer from "@/components/MusicPlayer";
import ResponsiveLongList from "@/components/ResponsiveLongList";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import defaultPandoraInfo from "@/defaultObjects/defaultPandoraInfo";
import defaultHandleInfoChange from "@/helpers/defaultHandleInfoChange";
import defaultHandleUpOrDown from "@/helpers/defaultHandleUpOrDown";
import useSFX from "@/hooks/useSFX";
import { useEffect, useMemo, useState } from "react";

interface PandoraInfo {
	floor: string,
	reward: string
}

export default function PandorasBox() {
	const { siteSettings } = useSiteSettings();

	const normalInfoJSON: { [key: string]: string } = {
		"Basement / Cellar / Burning Basement / Downpour / Dross I": "2 Soul Hearts",
		"Basement / Cellar / Burning Basement / Downpour / Dross II": "2 Bombs & 2 Keys",
		"Caves / Catacombs / Flooded Caves / Mines / Ashpit I": "1 Boss Room Item",
		"Caves / Catacombs / Flooded Caves / Mines / Ashpit II": "1 Boss Room Item & 2 Soul Hearts",
		"Depths / Necropolis / Dank Depths / Mausoleum / Gehenna I": "4 Soul Hearts",
		"Depths / Necropolis / Dank Depths / Mausoleum / Gehenna II": "20 Coins", 
		"Womb / Utero / Scarred Womb / Corpse I": "2 Boss Room Items",
		"Womb / Utero / Scarred Womb / Corpse II": "The Bible",
		"Hush": "Nothing!",
		"Sheol": "1 Devil Room Item & 1 Black Heart",
		"Cathedral": "1 Angel Room Item & 1 Eternal Heart",
		"Dark Room": "Unlocks Moving Box",
		"Chest": "1 Penny",
		"The Void": "Nothing!",
		"Home": "Red Key"
	}

	const xlInfoJSON: { [key: string]: string } = {
		"Basement / Cellar / Burning Basement / Downpour / Dross": "2 Soul Hearts",
		"Caves / Catacombs / Flooded Caves / Mines / Ashpit": "1 Boss Room Item",
		"Depths / Necropolis / Dank Depths / Mausoleum / Gehenna": "4 Soul Hearts",
		"Womb / Utero / Scarred Womb / Corpse": "2 Boss Room Items"
	}

	const greedInfoJSON: { [key: string]: string } = {
		"Basement / Cellar / Burning Basement": "2 Soul Hearts",
		"Caves / Catacombs / Flooded Caves": "1 Boss Room Item",
		"Depths / Necropolis / Dank Depths": "20 Coins",
		"Womb / Utero / Scarred Womb": "2 Boss Room Items",
		"Sheol": "1 Devil Room Items & 1 Black Heart",
		"The Shop / Ultra Greed": "Nothing!"
	}

	const leftSelectSound = useSFX('/sfx/left-select.wav');
	const rightSelectSound = useSFX('/sfx/right-select.wav');

	const [selectIdx, setSelectIdx] = useState<number>(0);
	const [info, setInfo] = useState<PandoraInfo>(defaultPandoraInfo);
	const [relevantJSON, setRelevantJSON] = useState<{name: string, JSON: { [key: string]: string }}>({ name: 'normal', JSON: normalInfoJSON });

	const keys = useMemo(() => Object.keys(relevantJSON.JSON), [relevantJSON]);

	const handleUpOrDown = (isDown: boolean) => {
		defaultHandleUpOrDown(isDown, selectIdx, setSelectIdx, 0, keys.length - 1, siteSettings.sfxVolume, leftSelectSound, rightSelectSound);
	}

	const handleInfoChange = (item: string) => {
		defaultHandleInfoChange(item, keys, setSelectIdx);
	}

	const handleTypeChange = (event: React.MouseEvent<HTMLButtonElement>) => {
		const type = event.currentTarget.textContent?.trim().toLowerCase();
		switch(type) {
			case 'normal': 
				setRelevantJSON({ name: 'normal', JSON: normalInfoJSON });
				break;
			case 'xl':
				setRelevantJSON({ name: 'xl', JSON: xlInfoJSON });
				break;
			case 'greed':
				setRelevantJSON({ name: 'greed', JSON: greedInfoJSON });
				break;
			default: 
				setRelevantJSON({ name: 'normal', JSON: normalInfoJSON });
				break;
		}
		setSelectIdx(0);
	}

	useEffect(() => {
		const floor = keys[selectIdx] ? keys[selectIdx] : keys[0];
		if(!keys[selectIdx]) {
			setSelectIdx(0);
		}
		setInfo({
			floor: floor,
			reward: relevantJSON.JSON[floor]
		});
	}, [selectIdx, relevantJSON]);

	return (
		<div tabIndex={0} onKeyDown={(event: any) => {
			if(event.key === 'ArrowLeft') {
				handleUpOrDown(true);
			} else if(event.key === 'ArrowRight') {
				handleUpOrDown(false);
			}
		}} className="bg-black relative bg-center bg-no-repeat bg-contain min-h-screen min-w-screen flex justify-center items-center">
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
					xl:bottom-[20vh] 
				`}
			/>
			<ResponsiveLongList 
				title="Floors"
				items={keys}
				selectedItem={info.floor}
				action={handleInfoChange}
			/>
			<div 
				className={`
					flex flex-col items-center h-[75%] absolute top-[15vh]
					sm:top-[15vh]
					lg:ml-[25vw]
				`}
			>
				<div
					className={`
						flex items-center justify-center bg-menu-paper-7 w-[80vw] h-[20vw] bg-contain bg-no-repeat bg-center font-Menu text-ui
						sm:text-[2.5vw] sm:w-[40vw] sm:h-[10vw]
					`}
				>
					<div className="relative bottom-2 flex items-center justify-between w-[75%]">
						<button onClick={handleTypeChange} className={`cursor-pointer ${relevantJSON.name === 'normal' && 'underline'} hover:text-black`}>Normal</button>
						<button onClick={handleTypeChange} className={`cursor-pointer ${relevantJSON.name === 'xl' && 'underline'} hover:text-black`}>XL</button>
						<button onClick={handleTypeChange} className={`cursor-pointer ${relevantJSON.name === 'greed' && 'underline'} hover:text-black`}>Greed</button>
					</div>
				</div>
				<InfoPaper 
					className={`
						relative w-[75vw] h-[23vh]
						sm:w-[75vw] sm:h-[30vh]
						md:w-[60vw] md:h-[30vh] md:mb-32
						lg:w-[50vw]
					`}
				>
					<p className={`sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]`}><b><u>{info.floor}</u></b></p>
					<p className={`sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]`}>{info.reward}</p>
				</InfoPaper>
			</div>
			<SlidableSiteOptions className="z-[100]"/>
		</div>
	);
}