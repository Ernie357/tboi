export default function(id: string, itemStringDataJSON: any): any {
    try {
        for(let idx = 0; idx < itemStringDataJSON.items.item.length; idx++) {
            const currentItem = itemStringDataJSON.items.item[idx];
            if(currentItem["_id"] === id) {
                return currentItem;
            }
        }
        return null;
    } catch(err) {
        console.log(`Could not find item metadata of id "${id}": ${err}`);
        return null;
    }
} 