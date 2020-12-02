import React from 'react';
import { MessagesListItem } from './MessagesListItem';

export const MessagesList = ({ messages }) => (
    <>
    <h2 className="section-heading">Messages</h2>
    {messages.length > 0
        ? (
            messages.map(message => (
                <MessagesListItem key={message._id} message={message} />
            ))
        ) : (
            <p>No messages in this group yet</p>
        )}
    </>
)