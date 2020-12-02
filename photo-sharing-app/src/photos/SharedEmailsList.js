import React, { useState } from 'react';

export const SharedEmailsList = ({ emails, onShare }) => {
    const [inviteEmailValue, setInviteEmailValue] = useState('');

    return (
        <div>
            <h3>Shared with:</h3>
            {emails.map(email => (
                <div>
                    <p>{email}</p>
                </div>
            ))}
            <div className="share-with-form">
                <input
                    type="text"
                    value={inviteEmailValue}
                    placeholder="Enter an email address to share with"
                    onChange={e => setInviteEmailValue(e.target.value)} />
                <button onClick={() => {
                    onShare(inviteEmailValue);
                    setInviteEmailValue('');
                }}>Share</button>
            </div>
        </div>
    );
}