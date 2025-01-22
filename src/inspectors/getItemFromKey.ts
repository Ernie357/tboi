import Item from "@/types/item";
import getItemMetadataFromId from "./getItemMetadataFromId";
import getStringtableValue from "./getStringtableValue";
import getItemDataFromKey from "./getItemDataFromKey";
import getProperImageName from "./getProperImageName";

export default function(key: string, value: string, itemDataJSON: any, itemMetaDataJSON: any, itemStringDataJSON: any): Item | null {
    try {
        const itemData = getItemDataFromKey(key, value, itemDataJSON);
        const id = itemData["_id"];
        const nameKey = itemData["_name"].replace("#", "");
        const descriptionKey = itemData["_description"].replace("#", "");
        const itemImageName = getProperImageName(itemData["_gfx"]);
        const itemName = getStringtableValue(nameKey, itemStringDataJSON);
        const itemDescription = getStringtableValue(descriptionKey, itemStringDataJSON);
        const itemMetadata = getItemMetadataFromId(id, itemMetaDataJSON);
        const itemQuality = itemMetadata["_quality"];
        const item: Item = {
            id: id,
            name: itemName,
            description: itemDescription,
            imagePath: itemImageName,
            quality: itemQuality
        };
        return item;
    } catch(err) {
        return null;
    }
} 