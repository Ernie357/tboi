export default function(key: string, itemStringDataJSON: any): string {
    try {
        const items = itemStringDataJSON.stringtable.category[1]["items"];
        for(let idx = 0; idx < items.length; idx++) {
            const currentItem = items[idx];
            if(currentItem["_name"] === key) {
                return currentItem.string[0];
            }
        }
        return "Unfindable Item";
    } catch(err) {
        console.log(`Could not find item of key "${key}": ${err}`);
        return "Unfindable Item";
    }
} 