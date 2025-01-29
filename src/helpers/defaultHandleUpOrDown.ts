export default function defaultHandleUpOrDown(
    isDown: boolean,
    state: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
    firstIdx: number,
    lastIdx: number,
    sfxVolume: number,
    leftSelectSound: () => void,
    rightSelectSound: () => void
) {
	if (isDown) {
    	if (sfxVolume > 0) {
        	leftSelectSound();
    	}
    	setState(state === firstIdx ? lastIdx : prev => prev - 1);
    } else {
    	if (sfxVolume > 0) {
        	rightSelectSound();
    	}
    	setState(state === lastIdx ? firstIdx : prev => prev + 1);
	}
}