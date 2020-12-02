import { useState, useEffect } from 'react';

export const useGroups = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState([]);

    const loadGroups = async () => {
        const response = await fetch('/groups');
        const groups = await response.json();
        setGroups(groups);
        setIsLoading(false);
    }

    useEffect(() => {
        loadGroups();
    }, []);

    return { isLoading, groups };
}