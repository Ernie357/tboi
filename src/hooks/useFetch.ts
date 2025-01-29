"use client";

import { useEffect, useState } from "react";

export default function useFetch(url: string) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(url).then((res: Response) => res.json()).then((data: any) => setData(data));
    }, [url]); 

    return data;
}