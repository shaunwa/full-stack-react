import { db } from './db';

export const getPhotosForUser = async (userId) => {
    const photos = await db.getConnection().collection('photos')
        .find({ ownerId: userId })
        .toArray();
    return photos;
}