import React from 'react';

export const RequestsListItem = ({ request, onAccept, onReject }) => (
    <div>
        <h3>{request.userName}</h3>
        <button onClick={() => onAccept(request.id)}>Accept</button>
        <button onClick={() => onReject(request.id)}>Reject</button>
    </div>
);