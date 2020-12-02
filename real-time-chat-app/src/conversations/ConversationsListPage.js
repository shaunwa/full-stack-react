import React from 'react';
import { Link } from 'react-router-dom';
import { useProtectedResource } from '../data';
import { useUser } from '../auth';

export const ConversationsListPage = () => {
    const { user } = useUser();
    const { isLoading, data: conversations } = useProtectedResource(`/users/${user.uid}/conversations`, []);
    console.log(conversations);

    return isLoading
        ? <p>Loading Messages...</p>
        : (
        <div className="centered-container">
            <h1 className="section-heading">Conversations List</h1>
            {conversations.map(conversation => (
                <Link
                    to={`/conversations/${conversation._id}`}
                    key={conversation._id}
                >
                    <div className="list-item">
                        <h3>{conversation.name}</h3>
                        <p>{conversation.memberIds.length} members</p>
                    </div>
                </Link>
            ))}
            <Link to='/new-conversation'>
                <button className="full-width space-before">New Conversation</button>
            </Link>
        </div>
    );
}