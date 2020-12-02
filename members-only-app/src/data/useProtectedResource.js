import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useProtectedResource = (url, defaultValue) => {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        const loadResource = async () => {
            const user = firebase.auth().currentUser;
            if (!user) {
                setData(defaultValue);
                return;
            }

            const response = await fetch(url, {
                headers: {
                    AuthToken: await user.getIdToken(),
                }
            });
            const data = await response.json();
            setData(data);
        }

        loadResource();
    }, []);

    return [data, setData];
}