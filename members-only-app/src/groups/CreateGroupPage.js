import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postWithCredentials } from '../data';

export const CreateGroupPage = () => {
    const [nameValue, setNameValue] = useState('');
    const history = useHistory();

    const createGroup = async () => {
        const response = await postWithCredentials('/groups', { name: nameValue });
        const { newGroupId } = await response.json();
        history.push(`/groups/${newGroupId}`);
    }

    return (
        <div className="centered-container">
            <h1>Create Group</h1>
            <input
                type="text"
                placeholder="Enter Name for Group"
                value={nameValue}
                onChange={e => setNameValue(e.target.value)} />
            <button onClick={createGroup}>Create Group</button>
        </div>
    );
}