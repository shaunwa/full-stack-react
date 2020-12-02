import { getIngredients, insertIngredient } from '../db';

export const addIngredientRoute = {
    method: 'post',
    path: '/ingredients',
    handler: async (req, res) => {
        const ingredient = req.body;
        await insertIngredient(ingredient);
        const updatedIngredients = await getIngredients();
        res.status(200).json(updatedIngredients);
    },
}