import React from 'react';
import { Link } from 'react-router-dom';
import { MealsList, useMeals } from '../meals';
import { IngredientsList, useIngredients } from '../ingredients';

export const HomePage = () => {
    const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();
    const { ingredients, isLoading: isLoadingIngredients, setIngredients } = useIngredients();

    const onDeleteMeal = async id => {
        const response = await fetch(`/meals/${id}`, { method: 'delete' });
        const updatedMeals = await response.json();
        setMeals(updatedMeals);
    }

    const onDeleteIngredient = async name => {
        const response = await fetch(`/ingredients/${name}`, { method: 'delete' });
        const updatedIngredients = await response.json();
        setIngredients(updatedIngredients);
    }

    return (
        <div className="page-container">
            <div className="column">
                <MealsList
                    isLoading={isLoadingMeals}
                    meals={meals}
                    onDelete={onDeleteMeal} />
            </div>
            <div className="column">
                <IngredientsList
                    isLoading={isLoadingIngredients}
                    ingredients={ingredients}
                    onDelete={onDeleteIngredient} />
                <Link to='/shopping-list'>
                    <button
                        className="shopping-list-button list-container full-width"
                    >Generate Shopping List</button>
                </Link>
            </div>
        </div>
    );
}