import { db } from './db';

export const getAllUsers = async () => {
    const users = await db.getConnection().collection('users')
        .find({})
        .toArray();
    return users;
}