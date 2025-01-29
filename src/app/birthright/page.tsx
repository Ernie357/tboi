// Page for displaying information for the item Birthright

"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeLink from "@/components/HomeLink";
import InfoPaper from "@/components/InfoPaper";
import LongList from "@/components/LongList";
import MusicPlayer from "@/components/MusicPlayer";
import Slidable from "@/components/Slidable";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";
import defaultHandleInfoChange from "@/helpers/defaultHandleInfoChange";
import defaultHandleUpOrDown from "@/helpers/defaultHandleUpOrDown";
import useSFX from "@/hooks/useSFX";
import { useEffect, useMemo, useState } from "react";

export default function Birthright() {
	const { siteSettings } = useSiteSettings();

	const infoJSON: { [key: string]: { subtitle: string; description: string } } = {
		"Isaac": { subtitle: "More options", description: "All new item pedestals cycle between two options. Previously-seen items are unaffected." },
		"Maggy": { subtitle: "Limit breaker + HP up", description: "Adds 1 full red Heart Container. Increases the maximum heart limit to 18." },
		"Cain": { subtitle: "Better arcades + luck up", description: "+1 Luck. Every floor, except for ???, Chest, Dark Room, The Void, and Home, has a very high chance to contain an upgraded Arcade that generally contains more Machines. This includes odd-numbered floors, Cathedral, and Sheol. Arcades will appear even if Cain is not holding at least 5 Coins. Arcades will still not spawn in Greed Mode." },
		"Judas": { subtitle: "Belial incarnate", description: "The Book of Belial becomes a passive item that can be held beneath other active items, similar to Book of Virtues. May stack with Book of Virtues. If Judas is not currently holding The Book of Belial, he receives it. The damage boost received from The Book of Belial scales with the amount of charges the active item above it has; may not work with one-time-use items, items with unlimited use, timed recharges, or items that do not follow normal room charge rules (Isaac's Tears, etc)." },
		"Blue Baby": { subtitle: "Stronger spirit", description: "Whenever a red Heart Container would have been gained, grants 2 Soul Hearts instead of 1." },
		"Eve": { subtitle: "Forever cursed", description: "Whore of Babylon is active regardless of health and Dead Bird is active without taking damage." },
		"Samson": { subtitle: "Rage up", description: "Bloody Lust can grant 4 more Damage boosts at +0.2 intervals, for a new maximum total of +14.0." },
		"Azazel": { subtitle: "Wide breath", description: "Azazel's Brimstone beam becomes much wider like Mega Blast, with 2× larger collision area. No effect on damage." },
		"Lazarus": { subtitle: "Come back stronger", description: "No direct effect. The item is triggered if Lazarus dies and becomes Lazarus Risen." },
		"Lazarus Risen": { subtitle: "Temporary DMG up", description: "Grants a +7.2 Damage bonus that fades by 0.12 per second. Until the effect completely fades, killing an enemy restores 0.07 damage to the bonus." },
		"Eden": { subtitle: "???", description: "Creates 3 random items from random item pools. Only one can be taken. Ignores item weight and can spawn items that have already been taken during the run. Can also spawn multiples of the same item, if they exist in multiple item pools." },
		"The Lost": { subtitle: "Better destiny", description: "Prevents items with the nolostbr item tag from appearing. This automatically re-rolls most items that aren't beneficial to The Lost, namely ones that only give health, flight, and/or spectral tears or activate upon taking damage." },
		"Lilith": { subtitle: "Offensive Formation", description: "Most familiars that normally follow Lilith, including Lilith's innate Incubus, will always be positioned in front of Lilith, creating a stack, facing whatever direction she was shooting. Non-attacking familiars (The Relic, Farting Baby, etc.) will follow Lilith's most recently acquired attacking familiar instead; if the most recent familiar is throwable like Holy Water, familiars following it will also be launched with it. If Lilith has King Baby, it will always be positioned directly in front of Lilith with all other affected familiars forming a semi-circle around it, and will behave normally otherwise. Dry Baby is considered an 'attacking familiar' and will be within the stack. Lil Portal and Jaw Bone are exempt and behave normally." },
		"Keeper": { subtitle: "Coin up", description: "Adds one Coin Heart and raises Keeper's maximum Coin Heart limit to 4." },
		"Apollyon": { subtitle: "Regurgitate", description: "Using Void has a 10% chance to spawn one previously destroyed passive item (while keeping the bonus stats). Each absorbed passive item has an equal chance to be spawned. Spawned items can be spawned again even if they are not reabsorbed. Absorbing duplicates of the same item will make it more likely to be spawned, as each duplicate counts as a separate item and thus has its own chance to be spawned. Birthright has no effect if Void is not held." },
		"The Forgotten": { subtitle: "Unchained", description: "The Soul is unchained and free to move. It can move to different rooms, leaving The Forgotten behind, and switching back teleports The Soul back to The Forgotten." },
		"Bethany": { subtitle: "Conserve your faith", description: "Activating an item using Soul Charges is free 50% of the time." },
		"Jacob & Esau": { subtitle: "What's yours is mine", description: "The character who picks up Birthright gains copies of the three most recent passive items from the other." },
		"Tainted Isaac": { subtitle: "Inventory up", description: "All new item pedestals cycle between two options. Previously-seen items are unaffected." },
		"Tainted Maggy": { subtitle: "HP up!", description: "Adds 1 full red Heart Container. Increases the number of non-draining hearts to 3." },
		"Tainted Cain": { subtitle: "Salvage", description: "The amount of pickups dropped from collecting an item is doubled." },
		"Tainted Judas": { subtitle: "Extended darkness", description: "Increases the range of Dark Arts by giving Tainted Judas a dark radius which applies the Dark Arts effect to enemies and projectiles that enter it." },
		"Tainted Blue Baby": { subtitle: "Poop up", description: "Increases the maximum number of poop pickups that can be carried to 29." },
		"Tainted Eve": { subtitle: "Coagulate", description: "Red Heart Clots now spawn temporary Half Red Hearts on death that last for two seconds before disappearing. Clots spawned from other types of hearts will not drop hearts." },
		"Tainted Samson": { subtitle: "Unstoppable force", description: "The berserk timer gains 3 seconds instead of 1 when Tainted Samson kills an enemy." },
		"Tainted Azazel": { subtitle: "Stronger sneeze", description: "Doubles the size of Tainted Azazel's Hemoptysis sneeze attack." },
		"Tainted Lazarus": { subtitle: "Superposition", description: "The non-active form of Tainted Lazarus will appear in ghostly form, being completely immune to damage and dealing 25% damage (including tear effects such as Holy Light). Holding down the 'drop' key allows the active form to move independently of the other form, similar to Jacob and Esau. Using Flip will cause the two characters to switch states while maintaining positions. Both characters receive the Birthright effect when one character collects it." },
		"Tainted Eden": { subtitle: "Eternal", description: "Items gained before Birthright will not be re-rolled, neither by taking damage, nor by items such as D4 and Missing No.. Items gained afterwards will still be affected." },
		"Tainted Lost": { subtitle: "Extra life", description: "Grants an extra life that revives Tainted Lost in the same room and deals 200 damage to nearby enemies. It can hit the same enemy up to 4 times." },
		"Tainted Lilith": { subtitle: "Conjoined", description: "Familiars that normally follow Tainted Lilith will instead act like and stack on top of her Gello familiar, disappearing inside of her while she's not firing and swinging out when she attacks. The melee attack gains a flat +3 damage bonus per familiar (regardless of damage multipliers) and if those familiars can shoot, they do so along with the Gello familiar. The Gello familiar gains the properties of King Baby, causing attached familiars to automatically aim and shoot at enemies. Familiars like Jaw Bone or Holy Water still function, but they are bound to the Gello familiar rather than their normal means of movement." },
		"Tainted Keeper": { subtitle: "Money money money", description: "Strongly attracts the coins dropped by killed enemies from a short distance. No effect on other coins." },
		"Tainted Apollyon": { subtitle: "Torment", description: "Holding down the fire button causes Abyss locusts to continuously damage enemies instead of returning." },
		"Tainted The Forgotten": { subtitle: "Recall", description: "Tainted Soul is given Recall, an unlimited-use active item, in their pocket active slot. When used, Recall pulls Tainted Forgotten into Tainted Soul's hands automatically from a distance, dealing damage to enemies as it travels." },
		"Tainted Bethany": { subtitle: "Artifact", description: "Spawns four Lemegeton wisps of items with a quality of 3 or higher. These wisps are much larger and have much higher HP than normal wisps." },
		"Tainted Jacob": { subtitle: "It's not yours", description: "Dark Esau splits into two. Both Esaus will always charge at the same time, and one will not charge if the other is not in position. Using Anima Sola chains both Dark Esaus at once and forces them together into one spot. Subsequent uses release each Dark Esau one at a time. Anima Sola's recharge time is reduced to 10 seconds, and chain duration is increased to 6.67 seconds." }
	};

	const leftSelectSound = useSFX('/sfx/left-select.wav');
	const rightSelectSound = useSFX('/sfx/right-select.wav');

	const [selectIdx, setSelectIdx] = useState<number>(0);
	const [info, setInfo] = useState<{ name: string, subtitle: string, description: string }>({ name: 'Isaac', subtitle: infoJSON["Isaac"].subtitle, description: infoJSON["Isaac"].description });

	const keys = useMemo(() => Object.keys(infoJSON), []);

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
			subtitle: infoJSON[key].subtitle,
			description: infoJSON[key].description
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
			<Slidable
				direction="up" 
				defaultHeightClassName="h-12" 
				expandedHeightClassName="h-[90vh]"
				title="Characters"
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
					items={Object.keys(infoJSON)} 
					className="[&>img]:w-full [&>img]:top-0 [&>img]:left-0 text-2xl w-full h-[90vh]"
					selectedItem={info.name}
				/>
			</Slidable>
			<Slidable
				direction="down" 
				defaultHeightClassName="h-[50px]" 
				expandedHeightClassName="h-[90vh]"
				title="Characters"
				className={`
					absolute left-0 top-0 w-full z-[100] [&>div>.title]:text-[6vw]
					sm:hidden
				`}
			>
				<LongList 
					action={handleInfoChange} 
					items={Object.keys(infoJSON)} 
					className="[&>img]:w-full [&>img]:top-0 [&>img]:left-0 text-2xl w-full h-[90vh]"
					selectedItem={info.name}
				/>
			</Slidable>
			<LongList 
					action={handleInfoChange} 
					items={Object.keys(infoJSON)} 
					className="[&>img]:w-[90%] hidden lg:flex z-[100] text-2xl w-[55vh] h-[90vh] absolute left-0"
					selectedItem={info.name}
					title="Characters"
			/>
			<SlidableSiteOptions className="z-[100]"/>
			<InfoPaper 
				title={info.name}
				description={info.description}
				titleClassName="sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw]"
				descriptionClassName="sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]"
				className={`
					relative [&>.info-text-container]:justify-start [&>.info-text-container]:h-[75%] [&>.info-text-container]:gap-0  
					w-[75vw] h-[23vh] mb-[30vh]
					sm:w-[75vw] sm:h-[30vh]
					md:w-[60vw] md:h-[30vh] md:mb-44
					lg:w-[50vw] lg:ml-[25vw]
					xl:ml-[25vw]
					2xl:h-[50vh] 2xl:ml-[25vw]
				`}
			/>
		</div>
	);
}