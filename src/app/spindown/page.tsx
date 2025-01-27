// Page that allows for searching for items and spinning them down or up by ID, simulating the item Spindown Dice

"use client";
import { useEffect, useState } from "react";
import FloatingItem from "../../components/FloatingItem";
import ItemTitle from "../../components/ItemTitle";
import Item from "../../types/item";
import defaultItem from "@/defaultObjects/defaultItem";
import SearchBar from "../../components/SearchBar";
import getItemFromKey from "@/inspectors/getItemFromKey";
import HomeLink from "../../components/HomeLink";
import getItemNameKeyFromName from "@/inspectors/getItemNameKeyFromName";
import getItemSuggestionsFromName from "@/inspectors/getItemSuggestionsFromName";
import MusicPlayer from "../../components/MusicPlayer";
import BackgroundVideo from "@/components/BackgroundVideo";
import UpAndDownButtons from "@/components/UpAndDownButtons";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";

export default function Spindown() {
	const missingItemIds = ["43", "61", "235", "587", "613", "620", "630", "648", "662", "666", "718"];

	const [item, setItem] = useState<Item>(defaultItem);
	const [itemDataJSON, setItemDataJSON] = useState<any>(null);
	const [itemMetaDataJSON, setItemMetaDataJSON] = useState<any>(null);
	const [itemStringDataJSON, setItemStringDataJSON] = useState<any>(null);
	
	useEffect(() => {
		fetch('/data/items.json').then((res: Response) => res.json()).then((data: any) => setItemDataJSON(data));
		fetch('/data/items.metadata.json').then((res: Response) => res.json()).then((data: any) => setItemMetaDataJSON(data));
		fetch('/data/stringtable.json').then((res: Response) => res.json()).then((data: any) => setItemStringDataJSON(data));
	}, []);

	const handleSpin = (isDown: boolean) => {
		if((+item.id <= 1 && isDown) || (+item.id >= 732 && !isDown)) { return; }
		let nextId = isDown ? (+item.id - 1).toString() : (+item.id + 1).toString();
		if(missingItemIds.includes(nextId)) {
			nextId = isDown ? (+nextId - 1).toString() : (+nextId + 1).toString()
		}
		const nextItem = getItemFromKey("_id", nextId, itemDataJSON, itemMetaDataJSON, itemStringDataJSON);
		nextItem && setItem(nextItem);
	}

	const handleSearch = (itemName: string): boolean => {
		const itemNameKey = getItemNameKeyFromName(itemName);
		const itemFromSearch = getItemFromKey("_name", itemNameKey, itemDataJSON, itemMetaDataJSON, itemStringDataJSON);
		itemFromSearch && setItem(itemFromSearch);
		return itemFromSearch ? true : false;
	}

	const getSuggestions = (input: string): ItemSuggestion[] => {
		return getItemSuggestionsFromName(input, itemDataJSON, itemStringDataJSON);
	}

	return (
		<div tabIndex={0} onKeyDown={(event: any) => {
			if(event.key === 'ArrowLeft') {
				handleSpin(true);
			} else if(event.key === 'ArrowRight') {
				handleSpin(false);
			}
		}} className="relative bg-center bg-no-repeat bg-contain min-h-screen min-w-screen flex justify-center items-center">
			<BackgroundVideo />
			<MusicPlayer />
			<SearchBar searchFunction={handleSearch} showSuggestions suggestionFunction={getSuggestions} />
			<HomeLink />
			<ItemTitle className="absolute top-[38vh] sm:top-[27vh] md:top-[21vh] lg:top-[13vh] xl:top-[8vh]" subtitle={item.description}>{item.name}</ItemTitle>
			<FloatingItem imageFileName={item.imagePath} className="absolute scale-[50%] sm:scale-100 top-[-2vw]" />
			<UpAndDownButtons 
				downText="Spindown" 
				upText="Spinback" 
				clickFunction={handleSpin}
				className="md:flex-col xl:flex-row gap-8 sm:gap-36 md:gap-0 xl:gap-72 absolute max-sm:top-[15vh] sm:bottom-[35vh] md:bottom-[20vh] md:bottom-[37vh] md:left-[20vw] xl:left-auto xl:bottom-[20vh]"
			/>
			<div className="absolute bottom-[12%] sm:bottom-10 sm:left-[10vw] md:left-auto md:bottom-[40%] md:right-[20vw] w-36 h-36 xl:w-72 xl:h-72 text-xl xl:text-4xl font-Menu bg-menu-paper-2 bg-contain bg-center bg-no-repeat flex flex-col">
				<p className="rotate-[-12deg] relative top-6 left-6 xl:top-12 xl:left-12"><b>ID: </b>{item.id}</p>
				<p className="rotate-[-12deg] relative top-6 left-6 xl:top-12 xl:left-12"><b>Quality: </b>{item.quality}</p>
			</div>
			<SlidableSiteOptions />
		</div>
	);
}