import React from 'react';
import { Link } from 'react-router-dom';
import { SmallX } from '../ui';

export const MealsListItem = ({ meal, date, onDelete }) => (
    <div className="list-item">
        {meal ? (
            <>
            <h3>{date.getDate()}</h3>
            <p>{meal.recipe.name}</p>
            <div className="right-action">
                <SmallX onClick={() => onDelete(meal._id)} />
            </div>
            </>
        ) : (
            <>
            <h3>{date.getDate()}</h3>
            <p>No meal planned</p>
            <div className="right-action">
                <Link to={`/recipes?date=${date.toString()}`}>
                    <button>Add</button>
                </Link>
            </div>
            </>
        )}
    </div>
);