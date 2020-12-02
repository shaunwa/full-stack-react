import { db } from './db';

export const getUser = async (userId) => {
    const user = await db.getConnection().collection('users')
        .findOne({ id: userId });
    return user;
}