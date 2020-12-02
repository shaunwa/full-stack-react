import { addIngredientRoute } from './addIngredientRoute';
import { addMealRoute } from './addMealRoute';
import { deleteIngredientRoute } from './deleteIngredientRoute';
import { deleteMealRoute } from './deleteMealRoute';
import { getIngredientsRoute } from './getIngredientsRoute';
import { getMealsRoute } from './getMealsRoute';
import { getShoppingListRoute } from './getShoppingListRoute';
import { searchRecipesRoute } from './searchRecipesRoute';

export const routes = [
    addIngredientRoute,
    addMealRoute,
    deleteIngredientRoute,
    deleteMealRoute,
    getIngredientsRoute,
    getMealsRoute,
    getShoppingListRoute,
    searchRecipesRoute,
];