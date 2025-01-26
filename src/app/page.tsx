// Index Page for general navigation

import SelectableMenuOption from "../components/SelectableMenuOption";
import SiteOptions from "../components/SiteOptions";
import MusicPlayer from "../components/MusicPlayer";
import SlidableSiteOptions from "@/components/SlidableSiteOptions";

export default function Home() {
	return (
		<div className="relative 2xl:pl-10 flex justify-center items-center min-h-screen max-h-screen w-screen bg-main-menu-color sm:shadow-vignette-sm">
    		<MusicPlayer src='/music/main-menu.ogg' />
			<SlidableSiteOptions className="sm:hidden z-[100]" />
			<div className="bg-logo bg-center sm:bg-left-top bg-no-repeat bg-cover w-[300px] h-40 absolute top-4 sm:left-4" />
			<div className="gap-0 sm:gap-12 sm:flex items-center h-[60%] sm:h-[90vh] md:h-[50vh] lg:h-screen w-full bg-main-menu bg-center bg-cover sm:bg-contain bg-no-repeat shadow-none">
				<SiteOptions type="big" className="hidden sm:flex" />
				<div className=
					"text-center sm:text-left relative overflow-scroll rotate-[-5deg] flex flex-col items-center \
					[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] \
					left-[20vw] top-[8vh] gap-4 w-[60vw] h-[40vh] text-xl pt-[2vh] \
					sm:min-h-0 sm:left-0 sm:top-0 sm:pl-10 sm:w-full sm:h-[30%] sm:pt-1 sm:gap-4 sm:text-base \
					md:pl-0 md:h-[60%] md:pt-0 md:gap-4 md:text-xl \
					lg:pl-5 lg:h-[50%] lg:gap-6 lg:text-4xl \
					xl:gap-8 xl:text-4xl xl:h-[60%] \
					2xl:h-[60%] 2xl:pl-10 2xl:gap-12 2xl:text-5xl"
				>
					<SelectableMenuOption action="/spindown">Spindown Calc</SelectableMenuOption>
					<SelectableMenuOption action="/pandoras-box">Pandora's Box</SelectableMenuOption>
					<SelectableMenuOption action="/birthright">Birthright</SelectableMenuOption>
					<SelectableMenuOption action="/dice-rooms">Dice Rooms</SelectableMenuOption>
					<SelectableMenuOption action="https://www.tboi.com/sacrifice-rooms" openInNewTab>Sacrifice Rewards</SelectableMenuOption>
					<SelectableMenuOption action="https://www.tboi.com/transformations" openInNewTab>Transformations</SelectableMenuOption>
					<SelectableMenuOption action="https://www.tboi.com/tarot-cloth" openInNewTab>Tarot Cloth</SelectableMenuOption>
					<SelectableMenuOption action="https://www.tboi.com/bag-of-crafting/index.html" openInNewTab>Bag of Crafting</SelectableMenuOption>
					<SelectableMenuOption action="https://isaacguru.com/" openInNewTab>Item Gallery</SelectableMenuOption>
				</div>
				<div className="flex justify-center items-center relative top-28 sm:top-0 min-h-[150px] sm:h-[50%] lg:h-[65%] w-full bg-daily-challenge-main-menu bg-center sm:bg-top bg-contain bg-no-repeat">
				    <div 
					    className=
						"text-center rotate-[10deg] \
						text-base w-44 relative max-sm:right-3 max-sm:bottom-1 \
						sm:absolute sm:text-sm sm:top-[3vh] sm:left-2 sm:w-[85%] \
                        md:text-xl md:left-5 md:w-[75%] md:top-[4vh] \
						lg:text-3xl lg:w-[80%] lg:left-5 lg:top-[4.5vh] \
						xl:text-4xl xl:w-[75%] xl:top-[8vh] xl:left-8 \
						2xl:w-[80%] 2xl:text-5xl 2xl:top-[10vh]"
					>
						<SelectableMenuOption action='info-and-credits' disableCursor>View Site Info and Credits</SelectableMenuOption>
					</div>
				</div>
			</div>
		</div>
	);
}