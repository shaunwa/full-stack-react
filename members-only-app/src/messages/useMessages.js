import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useMessages = (id) => {
    const [messages, setMessages] = useState([]);

    const loadMessages = async () => {
        const user = firebase.auth().currentUser;
        const response = await fetch(`/groups/${id}/messages`, {
            headers: {
                AuthToken: await user.getIdToken(),
            },
        });
        const messages = await response.json();
        setMessages(messages);
    }

    useEffect(() => {
        loadMessages();
    }, []);

    return messages;
}