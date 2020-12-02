import { db } from './db';

export const getSharedPhotosForUser = async (userId) => {
    const photos = await db.getConnection().collection('photos')
        .find({ sharedWith: userId })
        .toArray();
    return photos;
}