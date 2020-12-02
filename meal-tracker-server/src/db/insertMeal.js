import { db } from './db';

export const insertMeal = async (meal) => {
    const connection = db.getConnection();
    await connection.collection('meals').insertOne(meal);
}