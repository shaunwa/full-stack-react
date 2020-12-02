import { db } from './db';

export const getIngredients = async () => {
    const connection = db.getConnection();
    const ingredients = connection.collection('ingredients').find({}).toArray();
    return ingredients;
}