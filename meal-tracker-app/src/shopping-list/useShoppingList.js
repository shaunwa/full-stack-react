import { useState, useEffect } from 'react';

export const useShoppingList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadShoppingList = async () => {
            const response = await fetch('/shopping-list');
            const items = await response.json();
            console.log(items);
            setIsLoading(false);
            setItems(items);
        }

        loadShoppingList();
    }, []);

    return { isLoading, items };
}