import { getPhoto } from './getPhoto'; 
import { getUser } from './getUser';

export const getSanitizedPhoto = async (photoId) => {
    const photo = await getPhoto(photoId);
    delete photo.sharedWith;
    return photo;
}
