"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import LongList from "@/components/LongList";
import MusicPlayer from "@/components/MusicPlayer";
import Slidable from "@/components/Slidable";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import defaultPandoraInfo from "@/defaultObjects/defaultPandoraInfo";
import { useEffect, useMemo, useState } from "react";
import useSound from "use-sound";

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

	const [leftSelectSound] = useSound('/sfx/left-select.wav');
	const [rightSelectSound] = useSound('/sfx/right-select.wav');

	const [selectIdx, setSelectIdx] = useState<number>(0);
	const [info, setInfo] = useState<PandoraInfo>(defaultPandoraInfo);
	const [relevantJSON, setRelevantJSON] = useState<{name: string, JSON: { [key: string]: string }}>({ name: 'normal', JSON: normalInfoJSON });

	const keys = useMemo(() => Object.keys(relevantJSON.JSON), [relevantJSON]);

	const handleUpOrDown = (isDown: boolean) => {
		if(isDown) {
			if(siteSettings.sfxVolume > 0) {
				leftSelectSound();
			}
			if(selectIdx === 0) {
				setSelectIdx(keys.length - 1);
			} else {
				setSelectIdx(prev => prev - 1);
			}
		} else {
			if(siteSettings.sfxVolume > 0) {
				rightSelectSound();
			}
			if(selectIdx === keys.length - 1) {
				setSelectIdx(0);
			} else {
				setSelectIdx(prev => prev + 1);
			}
		}
	}

	const handleInfoChange = (item: string) => {
		for(let idx = 0; idx < keys.length; idx++) {
			if(keys[idx] === item) {
				setSelectIdx(idx);
				break;
			}
		}
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
	}, [selectIdx]);

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
					z-[100] absolute
					bottom-[15vh] ml-0 gap-[20vw]
					sm:bottom-[30vh] sm:ml-0 sm:gap-[20vw]
					lg:bottom-[25vh] lg:ml-[25vw] lg:gap-[15vw]
					xl:bottom-[20vh] 
				`}
			/>
			<Slidable
				direction="up" 
				defaultHeightClassName="h-12" 
				expandedHeightClassName="h-[90vh]"
				title="Floors"
				className={`
					absolute left-0 bottom-0 w-full z-[100] [&>div>.title]:text-[4vw]
					sm:w-[50vw]
					hidden
					sm:flex
					lg:hidden
				`}
			>
				<LongList 
					action={handleInfoChange} 
					items={Object.keys(relevantJSON.JSON)} 
					className="[&>img]:w-full [&>img]:top-0 [&>img]:left-0 text-2xl w-full h-[90vh]"
				/>
			</Slidable>
			<Slidable
				direction="down" 
				defaultHeightClassName="h-[50px]" 
				expandedHeightClassName="h-[90vh]"
				title="Floors"
				className={`
					absolute left-0 top-0 w-full z-[100] [&>div>.title]:text-[6vw]
					sm:hidden
				`}
			>
				<LongList 
					action={handleInfoChange} 
					items={Object.keys(relevantJSON.JSON)} 
					className="[&>img]:w-full [&>img]:top-0 [&>img]:left-0 text-2xl w-full h-[90vh]"
				/>
			</Slidable>
			<LongList 
					action={handleInfoChange} 
					items={Object.keys(relevantJSON.JSON)} 
					className="[&>img]:w-[90%] hidden lg:flex z-[100] text-2xl w-[55vh] h-[90vh] absolute left-0"
					title="Floors"
			/>
			<SlidableSiteOptions className="z-[100]"/>
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
				<div 
					className={`
						z-10 relative flex items-center justify-center
						w-[75vw] h-[30vh]
						sm:w-[75vw] sm:h-[30vh]
						md:w-[60vw] md:h-[30vh] md:mb-32
						lg:w-[50vw]
					`}
				>
					<img 
						src="/images/ui/menu-paper-6.png" 
						alt="paper background" 
						className="z-0 absolute w-full h-full" 
					/>
					<div className="flex flex-col justify-center items-center gap-5 w-[90%] h-full z-10 text-center font-Menu">
						<p className="sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]"><b><u>{info.floor}</u></b></p>
						<p className="sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]">{info.reward}</p>
					</div>
				</div>
			</div>
		</div>
	);
}