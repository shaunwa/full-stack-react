import { db } from '../db';
import { getPhoto } from './getPhoto';

export const getUserOwnsPhoto = async (userId, photoId) => {
    const photo = await getPhoto(photoId);
    return photo.ownerId === userId;
}