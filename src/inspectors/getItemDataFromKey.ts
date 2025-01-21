export default function(key: string, value: string, itemDataJSON: any): any {
    try {
        for(let idx = 0; idx < itemDataJSON.items.passive.length; idx++) {
            const currentItem = itemDataJSON.items.passive[idx];
            if(currentItem[key] === value) {
                return currentItem;
            }
        }
        for(let idx = 0; idx < itemDataJSON.items.active.length; idx++) {
            const currentItem = itemDataJSON.items.active[idx];
            if(currentItem[key] === value) {
                return currentItem;
            }
        }
        for(let idx = 0; idx < itemDataJSON.items.familiar.length; idx++) {
            const currentItem = itemDataJSON.items.familiar[idx];
            if(currentItem[key] === value) {
                return currentItem;
            }
        }
        return null;
    } catch(err) {
        return null;
    }
} 