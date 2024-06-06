import { useEffect, useState } from "react";

//we dont want to exhaust our database with queries for every single keystroke
//That's why we want to debounce it or delay it
export function useDebounce<T>(value: T, delay?:number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    //is user stopped writing for half a second we will consider the user stopped writing
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500)

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
}

