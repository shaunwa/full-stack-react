import { useState, useEffect } from 'react';

export const useMeals = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [rawMeals, setRawMeals] = useState([]);

    const loadMeals = async () => {
        setIsLoading(true);
        const response = await fetch('/meals');
        const rawMeals = await response.json();
        setRawMeals(rawMeals);
        setIsLoading(false);
    }

    useEffect(() => {
        loadMeals();
    }, []);

    return {
        isLoading,
        meals: rawMeals.map(meal => ({
            ...meal,
            plannedDate: new Date(meal.plannedDate),
        })),
        setMeals: setRawMeals,
    };
}