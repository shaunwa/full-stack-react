import React from 'react';

export const Dropdown = ({ options = [], ...props }) =>
    <select {...props}>
    {options.map(opt => (
        <option
            key={opt}
            value={opt}
        >{opt}</option>
    ))}
    </select>