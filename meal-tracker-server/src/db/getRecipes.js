import { db } from './db';

export const getRecipes = async () => { 
    const connection = db.getConnection();
    const recipes = await connection.collection('recipes').find({}).toArray();
    return recipes;
}