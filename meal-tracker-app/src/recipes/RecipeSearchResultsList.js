import React from 'react';
import { RecipeSearchResultsListItem } from './RecipeSearchResultsListItem';

export const RecipeSearchResultsList = ({ ingredients, recipes }) => {
    return (
        <>
        {recipes.map(recipe => (
            <RecipeSearchResultsListItem
                key={recipe.id}
                recipe={recipe}
                ingredients={ingredients} />
        ))}
        </>
    );
}