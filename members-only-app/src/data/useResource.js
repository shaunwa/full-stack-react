import { useState, useEffect } from 'react';

export const useResource = (url, defaultValue) => {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        const loadResource = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }

        loadResource();
    }, [url]);

    return data;
}