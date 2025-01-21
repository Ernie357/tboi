"use client";
import { useState } from "react";
import SearchSuggestion from "./SearchSuggestion";
import { FaSearch } from "react-icons/fa";
import useSound from 'use-sound';
import useSiteSettings from "@/context/SiteSettings/useSiteSettings";

export default function SearchBar(props: { className?: string, searchFunction: (value: string) => boolean, showSuggestions?: boolean, suggestionFunction?: (input: string) => void }) {
    const { siteSettings } = useSiteSettings();

    const [errorSound] = useSound('/sfx/error-buzz.wav');
    const [summonSound] = useSound('/sfx/summon-sound.wav');

    const [searchInput, setSearchInput] = useState<string>('');
    const [searchSuggestions, setSearchSuggestions] = useState<any>([]);
    
    const handleInputChange = (event: any) => {
        const { value } = event.target;
        setSearchInput(value);
        if(props.showSuggestions && props.suggestionFunction && value.length > 1) {
            const suggestions = props.suggestionFunction(value);
            setSearchSuggestions(suggestions);
        } else {
            setSearchSuggestions([]);
        }
    }

    const handleSearch = (value: string) => {
        setSearchInput('');
        setSearchSuggestions([]);
        const wasSearchSuccessful = props.searchFunction(value);
        if(!wasSearchSuccessful && siteSettings.sfxVolume > 0) {
            errorSound();
        } else if(siteSettings.sfxVolume > 0) {
            summonSound();
        }
    }

    const handleSuggestionClick = (value: string) => {
        setSearchInput(value);
        setSearchSuggestions([]);
    }

    const suggestionElements = props.showSuggestions ? searchSuggestions.map((suggestion: any) => {
        return (
            <SearchSuggestion 
                key={suggestion.itemImageName}
                itemName={suggestion.itemName} 
                itemImageName={suggestion.itemImageName}
                clickFunction={handleSuggestionClick}
            />
        );
    }) : [];

    return (
        <div onKeyDown={(event:any) => {
            if(event.key === 'Enter') {
                handleSearch(searchInput);
            }
        }} className={`flex flex-col gap-4 sm:gap-8 absolute top-1 left-1 ${props.className}`}>
            <div className="sm:p-5 flex items-center bg-menu-paper-3 bg-center bg-contain bg-no-repeat w-full h-16 sm:h-32">
                <input 
                    type="text" 
                    value={searchInput}
                    onChange={handleInputChange}
                    name="search"
                    placeholder="Search..."
                    className="p-3 bg-transparent w-5/6 font-Menu text-xl sm:text-4xl text-ui caret-ui placeholder-ui focus:outline-0"
                />
                <button 
                    onClick={() => handleSearch(searchInput)} 
                    className="relative bottom-[5px] p-1 font-Menu text-ui text-lg sm:text-3xl hover:text-black"
                >
                    <FaSearch />
                </button>
            </div>
            {
                props.showSuggestions &&
                <div className="flex flex-col justify-center gap-8">
                    {suggestionElements}
                </div>
            }
        </div>
    );
}