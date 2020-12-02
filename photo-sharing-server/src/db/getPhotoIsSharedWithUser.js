import { getPhoto } from './getPhoto';

export const getPhotoIsSharedWithUser = async (userId, photoId) => {
    const photo = await getPhoto(photoId);
    return photo.sharedWith.includes(userId);
}