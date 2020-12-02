import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useGroup = (groupId) => {
    const [isLoading, setIsLoading] = useState(true);
    const [group, setGroup] = useState(null);

    const loadGroup = async () => {
        setIsLoading(true);
        const user = firebase.auth().currentUser;
        const response = await fetch(`/groups/${groupId}`, {
            headers: {
                AuthToken: await user.getIdToken(),
            }
        });
        const group = await response.json();
        setIsLoading(false);
        setGroup(group);
    }

    useEffect(() => {
        loadGroup();
    }, [])

    return { isLoading, group };
}
