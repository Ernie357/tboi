export default function(itemName: string): string {
    try {
        return "c" + itemName.substring(1, itemName.length);
    } catch(err) {
        return '';
    }
} 