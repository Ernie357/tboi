import Item from "@/types/item";
import getItemFromKey from "./getItemFromKey";

export default function(tag: string, itemDataJSON: any, itemMetaDataJSON: any, itemStringDataJSON: any): Item[] {
    try {
        const itemIds: number[] = [];
        const items: Item[] = [];
        for(let idx = 0; idx < itemMetaDataJSON.items.item.length; idx++) {
            const currentItem = itemMetaDataJSON.items.item[idx];
            if(currentItem && currentItem["_tags"].includes(tag)) {
                currentItem["_id"] && itemIds.push(currentItem["_id"]);
            }
        }
        for(let idx = 0; idx < itemIds.length; idx++) {
            const item = getItemFromKey("_id", itemIds[idx].toString(), itemDataJSON, itemMetaDataJSON, itemStringDataJSON);
            item && items.push(item);
        }
        if(tag === 'guppy') {
            items.push({
                name: "Kid's Drawing",
                id: "169",
                description: "1/3 Guppy",
                imagePath: "trinket_169_kidsdrawing.png",
                quality: "0"
            });
        }
        return items;
    } catch(err) {
        console.log(err);
        return [];
    }
} 