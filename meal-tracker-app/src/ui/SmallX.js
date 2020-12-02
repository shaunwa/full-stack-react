import React from 'react';

export const SmallX = ({ onClick }) => (
    <div className="small-x">
        <span className="the-x" onClick={onClick}>x</span>
    </div>
);