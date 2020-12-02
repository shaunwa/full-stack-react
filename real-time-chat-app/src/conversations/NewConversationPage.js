import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProtectedResource, postWithCredentials } from '../data';
import { useUser } from '../auth';

export const NewConversationPage = () => {
    const [nameValue, setNameValue] = useState('');
    const { isLoading: isLoadingCurrentUser, user: currentUser } = useUser();
    const { isLoading: isLoadingUsers, data: users } = useProtectedResource('/users', []);
    const [memberIds, setMemberIds] = useState([]);
    const history = useHistory();

    const addMemberId = id => {
        setMemberIds([...memberIds, id]);
    }

    const createConversation = async () => {
        const response = await postWithCredentials('/conversations',
            { name: nameValue, memberIds }
        );
        const newGroupId = await response.json();
        history.push(`/conversations/${newGroupId}`);
    }

    return (
        <div className="centered-container">
            <h1>New Conversation</h1>
            <input
                type="text"
                placeholder="Enter a name for your conversation here"
                className="full-width"
                value={nameValue}
                onChange={e => setNameValue(e.target.value)} />
            <h3>Add Members</h3>
            {users.map(user => (
                <div key={user.id} className="list-item new-conversation-list-item">
                    <p>{user.name}</p>
                    {memberIds.includes(user.id) || user.id === currentUser.uid 
                        ? <button disabled>Added!</button>
                        : <button onClick={() => addMemberId(user.id)}>Add</button>}
                </div>
            ))}
            <button
                className="full-width space-before"
                onClick={createConversation}
            >Create Conversation</button>
        </div>
    )
}