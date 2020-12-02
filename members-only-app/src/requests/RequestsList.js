import React from 'react';
import { RequestsListItem } from './RequestsListItem';

export const RequestsList = ({ requests, onAccept, onReject }) => (
    <>
    <h2 className="section-heading">Join Requests</h2>
    {requests.length > 0
        ? (
            requests.map(request => (
                <RequestsListItem
                    key={request._id}
                    request={request}
                    onAccept={onAccept}
                    onReject={onReject} />
            ))
        ) : (
            <p>No pending requests</p>
        )}
    </>
);