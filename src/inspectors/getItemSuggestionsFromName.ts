import getItemNameKeyFromName from "./getItemNameKeyFromName";
import getProperImageName from "./getProperImageName";
import getStringtableValue from "./getStringtableValue";

export default function(input: string, itemDataJSON: any, itemStringDataJSON: any): ItemSuggestion[] {
    try {
        const itemSuggestions = [];
        let itemNameKey = getItemNameKeyFromName(input);
        itemNameKey = itemNameKey.replace(/_NAME(?=[^_NAME]*$)/, "").replace('#', '');
        let numFound = 0;
        for(let idx = 0; idx < itemDataJSON.items.passive.length && numFound < 5; idx++) {
            const currentItem = itemDataJSON.items.passive[idx];
            if(currentItem["_name"].includes(itemNameKey)) {
                const itemName = getStringtableValue(currentItem["_name"].replace('#', ''), itemStringDataJSON);
                const itemImageName = getProperImageName(currentItem["_gfx"]);
                itemSuggestions.push({ itemName: itemName, itemImageName: itemImageName });
                numFound++;
            }
        }
        for(let idx = 0; idx < itemDataJSON.items.active.length && numFound < 5; idx++) {
            const currentItem = itemDataJSON.items.active[idx];
            if(currentItem["_name"].includes(itemNameKey)) {
                const itemName = getStringtableValue(currentItem["_name"].replace('#', ''), itemStringDataJSON);
                const itemImageName = getProperImageName(currentItem["_gfx"]);
                itemSuggestions.push({ itemName: itemName, itemImageName: itemImageName });
                numFound++;
            }
        }
        for(let idx = 0; idx < itemDataJSON.items.familiar.length && numFound < 5; idx++) {
            const currentItem = itemDataJSON.items.familiar[idx];
            if(currentItem["_name"].includes(itemNameKey)) {
                const itemName = getStringtableValue(currentItem["_name"].replace('#', ''), itemStringDataJSON);
                const itemImageName = getProperImageName(currentItem["_gfx"]);
                itemSuggestions.push({ itemName: itemName, itemImageName: itemImageName });
                numFound++;
            }
        }
        return itemSuggestions;
    } catch(err) {
        return [];
    }
} 