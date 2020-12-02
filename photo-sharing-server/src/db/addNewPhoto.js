import { db } from './db';

export const addNewPhoto = async (url, title, ownerId) => {
    const newFile = { url, title, ownerId, sharedWith: [] };
    await db.getConnection().collection('photos').insertOne(newFile);
}