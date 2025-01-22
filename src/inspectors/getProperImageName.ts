/*
    File: getPropeImageName.ts

    Purpose: The game files, for some reason, have capitalization that does not line up with the JSON
             file image names for its item PNGs. So, this is a convenient function for ensuring
             the image file names are correct and usable universally when working with the JSON.

    Params: itemName - The name of the image file as string, Example: "Collectibles_001_thesadonion.png"

    Return: A string that can be properly used in an image path for the item.
*/

export default function(itemName: string): string {
    try {
        return "c" + itemName.substring(1, itemName.length);
    } catch(err) {
        return '';
    }
} 