export default function(itemName: string): string {
    try {
        const cleanedName = itemName.trim().replace(/[()!'?#.\-_]/g, "");
        const words = cleanedName.split(' ');
		let itemNameKey = '#';
		for(let idx = 0; idx < words.length; idx++) {
			itemNameKey += words[idx].toUpperCase();
			itemNameKey += idx < words.length - 1 ? '_' : '_NAME';
		} 
        return itemNameKey;
    } catch(err) {
        return '';
    }
} 