import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    BackButton,
    Dropdown,
} from '../ui';

const unitOptions = [
    'pounds',
    'cups',
    'tablespoons',
    'teaspoons',
    'count',
];

export const AddIngredientPage = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [units, setUnits] = useState(unitOptions[0]);
    const history = useHistory();

    const addToIngredients = async () => {
        const newIngredient = { name: name.toLowerCase(), amount, units };
        await fetch('/ingredients', {
            method: 'post',
            body: JSON.stringify(newIngredient),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        alert("Successfully added ingredient!");
        history.push('/');
    };

    return (
        <div className="page">
            <BackButton />
            <div className="centered-container">
                <h1>Add Ingredient</h1>
                <input
                    type="text"
                    placeholder="Enter ingredient name here"
                    className="space-after space-before full-width"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    type="number"
                    className="space-before full-width"
                    value={amount}
                    onChange={e => setAmount(e.target.value)} />
                <Dropdown
                    className="space-before full-width"
                    onChange={e => setUnits(e.target.value)}
                    options={unitOptions} />
                <button
                    className="space-before full-width"
                    onClick={addToIngredients}
                >Add</button>
            </div>
        </div>
    );
}