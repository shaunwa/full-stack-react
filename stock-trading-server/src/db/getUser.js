import { db } from './db';

export const getUser = async () => {
    const user = await db.getConnection().collection('users')
        .findOne({});
    return user;
}