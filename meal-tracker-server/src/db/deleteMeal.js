import { ObjectID } from 'mongodb';
import { db } from './db';

export const deleteMeal = async (mealId) => {
    const connection = db.getConnection();
    await connection.collection('meals').deleteOne({ _id: ObjectID(mealId) });
}