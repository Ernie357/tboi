export default function defaultHandleInfoChange(item: string, keys: string[], setState: React.Dispatch<React.SetStateAction<number>>) {
    for(let idx = 0; idx < keys.length; idx++) {
        if(keys[idx] === item) {
            setState(idx);
            break;
        }
    }
}